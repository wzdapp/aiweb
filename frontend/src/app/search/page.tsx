'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function SearchPage() {
  const [query] = useState('')
  const [results] = useState([
    { id: 1, type: 'product', name: '智能电子产品展示系统', description: '创新的互动展示解决方案' },
    { id: 2, type: 'product', name: '品牌展会搭建方案', description: '一站式展会服务' },
    { id: 3, type: 'exhibition', name: '2026春季广交会', description: '中国进出口商品交易会' },
    { id: 4, type: 'customer', name: '深圳科技有限公司', description: '电子产品制造商' },
  ])

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'product': return '📦'
      case 'exhibition': return '🎪'
      case 'customer': return '👥'
      default: return '📄'
    }
  }

  const getTypeName = (type: string) => {
    switch (type) {
      case 'product': return '产品'
      case 'exhibition': return '展会'
      case 'customer': return '客户'
      default: return '内容'
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">搜索结果</h1>
        
        {/* Search Summary */}
        <div className="mb-6 text-gray-600">
          找到 <span className="font-bold text-primary-600">{results.length}</span> 个相关结果
          {query && <span> for "<span className="font-bold">{query}</span>"</span>}
        </div>
        
        {/* Results */}
        <div className="space-y-4">
          {results.map((result) => (
            <Link
              href={
                result.type === 'product' ? `/products/${result.id}` :
                result.type === 'exhibition' ? `/exhibitions` :
                result.type === 'customer' ? `/customers` : '/'
              }
              key={result.id}
              className="block bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">{getTypeIcon(result.type)}</span>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold">{result.name}</h3>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {getTypeName(result.type)}
                    </span>
                  </div>
                  <p className="text-gray-600">{result.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* No Results */}
        {results.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold mb-2">未找到结果</h2>
            <p className="text-gray-600">请尝试其他关键词</p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  )
}
