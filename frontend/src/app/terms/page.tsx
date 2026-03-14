import Link from 'next/link'

export default function TermsPage() {
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
        <h1 className="text-4xl font-bold mb-8">服务条款</h1>
        
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            最后更新：2026年3月14日
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. 服务条款的接受</h2>
            <p className="text-gray-700 mb-4">
              通过访问或使用Global Brand Expo的服务，您同意受本服务条款的约束。如果您不同意本条款的任何部分，请勿使用我们的服务。
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. 服务描述</h2>
            <p className="text-gray-700 mb-4">
              Global Brand Expo提供一个B2B平台，包括品牌展览、产品展示、在线交易、企业展示等服务。我们保留随时修改或终止服务的权利。
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. 用户账户</h2>
            <p className="text-gray-700 mb-4">您需要注册账户才能使用某些功能。您同意：</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>提供准确的账户信息</li>
              <li>保持密码安全</li>
              <li>对账户活动负责</li>
              <li>立即通知我们任何安全问题</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. 用户行为</h2>
            <p className="text-gray-700 mb-4">您同意不使用服务进行：</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>违法活动</li>
              <li>侵犯他人权利</li>
              <li>发送垃圾信息</li>
              <li>传播恶意软件</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. 知识产权</h2>
            <p className="text-gray-700">
              服务内容和标识归Global Brand Expo所有。未经授权使用、复制或分发受版权保护的材料是禁止的。
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. 免责声明</h2>
            <p className="text-gray-700">
              服务按"原样"提供，不提供任何明示或暗示的保证。用户使用服务的风险由自己承担。
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">7. 联系我们</h2>
            <p className="text-gray-700">
              如有任何问题，请联系我们：contact@globalbrandexpo.com
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
