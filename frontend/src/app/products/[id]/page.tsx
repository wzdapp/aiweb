'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useAppStore } from '@/store/useAppStore'

export default function ProductDetailPage() {
  const params = useParams()
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const { addToCart } = useAppStore()

  useEffect(() => {
    if (params.id) {
      loadProduct(params.id as string)
    }
  }, [params.id])

  const loadProduct = async (id: string) => {
    try {
      setLoading(true)
      const data = await api.getProduct(id)
      setProduct(data)
    } catch (error) {
      console.error('Failed to load product:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </main>
        <Footer />
      </div>
    )
  }

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">产品未找到</h2>
            <p className="text-gray-600">请检查产品ID是否正确</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center">
            <span className="text-8xl">📦</span>
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-3xl font-bold text-primary-600 mb-6">
              ¥{product.price}
            </p>
            
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">产品描述</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">规格参数</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>SKU: {product.sku || 'N/A'}</li>
                <li>库存: {product.stock}件</li>
                <li>分类: {product.category}</li>
              </ul>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={() => addToCart(product)}
                className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 font-semibold"
              >
                加入购物车
              </button>
              <button className="flex-1 border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 font-semibold">
                立即购买
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

// Fix import
import { api } from '@/lib/api'
