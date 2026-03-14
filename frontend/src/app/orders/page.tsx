'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function OrdersPage() {
  const [orders] = useState([
    { id: 1, orderNumber: 'ORD-20260314-001', status: 'delivered', total: 15999, date: '2026-03-10', items: 3 },
    { id: 2, orderNumber: 'ORD-20260314-002', status: 'shipped', total: 8999, date: '2026-03-12', items: 2 },
    { id: 3, orderNumber: 'ORD-20260314-003', status: 'processing', total: 24999, date: '2026-03-14', items: 5 },
    { id: 4, orderNumber: 'ORD-20260314-004', status: 'pending', total: 5999, date: '2026-03-14', items: 1 },
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800'
      case 'shipped': return 'bg-blue-100 text-blue-800'
      case 'processing': return 'bg-yellow-100 text-yellow-800'
      case 'pending': return 'bg-gray-100 text-gray-800'
      case 'cancelled': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusName = (status: string) => {
    switch (status) {
      case 'delivered': return '已送达'
      case 'shipped': return '已发货'
      case 'processing': return '处理中'
      case 'pending': return '待处理'
      case 'cancelled': return '已取消'
      default: return status
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">我的订单</h1>
        </div>
        
        {/* Orders List */}
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-bold text-lg">{order.orderNumber}</span>
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(order.status)}`}>
                      {getStatusName(order.status)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">下单日期: {order.date}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary-600">¥{order.total.toLocaleString()}</div>
                  <p className="text-sm text-gray-500">{order.items} 件商品</p>
                </div>
              </div>
              
              <div className="flex justify-end gap-3 pt-4 border-t">
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                  查看详情
                </button>
                {order.status === 'delivered' && (
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                    再次购买
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
