'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function DashboardPage() {
  const [stats, setStats] = useState({
    totalProducts: 156,
    totalCustomers: 89,
    totalExhibitions: 12,
    totalLeads: 234,
    conversionRate: 23.5,
    revenue: 1256800,
    growth: 15.8,
  })

  const [recentActivity, setRecentActivity] = useState([
    { id: 1, type: 'lead', message: '新线索: John Smith', time: '5分钟前' },
    { id: 2, type: 'order', message: '新订单: #12345', time: '15分钟前' },
    { id: 3, type: 'exhibition', message: '展会更新: Canton Fair', time: '1小时前' },
    { id: 4, type: 'customer', message: '客户升级: ABC Corp', time: '2小时前' },
    { id: 5, type: 'lead', message: '线索转化: Maria Garcia', time: '3小时前' },
  ])

  const [topProducts, setTopProducts] = useState([
    { name: '智能家居系统', sales: 156, revenue: 234000 },
    { name: '工业机器人', sales: 89, revenue: 445000 },
    { name: '新能源设备', sales: 67, revenue: 335000 },
    { name: '医疗设备', sales: 45, revenue: 180000 },
    { name: '办公自动化', sales: 34, revenue: 62000 },
  ])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">数据看板</h1>
          <div className="flex gap-2">
            <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700">
              导出报告
            </button>
            <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
              筛选
            </button>
          </div>
        </div>
        
        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">总销售额</span>
              <span className="text-2xl">💰</span>
            </div>
            <div className="text-3xl font-bold text-primary-600">
              ¥{(stats.revenue / 10000).toFixed(1)}万
            </div>
            <div className="text-sm text-green-600 mt-2">
              ↑ {stats.growth}% 较上月
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">客户数量</span>
              <span className="text-2xl">👥</span>
            </div>
            <div className="text-3xl font-bold text-blue-600">
              {stats.totalCustomers}
            </div>
            <div className="text-sm text-gray-500 mt-2">
              活跃客户
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">转化率</span>
              <span className="text-2xl">📈</span>
            </div>
            <div className="text-3xl font-bold text-green-600">
              {stats.conversionRate}%
            </div>
            <div className="text-sm text-green-600 mt-2">
              ↑ 2.3% 较上月
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">线索总数</span>
              <span className="text-2xl">🎯</span>
            </div>
            <div className="text-3xl font-bold text-purple-600">
              {stats.totalLeads}
            </div>
            <div className="text-sm text-gray-500 mt-2">
              本月新增
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">最近活动</h2>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'lead' ? 'bg-blue-500' :
                    activity.type === 'order' ? 'bg-green-500' :
                    activity.type === 'exhibition' ? 'bg-purple-500' :
                    'bg-yellow-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Top Products */}
          <div className="bg-white rounded-lg shadow p-6 lg:col-span-2">
            <h2 className="text-xl font-bold mb-4">热销产品</h2>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">{product.name}</span>
                      <span className="text-sm text-gray-600">¥{(product.revenue / 10000).toFixed(1)}万</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full" 
                        style={{ width: `${(product.sales / topProducts[0].sales) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-4 text-white">
            <div className="text-sm opacity-80">产品总数</div>
            <div className="text-2xl font-bold">{stats.totalProducts}</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-4 text-white">
            <div className="text-sm opacity-80">展会活动</div>
            <div className="text-2xl font-bold">{stats.totalExhibitions}</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-4 text-white">
            <div className="text-sm opacity-80">本月订单</div>
            <div className="text-2xl font-bold">45</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg p-4 text-white">
            <div className="text-sm opacity-80">待处理</div>
            <div className="text-2xl font-bold">12</div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
