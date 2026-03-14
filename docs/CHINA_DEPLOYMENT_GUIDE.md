# 🇨🇳 中国地区部署方案

> 针对中国用户的完整部署解决方案

---

## 🎯 推荐方案（国内可访问）

| 组件 | 平台 | 免费额度 | 中国访问 |
|------|------|----------|----------|
| **前端** | Vercel | 无限制 | ✅ 已部署 |
| **后端** | Railway | $5/月额度 | ✅ 支持 |
| **数据库** | Supabase | 500MB免费 | ✅ 支持 |
| **备选数据库** | Neon | 3GB免费 | ✅ 支持 |

---

## 方案一：Railway + Supabase（推荐）

### 1️⃣ 部署后端到 Railway

**Railway 特点：**
- ✅ 支持中国访问
- ✅ 每月 $5 免费额度
- ✅ 自动部署
- ✅ 提供免费域名

**步骤：**

1. **访问 Railway**
   ```
   https://railway.app
   ```

2. **用 GitHub 登录**

3. **创建项目**
   - 点击 "New Project"
   - 选择 "Deploy from GitHub repo"
   - 选择您的仓库

4. **配置服务**
   ```
   Root Directory: backend
   Build Command: npm install && npm run build
   Start Command: npm run start:prod
   ```

5. **添加环境变量**
   ```
   DB_HOST=<从Supabase获取>
   DB_PORT=5432
   DB_USERNAME=<从Supabase获取>
   DB_PASSWORD=<从Supabase获取>
   DB_DATABASE=postgres
   JWT_SECRET=your-super-secret-key
   NODE_ENV=production
   FRONTEND_URL=https://frontend-kohl-chi-76.vercel.app
   ```

6. **获取域名**
   - Railway 自动分配域名
   - 格式: `https://your-app.up.railway.app`

---

### 2️⃣ 创建数据库（Supabase）

**Supabase 特点：**
- ✅ 免费额度：500MB 数据库 + 5GB 存储
- ✅ 支持中国访问
- ✅ PostgreSQL 数据库
- ✅ 自动备份

**步骤：**

1. **访问 Supabase**
   ```
   https://supabase.com
   ```

2. **用 GitHub 登录**

3. **创建项目**
   - 点击 "New Project"
   - Name: `global-brand-expo`
   - Database Password: 设置强密码
   - Region: 选择 `Southeast Asia (Singapore)`
   - 点击 "Create new project"

4. **获取连接信息**
   - 进入项目 → Settings → Database
   - 复制连接信息：
   ```
   Host: db.xxxxx.supabase.co
   Database: postgres
   User: postgres
   Password: 您设置的密码
   Port: 5432
   ```

5. **导入数据表结构**
   - 进入 SQL Editor
   - 粘贴 `database/schema.sql` 内容
   - 点击 "Run" 执行

---

## 方案二：Zeabur + Neon

### Zeabur（后端部署）

**特点：**
- ✅ 中国团队开发，支持国内
- ✅ 每月 $5 免费额度
- ✅ 一键部署

**步骤：**

1. 访问 https://zeabur.com
2. 用 GitHub 登录
3. 创建项目 → 导入 GitHub 仓库
4. 选择 backend 目录
5. 自动检测 NestJS 并部署

---

### Neon（PostgreSQL 数据库）

**特点：**
- ✅ 免费 3GB 存储
- ✅ 支持中国访问
- ✅ Serverless PostgreSQL

**步骤：**

1. 访问 https://neon.tech
2. 用 GitHub 登录
3. 创建项目
4. 获取连接字符串

---

## 方案三：国内云服务（完全免费试用）

### 阿里云

**免费试用：**
- ECS 云服务器：3个月免费
- RDS 数据库：1个月免费
- OSS 存储：3个月免费

**地址：** https://www.aliyun.com/activity

---

### 腾讯云

**免费试用：**
- 云服务器：1个月免费
- 云数据库：1个月免费
- 对象存储：6个月免费

**地址：** https://cloud.tencent.com/act/free

---

### 华为云

**免费试用：**
- 弹性云服务器：1个月免费
- 云数据库：1个月免费

**地址：** https://activity.huaweicloud.com

---

## 方案四：完全免费方案

### GitHub Codespaces + Neon

**特点：**
- 完全免费
- 在线开发环境
- 自动获得公网域名

**步骤：**

1. 在 GitHub 仓库创建 Codespace
2. Codespace 自动提供域名
3. 使用 Neon 作为数据库
4. 运行项目

---

## 🚀 最快部署（推荐）

### Railway + Supabase（10分钟完成）

**步骤：**

1. **创建 Supabase 数据库**（5分钟）
   - https://supabase.com
   - GitHub 登录 → 创建项目
   - 复制数据库连接信息

2. **部署到 Railway**（5分钟）
   - https://railway.app
   - GitHub 登录 → 导入仓库
   - 配置环境变量
   - 自动部署

3. **更新前端环境变量**
   - 在 Vercel 中添加：
   ```
   NEXT_PUBLIC_API_URL=https://your-railway-app.up.railway.app/api
   ```

---

## 📝 需要的帮助

**如果您告诉我：**
1. 是否已有 GitHub 仓库？
2. 选择哪个方案？
3. 需要我帮您推送代码吗？

**我可以帮您：**
- 推送代码到 GitHub
- 配置环境变量
- 完成整个部署流程

---

*更新时间: 2026-03-14*
