import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">品牌出海平台</h3>
            <p className="text-gray-400">
              品牌出海展会 + 数字化 B2B 一体化解决方案
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">核心功能</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/products">产品展示</Link></li>
              <li><Link href="/customers">客户管理</Link></li>
              <li><Link href="/leads">线索管理</Link></li>
              <li><Link href="/dashboard">数据看板</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">关于</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about">关于我们</Link></li>
              <li><Link href="/contact">联系我们</Link></li>
              <li><Link href="/help">帮助中心</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">法律</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/privacy">隐私政策</Link></li>
              <li><Link href="/terms">服务条款</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 品牌出海平台. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
