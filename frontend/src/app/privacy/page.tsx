import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            Brand Expo
          </Link>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">隐私政策</h1>
        
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            最后更新：2026年3月14日
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. 引言</h2>
            <p className="text-gray-700 mb-4">
              Global Brand Expo（以下简称"我们"）非常重视用户的隐私保护。本隐私政策阐述了我们在您使用我们的服务时如何收集、使用、存储和保护您的个人信息。
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. 信息收集</h2>
            <p className="text-gray-700 mb-4">我们可能收集以下类型的信息：</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>账户信息：姓名、邮箱、电话、公司信息</li>
              <li>交易信息：订单历史、支付信息</li>
              <li>使用数据：浏览记录、访问时间</li>
              <li>设备信息：IP地址、浏览器类型</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. 信息使用</h2>
            <p className="text-gray-700 mb-4">我们使用收集的信息用于：</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>提供和维护我们的服务</li>
              <li>处理您的交易</li>
              <li>与您沟通更新和优惠</li>
              <li>改进我们的产品和服务</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. 信息保护</h2>
            <p className="text-gray-700">
              我们采用行业标准的安全措施保护您的个人信息，包括加密存储、访问控制和安全传输。但请注意，互联网传输并非100%安全。
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. 您的权利</h2>
            <p className="text-gray-700 mb-4">您有权：</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>访问您的个人信息</li>
              <li>更正不准确的信息</li>
              <li>删除您的个人信息</li>
              <li>撤回同意</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">6. 联系我们</h2>
            <p className="text-gray-700">
              如有任何隐私相关问题，请联系我们：contact@globalbrandexpo.com
            </p>
          </section>
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2026 Global Brand Expo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
