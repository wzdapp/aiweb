#!/bin/bash
# Global Brand & Digital Expo - 项目初始化脚本
# 2026-03-14

echo "🚀 开始初始化 Global Brand & Digital Expo 项目..."

# 检查Node.js版本
echo ""
echo "📋 检查开发环境..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v)
    echo "✅ Node.js: $NODE_VERSION"
else
    echo "❌ Node.js 未安装，请先安装 Node.js 20+"
    exit 1
fi

if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm -v)
    echo "✅ npm: $NPM_VERSION"
else
    echo "❌ npm 未安装"
    exit 1
fi

if command -v python3 &> /dev/null; then
    PYTHON_VERSION=$(python3 --version)
    echo "✅ Python: $PYTHON_VERSION"
else
    echo "❌ Python3 未安装，请先安装 Python 3.11+"
    exit 1
fi

echo ""
echo "📦 安装前端依赖..."
cd frontend
if [ -f package.json ]; then
    npm install
    echo "✅ 前端依赖安装完成"
else
    echo "❌ 未找到前端 package.json"
    exit 1
fi

cd ..

echo ""
echo "📦 安装后端依赖..."
cd backend
if [ -f package.json ]; then
    npm install
    echo "✅ 后端依赖安装完成"
else
    echo "❌ 未找到后端 package.json"
    exit 1
fi

cd ..

echo ""
echo "📦 安装AI依赖..."
cd ai
if [ -f requirements.txt ]; then
    pip3 install -r requirements.txt
    echo "✅ AI依赖安装完成"
else
    echo "❌ 未找到 AI requirements.txt"
    exit 1
fi

cd ..

echo ""
echo "📝 创建开发环境配置..."
cat > .env.example << 'EOF'
# 数据库配置
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=password
DB_DATABASE=global_brand_expo

# MongoDB配置
MONGODB_URI=mongodb://localhost:27017/global_brand_expo

# Redis配置
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=

# Elasticsearch配置
ES_HOST=localhost
ES_PORT=9200

# JWT配置
JWT_SECRET=your-secret-key-change-in-production
JWT_EXPIRES_IN=7d

# API配置
API_PORT=3000
API_PREFIX=/api/v1

# 前端配置
NEXT_PUBLIC_API_URL=http://localhost:3000/api/v1
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# 文件上传配置
UPLOAD_DIR=./uploads
MAX_FILE_SIZE=10485760

# 短信配置
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=

# 邮件配置
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
SMTP_FROM=

# 第三方API
OPENAI_API_KEY=
GOOGLE_TRANSLATE_API_KEY=
EOF
echo "✅ 环境配置模板创建完成"

echo ""
echo "📚 创建开发文档..."
cat > DEVELOPMENT_GUIDE.md << 'EOF'
# 开发指南

## 环境要求
- Node.js 20+
- npm 10+
- Python 3.11+
- MySQL 8.0+
- MongoDB 7.0+
- Redis 7.0+
- Elasticsearch 8.11+

## 快速开始
1. 复制环境配置: cp .env.example .env
2. 配置数据库连接信息
3. 启动前端: cd frontend && npm run dev
4. 启动后端: cd backend && npm run start:dev
5. 启动AI: cd ai && python main.py

## 开发规范
- 遵循Git Flow工作流
- 代码提交使用Conventional Commits
- 所有代码必须经过Code Review
- 单元测试覆盖率 > 80%

## 提交规范
feat: 新功能
fix: 修复bug
docs: 文档更新
style: 代码格式
refactor: 重构
test: 测试
chore: 构建/工具
EOF
echo "✅ 开发文档创建完成"

echo ""
echo "🔧 创建Git配置..."
cat > .gitignore << 'EOF'
# 依赖
node_modules/
.pnp
.pnp.js

# 构建输出
dist/
build/
.next/
out/
__pycache__/

# 环境变量
.env
.env.local
.env.*.local

# IDE
.idea/
.vscode/
*.swp
*.swo

# 日志
logs/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# 测试
coverage/
.nyc_output/

# 临时文件
*.tmp
*.temp
.cache/

# 数据
*.sqlite
*.db
uploads/

# 系统文件
.DS_Store
Thumbs.db
EOF
echo "✅ Git忽略规则创建完成"

echo ""
echo "📊 创建项目统计..."
TOTAL_TASKS=110
echo "总任务数: $TOTAL_TASKS"
echo "当前完成: 5"
echo "完成进度: 5%"

echo ""
echo "✅ 项目初始化完成！"
echo ""
echo "📖 下一步:"
echo "1. 配置 .env 文件"
echo "2. 启动开发服务器"
echo "3. 查看开发文档: cat DEVELOPMENT_GUIDE.md"
echo "4. 查看任务清单: cat docs/DEVELOPMENT_TASKS.md"
echo ""
echo "🚀 开始开发吧！"
