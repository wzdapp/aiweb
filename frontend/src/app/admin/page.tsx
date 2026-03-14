'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AdminPage() {
  const [stats] = useState({
    users: { total: 156, active: 134, new: 22 },
    revenue: { today: 12580, week: 89650, month: 456780 },
    orders: { pending: 23, processing: 45, shipped: 78, delivered: 234 },
    system: { uptime: 99.9, cpu: 23, memory: 45, disk: 67 },
  })

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">系统管理</h1>
        
        {/* System Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 mb-2">系统运行时间</h3>
            <div className="text-3xl font-bold text-green-600">{stats.system.uptime}%</div>
            <p className="text-sm text-gray-500 mt-1">正常运行</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 mb-2">CPU 使用率</h3>
            <div className="text-3xl font-bold text-blue-600">{stats.system.cpu}%</div>
            <p className="text-sm text-gray-500 mt-1">当前负载</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 mb-2">内存使用</h3>
            <div className="text-3xl font-bold text-yellow-600">{stats.system.memory}%</div>
            <p className="text-sm text-gray-500 mt-1">可用内存充足</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 mb-2">磁盘使用</h3>
            <div className="text-3xl font-bold text-red-600">{stats.system.disk}%</div>
            <p className="text-sm text-gray-500 mt-1">需要清理</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">快速操作</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 text-center">
                <div className="text-2xl mb-2">👥</div>
                <div className="font-medium">用户管理</div>
              </button>
              <button className="p-4 bg-green-50 rounded-lg hover:bg-green-100 text-center">
                <div className="text-2xl mb-2">📦</div>
                <div className="font-medium">订单管理</div>
              </button>
              <button className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 text-center">
                <div className="text-2xl mb-2">🎪</div>
                <div className="font-medium">展会管理</div>
              </button>
              <button className="p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 text-center">
                <div className="text-2xl mb-2">📊</div>
                <div className="font-medium">数据统计</div>
              </button>
              <button className="p-4 bg-red-50 rounded-lg hover:bg-red-100 text-center">
                <div className="text-2xl mb-2">🔒</div>
                <div className="font-medium">安全管理</div>
              </button>
              <button className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 text-center">
                <div className="text-2xl mb-2">⚙️</div>
                <div className="font-medium">系统设置</div>
              </button>
            </div>
          </div>
          
          {/* System Info */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">系统信息</h2>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">版本</span>
                <span className="font-medium">v1.0.0</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Node.js</span>
                <span className="font-medium">v20.x</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Next.js</span>
                <span className="font-medium">14.x</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">NestJS</span>
                <span className="font-medium">10.x</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">数据库</span>
                <span className="font-medium">MySQL 8.0</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">最后更新</span>
                <span className="font-medium">2026-03-14</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
