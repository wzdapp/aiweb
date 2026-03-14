# 🚀 Global Brand Expo - 部署指南

> 本指南帮助您将项目部署到生产环境

---

## 📋 部署前检查清单

- [ ] MySQL数据库已创建
- [ ] Node.js 18+ 已安装
- [ ] 域名已配置 (可选)
- [ ] SSL证书已准备 (可选)

---

## 🗄️ 第一步：数据库设置

### 创建数据库
```sql
CREATE DATABASE global_brand_expo CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### 导入数据
```bash
mysql -u root -p global_brand_expo < database/schema.sql
```

---

## ⚙️ 第二步：后端部署

### 1. 安装依赖
```bash
cd backend
npm install
```

### 2. 配置环境变量
```bash
cp .env.example .env
# 编辑 .env 文件，配置数据库等信息
```

### 3. 启动生产构建
```bash
# 构建
npm run build

# 启动
npm run start:prod
```

### 4. 使用 PM2 管理进程
```bash
# 安装 PM2
npm install -g pm2

# 启动应用
pm2 start dist/main.js --name global-brand-expo-api

# 设置开机自启
pm2 startup
pm2 save
```

---

## 🌐 第三步：前端部署

### 1. 安装依赖
```bash
cd frontend
npm install
```

### 2. 配置环境变量
```bash
# 编辑 .env.local
NEXT_PUBLIC_API_URL=https://your-api-domain.com/api
```

### 3. 构建生产版本
```bash
npm run build
```

### 4. 部署到 Vercel (推荐)
```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel --prod
```

### 或者部署到 Nginx

```bash
# 构建输出在 frontend/.next
# 配置 Nginx:

server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        root /var/www/global-brand-expo/out;
        try_files $uri $uri.html $uri/index.html /index.html;
        index index.html;
    }
    
    location /api {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 🔒 第四步：安全配置

### 环境变量 (.env)
```env
# 必须修改以下值！
JWT_SECRET=your-super-secret-jwt-key-change-this
DB_PASSWORD=your-secure-database-password

# 生产环境
NODE_ENV=production
FRONTEND_URL=https://your-domain.com
```

### 防火墙配置
```bash
# 仅开放必要端口
sudo ufw allow 22   # SSH
sudo ufw allow 80   # HTTP
sudo ufw allow 443  # HTTPS
```

---

## 📊 第五步：监控设置

### PM2 监控
```bash
# 查看日志
pm2 logs global-brand-expo-api

# 查看状态
pm2 status

# 重启
pm2 restart global-brand-expo-api
```

### 日志轮转
```bash
# 安装日志管理
sudo npm install -g pm2-logrotate

# 配置
pm2-logrotate install
```

---

## 🔧 常见问题

### Q: 启动失败，端口被占用？
```bash
# 查找占用进程
lsof -i :3001

# 杀死进程
kill -9 <PID>
```

### Q: 数据库连接失败？
```bash
# 检查 MySQL 服务
sudo systemctl status mysql

# 测试连接
mysql -u root -p -e "SHOW DATABASES;"
```

### Q: 前端构建失败？
```bash
# 清除缓存重新构建
rm -rf .next
npm run build
```

---

## 📞 支持

如有问题，请联系：support@globalbrandexpo.com

---

*最后更新: 2026-03-14*
*版本: 1.0.0*
