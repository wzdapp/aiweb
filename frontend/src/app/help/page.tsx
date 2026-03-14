'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function HelpPage() {
  const faqs = [
    {
      question: '如何注册账号？',
      answer: '点击页面右上角的"注册"按钮，填写相关信息即可完成注册。'
    },
    {
      question: '如何发布产品？',
      answer: '登录后进入管理后台，点击"产品管理"->"添加产品"即可发布新产品。'
    },
    {
      question: '如何参加展会？',
      answer: '在展会页面选择感兴趣的活动，填写报名信息即可参与。'
    },
    {
      question: '如何联系客服？',
      answer: '可通过页面底部的"联系我们"表单或直接拨打客服热线。'
    },
    {
      question: '订单如何配送？',
      answer: '我们提供多种配送方式，具体可在购物车页面选择。'
    },
    {
      question: '如何申请退款？',
      answer: '在订单详情页面点击"申请退款"，填写原因后提交申请。'
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">帮助中心</h1>
        
        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Link href="/help?cat=account" className="bg-white rounded-lg shadow p-6 text-center hover:shadow-md transition-shadow">
            <div className="text-4xl mb-2">👤</div>
            <h3 className="font-bold">账号问题</h3>
          </Link>
          <Link href="/help?cat=order" className="bg-white rounded-lg shadow p-6 text-center hover:shadow-md transition-shadow">
            <div className="text-4xl mb-2">📦</div>
            <h3 className="font-bold">订单问题</h3>
          </Link>
          <Link href="/help?cat=payment" className="bg-white rounded-lg shadow p-6 text-center hover:shadow-md transition-shadow">
            <div className="text-4xl mb-2">💳</div>
            <h3 className="font-bold">支付问题</h3>
          </Link>
        </div>
        
        {/* FAQs */}
        <h2 className="text-2xl font-bold mb-6">常见问题</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-white rounded-lg shadow">
              <summary className="p-4 cursor-pointer font-medium">
                {faq.question}
              </summary>
              <div className="px-4 pb-4 text-gray-600">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
        
        {/* Contact */}
        <div className="mt-12 bg-primary-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">没有找到答案？</h2>
          <p className="text-gray-600 mb-6">请联系我们的客服团队</p>
          <Link href="/contact" className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700">
            联系客服
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
