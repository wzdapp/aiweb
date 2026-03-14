# 🚀 免费部署指南

> 完全免费的生产环境部署方案

---

## 📋 推荐方案

| 组件 | 平台 | 免费额度 | 推荐指数 |
|------|------|----------|----------|
| 前端 | [Vercel](https://vercel.com) | 无限制 | ⭐⭐⭐⭐⭐ |
| 后端 | [Render](https://render.com) | 750小时/月 | ⭐⭐⭐⭐⭐ |
| 数据库 | [PlanetScale](https://planetscale.com) | 5GB存储 | ⭐⭐⭐⭐⭐ |
| 备选数据库 | [Supabase](https://supabase.com) | 500MB+5GB | ⭐⭐⭐⭐ |

---

## 🎯 方案一：Vercel + Render + PlanetScale（推荐）

### 第一步：部署前端到 Vercel

1. **注册 Vercel**
   - 访问 https://vercel.com
   - 使用 GitHub 账号登录

2. **导入项目**
   ```bash
   cd frontend
   vercel
   ```

   或在 Vercel 网站上：
   - 点击 "New Project"
   - 导入 GitHub 仓库
   - 选择 `/frontend` 目录
   - 点击 "Deploy"

3. **配置环境变量**
   ```
   NEXT_PUBLIC_API_URL=https://your-backend.onrender.com/api
   ```

4. **获取域名**
   - 自动分配: `your-project.vercel.app`
   - 可绑定自定义域名

---

### 第二步：部署后端到 Render

1. **注册 Render**
   - 访问 https://render.com
   - 使用 GitHub 账号登录

2. **创建 Web Service**
   - 点击 "New +" → "Web Service"
   - 连接 GitHub 仓库
   - 选择 `/backend` 目录

3. **配置构建命令**
   ```yaml
   Build Command: npm install && npm run build
   Start Command: npm run start:prod
   ```

4. **配置环境变量**
   ```
   DB_HOST=<从PlanetScale获取>
   DB_PORT=3306
   DB_USERNAME=<从PlanetScale获取>
   DB_PASSWORD=<从PlanetScale获取>
   DB_DATABASE=global_brand_expo
   JWT_SECRET=your-super-secret-jwt-key
   NODE_ENV=production
   FRONTEND_URL=https://your-project.vercel.app
   ```

5. **获取域名**
   - 自动分配: `your-backend.onrender.com`

---

### 第三步：创建 PlanetScale 数据库

1. **注册 PlanetScale**
   - 访问 https://planetscale.com
   - 使用 GitHub 账号登录

2. **创建数据库**
   - 点击 "Create database"
   - 名称: `global-brand-expo`
   - 区域: 选择最近的区域

3. **获取连接信息**
   - 点击 "Connect" → "Connect with"
   - 选择 "Node.js"
   - 复制连接字符串

4. **导入数据库结构**
   ```bash
   # 使用 PlanetScale CLI
   pscale auth login
   pscale shell global-brand-expo main < database/schema.sql
   ```

---

## 🎯 方案二：Netlify + Railway + Supabase

### 前端: Netlify
- 访问 https://netlify.com
- 拖拽 `frontend/.next` 文件夹
- 或连接 GitHub 自动部署

### 后端: Railway
- 访问 https://railway.app
- 连接 GitHub 仓库
- 自动检测 NestJS
- 配置环境变量

### 数据库: Supabase
- 访问 https://supabase.com
- 创建新项目
- 获取 PostgreSQL 连接信息

---

## 🎯 方案三：GitHub Codespaces（在线开发环境）

### 创建 Codespace
1. 打开 GitHub 仓库
2. 点击 "Code" → "Codespaces"
3. 点击 "Create codespace on main"

### 自动配置
```yaml
# .devcontainer/devcontainer.json
{
  "image": "mcr.microsoft.com/devcontainers/universal:2",
  "features": {
    "node": "20"
  },
  "forwardPorts": [3000, 3001],
  "postCreateCommand": "cd frontend && npm install && cd ../backend && npm install"
}
```

### 获取临时域名
- Codespaces 自动提供公网域名
- 格式: `https://your-codespace-name-3000.app.github.dev`

---

## 🎯 方案四：免费 VPS

### Oracle Cloud（推荐）
- 访问 https://cloud.oracle.com
- 注册免费账户
- 创建免费 VM 实例
- 配置: 4核 24GB RAM 200GB 存储
- 永久免费！

### Google Cloud
- 访问 https://cloud.google.com
- 注册免费试用
- $300 免费额度（90天）

### AWS
- 访问 https://aws.amazon.com
- 注册免费套餐
- 12个月免费 EC2

---

## 📝 快速部署命令

### Vercel 部署
```bash
cd frontend
vercel --prod
```

### Render 部署
```bash
# 在 Render 网站上配置，自动部署
```

### 手动部署到 VPS
```bash
# 1. 安装依赖
npm install -g pm2

# 2. 克隆项目
git clone your-repo-url
cd global-brand-expo

# 3. 安装前端
cd frontend && npm install && npm run build

# 4. 安装后端
cd ../backend && npm install && npm run build

# 5. 启动服务
pm2 start backend/dist/main.js --name api
pm2 start "npm run start" --name frontend

# 6. 配置 Nginx 反向代理
```

---

## 🔗 有用的链接

- [Vercel 文档](https://vercel.com/docs)
- [Render 文档](https://render.com/docs)
- [PlanetScale 文档](https://planetscale.com/docs)
- [Railway 文档](https://docs.railway.app)
- [Supabase 文档](https://supabase.com/docs)

---

## 💡 建议

**最简单方案**: Vercel（前端）+ Render（后端）+ PlanetScale（数据库）
- 完全免费
- 自动部署
- 全球 CDN
- 零运维

**最强大方案**: Oracle Cloud 免费套餐
- 永久免费
- 完全控制
- 可运行多个项目

---

*更新时间: 2026-03-14*
