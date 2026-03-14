'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">
              联系我们
            </h1>
            <p className="text-lg">
              有任何问题？我们随时为您服务
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold mb-6">联系方式</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">地址</h3>
                      <p className="text-gray-600">中国广东省广州市天河区珠江新城</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">电话</h3>
                      <p className="text-gray-600">+86 20 1234 5678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">✉️</span>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">邮箱</h3>
                      <p className="text-gray-600">contact@globalbrandexpo.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🕐</span>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">工作时间</h3>
                      <p className="text-gray-600">周一至周五: 9:00 - 18:00</p>
                    </div>
                  </div>
                </div>
                
                {/* Social Media */}
                <div className="mt-8">
                  <h3 className="font-bold mb-4">关注我们</h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700">
                      FB
                    </a>
                    <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500">
                      TW
                    </a>
                    <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700">
                      YT
                    </a>
                    <a href="#" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800">
                      IN
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">✅</div>
                    <h3 className="text-2xl font-bold mb-2">提交成功！</h3>
                    <p className="text-gray-600">
                      感谢您的留言，我们会在24小时内与您联系。
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-primary-600 hover:text-primary-800"
                    >
                      再次提交
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold mb-6">发送消息</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            姓名 *
                          </label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            邮箱 *
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            required
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
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            公司
                          </label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          主题 *
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          required
                        >
                          <option value="">选择主题</option>
                          <option value="general">一般咨询</option>
                          <option value="cooperation">商务合作</option>
                          <option value="support">技术支持</option>
                          <option value="feedback">意见反馈</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          留言 *
                        </label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          rows={5}
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          required
                        ></textarea>
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition"
                      >
                        发送消息
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
