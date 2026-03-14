#!/bin/bash
# 一键部署脚本

echo "🚀 开始部署 Global Brand Expo..."
echo ""

# 检查是否已安装 Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "📦 安装 Vercel CLI..."
    npm install -g vercel
fi

echo ""
echo "📝 部署步骤："
echo "1. 访问 https://vercel.com 并登录"
echo "2. 点击 'Add New Project'"
echo "3. 导入您的 GitHub 仓库"
echo "4. 选择 frontend 目录"
echo "5. 点击 Deploy"
echo ""
echo "或者，在终端运行: cd frontend && vercel"
echo ""

# 显示当前项目信息
echo "📁 项目位置:"
echo "   /workspace/projects/workspace/projects/global-brand-expo"
echo ""
echo "🌐 本地预览地址:"
echo "   http://localhost:3002"
echo ""
echo "📋 可用页面:"
echo "   - / (首页)"
echo "   - /products (产品列表)"
echo "   - /dashboard (数据看板)"
echo "   - /customers (客户管理)"
echo "   - /exhibitions (展会管理)"
echo "   - /leads (线索管理)"
echo "   - /cart (购物车)"
echo "   - /orders (订单列表)"
echo "   - /login (登录)"
echo "   - /register (注册)"
echo ""
