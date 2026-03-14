import { Injectable } from '@nestjs/common';
import * as qiniu from 'qiniu';

@Injectable()
export class QiniuService {
  private accessKey: string;
  private secretKey: string;
  private bucket: string;
  private mac: qiniu.auth.digest.Mac;
  private config: qiniu.conf.Config;
  private bucketManager: qiniu.rs.BucketManager;
  private formUploader: qiniu.form_up.FormUploader;
  private putPolicy: qiniu.rs.PutPolicy;

  constructor() {
    this.accessKey = process.env.QINIU_ACCESS_KEY || '';
    this.secretKey = process.env.QINIU_SECRET_KEY || '';
    this.bucket = process.env.QINIU_BUCKET || '';
    
    this.mac = new qiniu.auth.digest.Mac(this.accessKey, this.secretKey);
    this.config = new qiniu.conf.Config();
    this.bucketManager = new qiniu.rs.BucketManager(this.mac, this.config);
    this.formUploader = new qiniu.form_up.FormUploader(this.config);
    this.putPolicy = new qiniu.rs.PutPolicy();
  }

  /**
   * 生成上传Token
   */
  getUploadToken(key?: string): string {
    if (key) {
      this.putPolicy.scope = `${this.bucket}:${key}`;
    } else {
      this.putPolicy.scope = this.bucket;
    }
    
    // 设置Token有效期（秒）
    this.putPolicy.expires = 7200; // 2小时
    
    return new qiniu.rs.PutPolicy2(this.mac, this.putPolicy).token();
  }

  /**
   * 上传文件（Base64或Buffer）
   */
  async uploadFile(
    file: Buffer | string,
    key: string,
    mimeType?: string,
  ): Promise<{ key: string; url: string; hash: string }> {
    return new Promise((resolve, reject) => {
      const uploadToken = this.getUploadToken(key);
      
      const formUploader = new qiniu.form_up.FormUploader(this.config);
      const putExtra = new qiniu.form_up.PutExtra();
      
      if (mimeType) {
        putExtra.mimeType = mimeType;
      }
      
      formUploader.put(
        uploadToken,
        key,
        file,
        putExtra,
        (err: any, body: any, info: any) => {
          if (err) {
            reject(err);
            return;
          }
          
          const url = `https://${this.bucket}.cdn.kuojing.cloudns.com/${key}`;
          resolve({
            key,
            url,
            hash: body.hash,
          });
        },
      );
    });
  }

  /**
   * 删除文件
   */
  async deleteFile(key: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.bucketManager.delete(
        this.bucket,
        key,
        (err: any) => {
          if (err) {
            reject(err);
            return;
          }
          resolve();
        },
      );
    });
  }

  /**
   * 获取文件信息
   */
  async getFileInfo(key: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.bucketManager.stat(
        this.bucket,
        key,
        (err: any, info: any) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(info);
        },
      );
    });
  }

  /**
   * 批量删除文件
   */
  async deleteFiles(keys: string[]): Promise<void> {
    await Promise.all(keys.map((key) => this.deleteFile(key)));
  }

  /**
   * 生成访问URL（私有空间）
   */
  getPrivateUrl(key: string, expires: number = 3600): string {
    const deadline = Math.floor(Date.now() / 1000) + expires;
    return qiniu.rs.private.downloadUrl(
      this.mac,
      `${this.bucket}.cdn.kuojing.cloudns.com/${key}`,
      deadline,
    );
  }
}
