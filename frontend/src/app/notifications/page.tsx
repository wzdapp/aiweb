'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NotificationsPage() {
  const [notifications] = useState([
    { id: 1, type: 'order', title: '订单已发货', message: '您的订单 #ORD-20260314-002 已发货', time: '2小时前', read: false },
    { id: 2, type: 'system', title: '系统更新', message: '系统将于今晚22:00进行维护', time: '5小时前', read: true },
    { id: 3, type: 'promotion', title: '新品上架', message: '2026年春季新品已上架，欢迎选购', time: '1天前', read: true },
    { id: 4, type: 'order', title: '订单已完成', message: '您的订单 #ORD-20260314-001 已送达', time: '2天前', read: true },
    { id: 5, type: 'lead', title: '新线索通知', message: '您有新线索: 深圳市某某公司', time: '3天前', read: true },
  ])

  const getIcon = (type: string) => {
    switch (type) {
      case 'order': return '📦'
      case 'system': return '⚙️'
      case 'promotion': return '🎁'
      case 'lead': return '🎯'
      default: return '📢'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'order': return 'bg-blue-100 text-blue-600'
      case 'system': return 'bg-gray-100 text-gray-600'
      case 'promotion': return 'bg-yellow-100 text-yellow-600'
      case 'lead': return 'bg-green-100 text-green-600'
      default: return 'bg-gray-100 text-gray-600'
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">消息通知</h1>
          <button className="text-primary-600 hover:underline">
            全部标记为已读
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 border-b hover:bg-gray-50 ${!notification.read ? 'bg-blue-50' : ''}`}
            >
              <div className="flex gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getTypeColor(notification.type)}`}>
                  <span className="text-xl">{getIcon(notification.type)}</span>
                </div>
                
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold">{notification.title}</h3>
                      <p className="text-gray-600">{notification.message}</p>
                    </div>
                    <span className="text-sm text-gray-500 whitespace-nowrap">
                      {notification.time}
                    </span>
                  </div>
                  
                  {!notification.read && (
                    <span className="inline-block mt-2 text-xs bg-primary-600 text-white px-2 py-1 rounded">
                      未读
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
