# 🚀 快速部署指南

## 前端部署到 Vercel

### 方式一：命令行部署（需要 token）

```bash
# 1. 安装 Vercel CLI（已安装）
npm i -g vercel

# 2. 登录（需要 token）
vercel login

# 3. 部署
cd frontend
vercel --prod
```

---

### 方式二：网站部署（推荐，无需 token）

#### 步骤：

**1. 打开 Vercel 网站**
```
https://vercel.com
```

**2. 使用 GitHub 登录**
- 点击 "Continue with GitHub"
- 授权 Vercel 访问您的 GitHub

**3. 导入项目**
- 点击 "Add New..." → "Project"
- 选择您的 GitHub 仓库
- 如果还没推送，先看下面的"推送代码到 GitHub"

**4. 配置项目**
- Framework Preset: Next.js（自动检测）
- Root Directory: `frontend`
- Build Command: `npm run build`
- Output Directory: `.next`

**5. 环境变量（可选）**
```
NEXT_PUBLIC_API_URL=https://your-backend.onrender.com/api
```

**6. 点击 Deploy**

**7. 等待部署完成**
- 大约 1-2 分钟
- 自动获得域名：`https://your-project.vercel.app`

---

## 推送代码到 GitHub

### 如果还没有 GitHub 仓库：

```bash
# 1. 创建 GitHub 仓库
# 在 GitHub 网站上创建新仓库

# 2. 推送代码
cd /workspace/projects/workspace/projects/global-brand-expo

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 如果已有 GitHub 仓库：

```bash
cd /workspace/projects/workspace/projects/global-brand-expo
git push origin main
```

---

## 后端部署到 Render

### 步骤：

**1. 打开 Render 网站**
```
https://render.com
```

**2. 使用 GitHub 登录**

**3. 创建 Web Service**
- 点击 "New +" → "Web Service"
- 选择您的 GitHub 仓库

**4. 配置**
- Name: `global-brand-expo-api`
- Region: Singapore（最近的区域）
- Branch: `main`
- Root Directory: `backend`
- Build Command: `npm install && npm run build`
- Start Command: `npm run start:prod`

**5. 环境变量**
```
DB_HOST=<从数据库获取>
DB_PORT=3306
DB_USERNAME=<从数据库获取>
DB_PASSWORD=<从数据库获取>
DB_DATABASE=global_brand_expo
JWT_SECRET=your-super-secret-key
NODE_ENV=production
FRONTEND_URL=https://your-project.vercel.app
```

**6. 点击 "Create Web Service"**

**7. 等待部署完成**
- 大约 3-5 分钟
- 自动获得域名：`https://your-project.onrender.com`

---

## 数据库（PlanetScale）

### 步骤：

**1. 打开 PlanetScale**
```
https://planetscale.com
```

**2. 使用 GitHub 登录**

**3. 创建数据库**
- 点击 "Create database"
- Name: `global-brand-expo`
- Region: 选择最近的区域

**4. 获取连接信息**
- 点击 "Connect" → "Connect with" → "Node.js"
- 复制连接信息到 Render 环境变量

---

## ✅ 完成！

部署完成后，您将获得：
- **前端**: `https://your-project.vercel.app`
- **后端**: `https://your-api.onrender.com`
- **数据库**: PlanetScale 控制台

---

## 🔗 有用链接

- [Vercel 文档](https://vercel.com/docs)
- [Render 文档](https://render.com/docs)
- [PlanetScale 文档](https://planetscale.com/docs)

---

需要帮助？ 告诉我在哪一步卡住了！ 😊
