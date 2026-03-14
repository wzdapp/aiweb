'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useAppStore } from '@/store/useAppStore'

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useAppStore()
  const [checkoutStep, setCheckoutStep] = useState(1)

  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0)

  const handleCheckout = () => {
    if (checkoutStep === 1) {
      setCheckoutStep(2)
    } else if (checkoutStep === 2) {
      setCheckoutStep(3)
      // Simulate order placement
      setTimeout(() => {
        clearCart()
      }, 2000)
    }
  }

  if (cart.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-16 text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h1 className="text-3xl font-bold mb-4">购物车为空</h1>
          <p className="text-gray-600 mb-8">浏览我们的产品，找到心仪的商品</p>
          <Link href="/products" className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700">
            浏览产品
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">购物车</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">产品</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">价格</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">数量</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">小计</th>
                    <th className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cart.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
                            <span className="text-2xl">📦</span>
                          </div>
                          <div>
                            <div className="font-medium">{item.name || '产品'}</div>
                            <div className="text-sm text-gray-500">SKU: {item.sku || 'N/A'}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">¥{item.price || 0}</td>
                      <td className="px-6 py-4">
                        <input type="number" min="1" defaultValue="1" className="w-16 border rounded px-2 py-1" />
                      </td>
                      <td className="px-6 py-4 font-medium">¥{item.price || 0}</td>
                      <td className="px-6 py-4">
                        <button 
                          onClick={() => removeFromCart(item.id || index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          删除
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 flex justify-between">
              <Link href="/products" className="text-primary-600 hover:text-primary-800">
                ← 继续购物
              </Link>
              <button onClick={clearCart} className="text-red-600 hover:text-red-800">
                清空购物车
              </button>
            </div>
          </div>
          
          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg shadow p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">订单摘要</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">商品数量</span>
                  <span>{cart.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">小计</span>
                  <span>¥{total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">运费</span>
                  <span>¥0</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-bold text-lg">
                  <span>总计</span>
                  <span className="text-primary-600">¥{total}</span>
                </div>
              </div>
              
              <button
                onClick={handleCheckout}
                className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700"
              >
                {checkoutStep === 1 ? '去结算' : checkoutStep === 2 ? '确认订单' : '下单成功！'}
              </button>
              
              {/* Checkout Steps */}
              <div className="mt-6">
                <div className="flex items-center justify-between text-sm">
                  <div className={`flex items-center ${checkoutStep >= 1 ? 'text-primary-600' : 'text-gray-400'}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${checkoutStep >= 1 ? 'bg-primary-600 text-white' : 'bg-gray-200'}`}>1</div>
                    购物车
                  </div>
                  <div className={`flex items-center ${checkoutStep >= 2 ? 'text-primary-600' : 'text-gray-400'}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${checkoutStep >= 2 ? 'bg-primary-600 text-white' : 'bg-gray-200'}`}>2</div>
                    确认
                  </div>
                  <div className={`flex items-center ${checkoutStep >= 3 ? 'text-primary-600' : 'text-gray-400'}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${checkoutStep >= 3 ? 'bg-primary-600 text-white' : 'bg-gray-200'}`}>3</div>
                    完成
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
