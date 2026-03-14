'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CategoriesPage() {
  const [categories] = useState([
    { id: 1, name: '电子产品', nameEn: 'Electronics', slug: 'electronics', products: 156, image: '📱' },
    { id: 2, name: '家居用品', nameEn: 'Home & Garden', slug: 'home', products: 89, image: '🏠' },
    { id: 3, name: '服装服饰', nameEn: 'Fashion', slug: 'fashion', products: 234, image: '👔' },
    { id: 4, name: '食品饮料', nameEn: 'Food & Beverage', slug: 'food', products: 67, image: '🍔' },
    { id: 5, name: '美妆护肤', nameEn: 'Beauty', slug: 'beauty', products: 123, image: '💄' },
    { id: 6, name: '运动户外', nameEn: 'Sports', slug: 'sports', products: 78, image: '⚽' },
    { id: 7, name: '工业设备', nameEn: 'Industrial', slug: 'industrial', products: 45, image: '🏭' },
    { id: 8, name: '医疗器械', nameEn: 'Medical', slug: 'medical', products: 34, image: '🏥' },
  ])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">产品分类</h1>
          <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700">
            添加分类
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              href={`/products?category=${category.slug}`}
              key={category.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <span className="text-8xl">{category.image}</span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{category.nameEn}</p>
                <p className="text-primary-600 font-medium">{category.products} 个产品</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
