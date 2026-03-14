'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ProfilePage() {
  const [user] = useState({
    name: '张三',
    email: 'zhangsan@example.com',
    phone: '+86 138 0000 1234',
    company: '示例科技有限公司',
    position: '销售经理',
    avatar: null,
    joinDate: '2025-06-15',
    role: 'admin',
  })

  const [activeTab, setActiveTab] = useState('profile')

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">👤</span>
              </div>
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-gray-600">{user.position}</p>
              <p className="text-sm text-primary-600 mt-1">{user.company}</p>
              
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-gray-500">注册时间</p>
                <p className="font-medium">{user.joinDate}</p>
              </div>
            </div>
            
            {/* Menu */}
            <div className="bg-white rounded-lg shadow mt-6">
              <nav className="divide-y">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full px-4 py-3 text-left hover:bg-gray-50 ${
                    activeTab === 'profile' ? 'bg-primary-50 text-primary-600' : ''
                  }`}
                >
                  👤 个人资料
                </button>
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full px-4 py-3 text-left hover:bg-gray-50 ${
                    activeTab === 'orders' ? 'bg-primary-50 text-primary-600' : ''
                  }`}
                >
                  📦 我的订单
                </button>
                <button
                  onClick={() => setActiveTab('favorites')}
                  className={`w-full px-4 py-3 text-left hover:bg-gray-50 ${
                    activeTab === 'favorites' ? 'bg-primary-50 text-primary-600' : ''
                  }`}
                >
                  ❤️ 收藏夹
                </button>
                <button
                  onClick={() => setActiveTab('addresses')}
                  className={`w-full px-4 py-3 text-left hover:bg-gray-50 ${
                    activeTab === 'addresses' ? 'bg-primary-50 text-primary-600' : ''
                  }`}
                >
                  📍 地址管理
                </button>
                <button
                  onClick={() => setActiveTab('security')}
                  className={`w-full px-4 py-3 text-left hover:bg-gray-50 ${
                    activeTab === 'security' ? 'bg-primary-50 text-primary-600' : ''
                  }`}
                >
                  🔒 安全设置
                </button>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold mb-6">个人资料</h2>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        姓名
                      </label>
                      <input
                        type="text"
                        defaultValue={user.name}
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        邮箱
                      </label>
                      <input
                        type="email"
                        defaultValue={user.email}
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        电话
                      </label>
                      <input
                        type="tel"
                        defaultValue={user.phone}
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        公司
                      </label>
                      <input
                        type="text"
                        defaultValue={user.company}
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      职位
                    </label>
                    <input
                      type="text"
                      defaultValue={user.position}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                  
                  <div className="pt-4">
                    <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700">
                      保存修改
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'orders' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold mb-6">我的订单</h2>
                <Link href="/orders" className="text-primary-600 hover:underline">
                  查看全部订单 →
                </Link>
              </div>
            )}
            
            {activeTab === 'favorites' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold mb-6">收藏夹</h2>
                <p className="text-gray-600">暂无收藏商品</p>
              </div>
            )}
            
            {activeTab === 'addresses' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold mb-6">地址管理</h2>
                <button className="border border-primary-600 text-primary-600 px-4 py-2 rounded-lg hover:bg-primary-50">
                  + 添加新地址
                </button>
              </div>
            )}
            
            {activeTab === 'security' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold mb-6">安全设置</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b">
                    <div>
                      <h3 className="font-medium">登录密码</h3>
                      <p className="text-sm text-gray-500">定期更换密码保护账户安全</p>
                    </div>
                    <button className="text-primary-600 hover:underline">修改</button>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b">
                    <div>
                      <h3 className="font-medium">手机绑定</h3>
                      <p className="text-sm text-gray-500">已绑定: {user.phone}</p>
                    </div>
                    <button className="text-primary-600 hover:underline">修改</button>
                  </div>
                  
                  <div className="flex justify-between items-center py-3">
                    <div>
                      <h3 className="font-medium">邮箱绑定</h3>
                      <p className="text-sm text-gray-500">已绑定: {user.email}</p>
                    </div>
                    <button className="text-primary-600 hover:underline">修改</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
