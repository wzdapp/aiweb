import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <div className="text-6xl mb-4">🔍</div>
        <h2 className="text-2xl font-bold mb-2">404 - 页面未找到</h2>
        <p className="text-gray-600 mb-6">
          抱歉，您访问的页面不存在。
        </p>
        
        <Link
          href="/"
          className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
        >
          返回首页
        </Link>
      </div>
    </div>
  )
}
