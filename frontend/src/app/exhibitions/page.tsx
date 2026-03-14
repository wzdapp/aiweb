'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ExhibitionsPage() {
  const [exhibitions, setExhibitions] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedStatus, setSelectedStatus] = useState('all')

  useEffect(() => {
    loadExhibitions()
  }, [])

  const loadExhibitions = async () => {
    try {
      setLoading(true)
      const response = await fetch('http://localhost:3001/api/exhibitions')
      const data = await response.json()
      setExhibitions(data)
    } catch (error) {
      console.error('Failed to load exhibitions:', error)
    } finally {
      setLoading(false)
    }
  }

  const statuses = [
    { id: 'all', name: '全部' },
    { id: 'draft', name: '草稿' },
    { id: 'published', name: '已发布' },
    { id: 'ongoing', name: '进行中' },
    { id: 'completed', name: '已完成' },
  ]

  const filteredExhibitions = selectedStatus === 'all' 
    ? exhibitions 
    : exhibitions.filter((e: any) => e.status === selectedStatus)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">展会管理</h1>
          <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700">
            创建展会
          </button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-primary-600">{exhibitions.length}</div>
            <div className="text-gray-600">展会总数</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-blue-600">
              {exhibitions.filter((e: any) => e.status === 'published').length}
            </div>
            <div className="text-gray-600">即将举办</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-green-600">
              {exhibitions.filter((e: any) => e.status === 'ongoing').length}
            </div>
            <div className="text-gray-600">正在进行</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-gray-600">
              {exhibitions.filter((e: any) => e.status === 'completed').length}
            </div>
            <div className="text-gray-600">已完成</div>
          </div>
        </div>
        
        {/* Status Filter */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {statuses.map((status) => (
              <button
                key={status.id}
                onClick={() => setSelectedStatus(status.id)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedStatus === status.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {status.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Exhibitions Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">加载中...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExhibitions.map((exhibition: any) => (
              <div key={exhibition.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                  <span className="text-6xl">🎪</span>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{exhibition.name}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      exhibition.status === 'ongoing' ? 'bg-green-100 text-green-800' :
                      exhibition.status === 'published' ? 'bg-blue-100 text-blue-800' :
                      exhibition.status === 'completed' ? 'bg-gray-100 text-gray-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {statuses.find(s => s.id === exhibition.status)?.name}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {exhibition.description || '暂无描述'}
                  </p>
                  <div className="text-sm text-gray-500 mb-4">
                    <p>📍 {exhibition.location}</p>
                    <p>📅 {new Date(exhibition.startDate).toLocaleDateString()} - {new Date(exhibition.endDate).toLocaleDateString()}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 text-sm">
                      查看详情
                    </button>
                    <button className="border border-primary-600 text-primary-600 px-4 py-2 rounded-lg hover:bg-primary-50 text-sm">
                      编辑
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  )
}
