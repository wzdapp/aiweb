# 🗂️ 七牛云存储配置指南

## 📋 简介

七牛云（Qiniu Cloud）是国内领先的云存储服务，支持对象存储、CDN加速、数据处理等功能。

---

## 🚀 为什么选择七牛云？

✅ **国内访问速度快** - 全国多个CDN节点  
✅ **免费额度充足** - 10GB存储 + 免费流量  
✅ **API 简单易用** - 完整的SDK支持  
✅ **稳定可靠** - 月活用户过亿  
✅ **成本低廉** - 超出部分按量计费，很便宜

---

## 📝 注册步骤

### 1. 注册七牛云账号

**访问**: https://www.qiniu.com

**步骤**:
1. 点击右上角 "注册"
2. 用手机号注册
3. 完成实名认证（需要身份证）

---

### 2. 创建存储空间（Bucket）

**步骤**:
1. 登录后，进入"对象存储" → "空间管理"
2. 点击 "新建空间"
3. 填写信息：
   ```
   空间名称: brand-expo-storage
   访问控制: 公开读
   存储区域: 华东 (z0) - 或选择最近的区域
   ```
4. 点击 "创建"

---

### 3. 获取密钥

**步骤**:
1. 进入"个人中心" → "密钥管理"
2. 点击 "新建密钥"
3. 密钥名称: `brand-expo-key`
4. 复制 AccessKey 和 SecretKey

---

## 🔧 环境变量配置

### 后端配置 (.env)

```env
# 七牛云存储
QINIU_ACCESS_KEY=your_access_key_here
QINIU_SECRET_KEY=your_secret_key_here
QINIU_BUCKET=brand-expo-storage
QINIU_REGION=z0
```

**参数说明**:
- `QINIU_ACCESS_KEY`: AccessKey（从密钥管理获取）
- `QINIU_SECRET_KEY`: SecretKey（从密钥获取）
- `QINIU_BUCKET`: 存储空间名称
- `QINIU_REGION`: 区域代码
  - `z0` = 华东
  - `z1` = 华北
  - `z2` = 华南
  - `na0` = 北美

---

## 📦 安装依赖

### 后端

```bash
cd backend
npm install qiniu
```

前端无需额外依赖，使用 HTTP API 调用后端。

---

## 🎯 使用方法

### 1. 获取上传Token

```bash
GET /api/qiniu/upload-token?key=example.jpg
```

**响应**:
```json
{
  "token": "xxx",
  "bucket": "brand-expo-storage",
  "region": "z0"
}
```

### 2. 上传文件

```bash
POST /api/qiniu/upload
Content-Type: multipart/form-data

file: <binary>
key: example.jpg
mimeType: image/jpeg
```

**响应**:
```json
{
  "success": true,
  "key": "example.jpg",
  "url": "https://brand-expo-storage.cdn.kuojing.cloudns.com/example.jpg",
  "hash": "xxx"
}
```

### 3. 删除文件

```bash
DELETE /api/qiniu/file/example.jpg
```

### 4. 获取私有文件URL

```bash
GET /api/qiniu/private-url/example.jpg?expires=3600
```

---

## 💰 免费额度

### 标准用户

- **存储空间**: 10GB
- **HTTP下载流量**: 10GB/月
- **CDN流量**: 10GB/月
- **PUT/DELETE**: 100万次/月

### 超出部分计费（仅供参考，实际以官网为准）

- **存储**: ¥0.029/GB/月
- **CDN下载**: ¥0.29/GB（中国大陆）
- **PUT/DELETE**: ¥0.01/万次

---

## 📊 项目中的使用

### 后端 API

| 端点 | 方法 | 说明 |
|------|------|------|
| `/qiniu/upload-token` | GET | 获取上传Token |
| `/qiniu/upload` | POST | 上传文件 |
| `/qiniu/file/:key` | DELETE | 删除文件 |
| `/qiniu/file/:key` | GET | 获取文件信息 |
| `/qiniu/private-url/:key` | GET | 获取私有URL |

### 前端组件

- **FileUpload**: 文件上传组件
- **FileManager**: 文件管理页面

---

## 🔐 安全建议

1. **保护密钥**
   - 不要将密钥提交到代码仓库
   - 使用环境变量
   - 定期轮换密钥

2. **设置访问控制**
   - 公开读：允许公开访问
   - 私有：需要Token访问

3. **文件命名**
   - 使用时间戳避免重名
   - 添加随机字符串提高安全性

---

## 🌐 域名配置

### 绑定自定义域名

1. 在七牛云控制台，进入"对象存储" → "空间管理"
2. 选择空间 → "域名设置"
3. 添加自定义域名
4. 按照提示配置 CNAME

### 使用 CDN 加速

- 自动启用
- 支持全球加速
- 国内访问速度极快

---

## 📝 常见问题

### Q: 上传失败？

**A**: 检查以下内容：
- 密钥是否正确
- 存储空间是否存在
- 文件大小是否超过限制
- 网络连接是否正常

### Q: 无法访问文件？

**A**: 
- 检查存储空间的访问控制设置
- 如果是私有空间，需要使用带Token的URL

### Q: 如何批量上传？

**A**: 
- 可以循环调用上传接口
- 或使用七牛云的批量上传工具

---

## 📚 参考资料

- **七牛云官网**: https://www.qiniu.com
- **七牛云文档**: https://developer.qiniu.com
- **Node.js SDK**: https://developer.qiniu.com/kodo/sdk/sdk-for-nodejs

---

*最后更新: 2026-03-14*
