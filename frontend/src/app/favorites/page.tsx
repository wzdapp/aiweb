'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function FavoritesPage() {
  const [favorites] = useState([
    { id: 1, name: '智能电子产品展示系统', price: 15999, image: '📱', company: '深圳科技有限公司' },
    { id: 2, name: '品牌展会搭建方案', price: 8999, image: '🎪', company: '广州会展集团' },
    { id: 3, name: '数字营销服务', price: 5999, image: '📢', company: '北京营销公司' },
  ])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">我的收藏</h1>
        
        {favorites.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">❤️</div>
            <h2 className="text-2xl font-bold mb-2">暂无收藏</h2>
            <p className="text-gray-600 mb-6">快去发现感兴趣的产品吧</p>
            <Link href="/products" className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700">
              浏览产品
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                  <span className="text-6xl">{item.image}</span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.company}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-primary-600">¥{item.price.toLocaleString()}</span>
                    <button className="text-red-500 hover:text-red-700">
                      ❤️
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  )
}
