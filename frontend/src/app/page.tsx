import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/Button'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">
              品牌出海展会 + 数字化 B2B 平台
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              四大核心功能：产品展示、客户管理、线索管理、数据看板
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/products">
                <Button size="lg">立即开始</Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  查看演示
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              四大核心功能
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link href="/products" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="text-xl font-bold mb-2">产品展示</h3>
                <p className="text-gray-600">
                  完整的产品展示系统，支持多语言、多规格、多价格
                </p>
              </Link>
              
              <Link href="/customers" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold mb-2">客户管理</h3>
                <p className="text-gray-600">
                  全方位客户管理，支持分级分类、跟进记录、状态追踪
                </p>
              </Link>
              
              <Link href="/leads" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-2">线索管理</h3>
                <p className="text-gray-600">
                  智能线索追踪，评分系统，自动分配，提高转化率
                </p>
              </Link>
              
              <Link href="/dashboard" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-2">数据看板</h3>
                <p className="text-gray-600">
                  实时数据看板，ROI精准计算，智能洞察
                </p>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-gray-600">产品数量</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-600">合作品牌</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
                <div className="text-gray-600">展会线索</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
                <div className="text-gray-600">客户满意度</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
