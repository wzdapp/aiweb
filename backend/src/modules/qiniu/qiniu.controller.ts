import { Controller, Post, Get, Delete, Body, Param, Query } from '@nestjs/common';
import { QiniuService } from './qiniu.service';

@Controller('qiniu')
export class QiniuController {
  constructor(private readonly qiniuService: QiniuService) {}

  /**
   * 获取上传Token
   */
  @Get('upload-token')
  getUploadToken(@Query('key') key?: string) {
    const token = this.qiniuService.getUploadToken(key);
    return {
      token,
      bucket: process.env.QINIU_BUCKET,
      region: process.env.QINIU_REGION || 'z0',
    };
  }

  /**
   * 上传文件
   */
  @Post('upload')
  async uploadFile(
    @Body('file') file: Buffer,
    @Body('key') key: string,
    @Body('mimeType') mimeType?: string,
  ) {
    try {
      const result = await this.qiniuService.uploadFile(file, key, mimeType);
      return {
        success: true,
        ...result,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }

  /**
   * 删除文件
   */
  @Delete('file/:key')
  async deleteFile(@Param('key') key: string) {
    try {
      await this.qiniuService.deleteFile(key);
      return {
        success: true,
        message: 'File deleted successfully',
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }

  /**
   * 获取文件信息
   */
  @Get('file/:key')
  async getFileInfo(@Param('key') key: string) {
    try {
      const info = await this.qiniuService.getFileInfo(key);
      return {
        success: true,
        info,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }

  /**
   * 批量删除文件
   */
  @Post('delete-batch')
  async deleteFiles(@Body('keys') keys: string[]) {
    try {
      await this.qiniuService.deleteFiles(keys);
      return {
        success: true,
        message: `${keys.length} files deleted successfully`,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }

  /**
   * 获取私有文件访问URL
   */
  @Get('private-url/:key')
  getPrivateUrl(
    @Param('key') key: string,
    @Query('expires') expires: string = '3600',
  ) {
    try {
      const url = this.qiniuService.getPrivateUrl(key, parseInt(expires));
      return {
        success: true,
        url,
        expires: parseInt(expires),
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }
}
