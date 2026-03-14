'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">
              关于我们
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              致力于为全球品牌提供最优质的展会和数字化解决方案
            </p>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">我们的使命</h2>
              <p className="text-lg text-gray-600">
                我们致力于帮助中国企业走向世界，通过创新的数字化解决方案和专业的展会服务，
                连接全球买家和卖家，打造高效的品牌展示和商务对接平台。
              </p>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">核心价值观</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3">客户至上</h3>
                <p className="text-gray-600">
                  始终以客户需求为导向，提供最优质的服务和解决方案
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-5xl mb-4">💡</div>
                <h3 className="text-xl font-bold mb-3">创新驱动</h3>
                <p className="text-gray-600">
                  不断探索新技术、新模式，为客户创造更大价值
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-3">诚信合作</h3>
                <p className="text-gray-600">
                  以诚信为本，与客户、合作伙伴建立长期稳定的合作关系
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">团队优势</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">👨‍💼</span>
                </div>
                <h3 className="font-bold mb-2">专业团队</h3>
                <p className="text-gray-600">20+年行业经验</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🌍</span>
                </div>
                <h3 className="font-bold mb-2">全球视野</h3>
                <p className="text-gray-600">覆盖50+国家</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🏆</span>
                </div>
                <h3 className="font-bold mb-2">行业认可</h3>
                <p className="text-gray-600">1000+成功案例</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">⏱️</span>
                </div>
                <h3 className="font-bold mb-2">高效响应</h3>
                <p className="text-gray-600">7×24小时服务</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-20 bg-primary-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-lg">合作品牌</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-lg">展会活动</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50000+</div>
                <div className="text-lg">注册采购商</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-lg">客户满意度</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
