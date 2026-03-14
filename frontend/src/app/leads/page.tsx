'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Lead entity interface
interface Lead {
  id: number
  name: string
  email: string
  phone: string | null
  company: string | null
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost'
  source: string | null
  product: string | null
  notes: string | null
  score: number
  assignedTo: number | null
  createdAt: string
  updatedAt: string
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [showForm, setShowForm] = useState(false)
  const [newLead, setNewLead] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    source: 'website',
    product: '',
    notes: '',
  })

  // Mock data for demo
  useEffect(() => {
    setLeads([
      { id: 1, name: 'John Smith', email: 'john@company.com', phone: '+1234567890', company: 'ABC Corp', status: 'new', source: 'Website', product: 'Product A', notes: 'Interested in enterprise plan', score: 85, assignedTo: 1, createdAt: '2026-03-14', updatedAt: '2026-03-14' },
      { id: 2, name: 'Maria Garcia', email: 'maria@startup.io', phone: '+1987654321', company: 'Startup Inc', status: 'contacted', source: 'Referral', product: 'Product B', notes: 'Follow up next week', score: 70, assignedTo: 2, createdAt: '2026-03-13', updatedAt: '2026-03-14' },
      { id: 3, name: 'David Chen', email: 'david@enterprise.com', phone: '+1122334455', company: 'Enterprise Ltd', status: 'qualified', source: 'LinkedIn', product: 'Product A', notes: 'Budget approved', score: 95, assignedTo: 1, createdAt: '2026-03-12', updatedAt: '2026-03-14' },
      { id: 4, name: 'Sarah Johnson', email: 'sarah@agency.net', phone: '+5566778899', company: 'Agency Co', status: 'converted', source: 'Trade Show', product: 'Product C', notes: 'Signed contract!', score: 100, assignedTo: 3, createdAt: '2026-03-10', updatedAt: '2026-03-14' },
      { id: 5, name: 'Mike Brown', email: 'mike@retail.com', phone: '+9988776655', company: 'Retail Shop', status: 'lost', source: 'Cold Call', product: 'Product A', notes: 'No budget available', score: 30, assignedTo: 2, createdAt: '2026-03-08', updatedAt: '2026-03-14' },
    ])
    setLoading(false)
  }, [])

  const statuses = [
    { id: 'all', name: '全部' },
    { id: 'new', name: '新线索' },
    { id: 'contacted', name: '已联系' },
    { id: 'qualified', name: '已筛选' },
    { id: 'converted', name: '已转化' },
    { id: 'lost', name: '流失' },
  ]

  const filteredLeads = selectedStatus === 'all' 
    ? leads 
    : leads.filter(lead => lead.status === selectedStatus)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800'
      case 'contacted': return 'bg-yellow-100 text-yellow-800'
      case 'qualified': return 'bg-purple-100 text-purple-800'
      case 'converted': return 'bg-green-100 text-green-800'
      case 'lost': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600'
    if (score >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">线索管理</h1>
          <button 
            onClick={() => setShowForm(!showForm)}
            className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700"
          >
            {showForm ? '关闭表单' : '添加线索'}
          </button>
        </div>

        {/* Add Lead Form */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">添加新线索</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="姓名 *"
                value={newLead.name}
                onChange={(e) => setNewLead({...newLead, name: e.target.value})}
                className="border rounded-lg px-4 py-2"
              />
              <input
                type="email"
                placeholder="邮箱 *"
                value={newLead.email}
                onChange={(e) => setNewLead({...newLead, email: e.target.value})}
                className="border rounded-lg px-4 py-2"
              />
              <input
                type="tel"
                placeholder="电话"
                value={newLead.phone}
                onChange={(e) => setNewLead({...newLead, phone: e.target.value})}
                className="border rounded-lg px-4 py-2"
              />
              <input
                type="text"
                placeholder="公司"
                value={newLead.company}
                onChange={(e) => setNewLead({...newLead, company: e.target.value})}
                className="border rounded-lg px-4 py-2"
              />
              <select
                value={newLead.source}
                onChange={(e) => setNewLead({...newLead, source: e.target.value})}
                className="border rounded-lg px-4 py-2"
              >
                <option value="website">官网</option>
                <option value="referral">推荐</option>
                <option value="linkedin">LinkedIn</option>
                <option value="trade_show">展会</option>
                <option value="cold_call">电话营销</option>
              </select>
              <input
                type="text"
                placeholder="感兴趣的产品"
                value={newLead.product}
                onChange={(e) => setNewLead({...newLead, product: e.target.value})}
                className="border rounded-lg px-4 py-2"
              />
              <textarea
                placeholder="备注"
                value={newLead.notes}
                onChange={(e) => setNewLead({...newLead, notes: e.target.value})}
                className="border rounded-lg px-4 py-2 md:col-span-2"
                rows={3}
              />
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button 
                onClick={() => setShowForm(false)}
                className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50"
              >
                取消
              </button>
              <button 
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700"
              >
                保存
              </button>
            </div>
          </div>
        )}
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-primary-600">{leads.length}</div>
            <div className="text-gray-600">总线索数</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-blue-600">
              {leads.filter(l => l.status === 'new').length}
            </div>
            <div className="text-gray-600">新线索</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-purple-600">
              {leads.filter(l => l.status === 'qualified').length}
            </div>
            <div className="text-gray-600">已筛选</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-green-600">
              {leads.filter(l => l.status === 'converted').length}
            </div>
            <div className="text-gray-600">已转化</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-yellow-600">
              {Math.round(leads.reduce((acc, l) => acc + l.score, 0) / leads.length)}%
            </div>
            <div className="text-gray-600">平均评分</div>
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
        
        {/* Leads Table */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">加载中...</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">姓名</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">公司</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">来源</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">产品</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">评分</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">状态</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">操作</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-medium">{lead.name}</div>
                      <div className="text-sm text-gray-500">{lead.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{lead.company || '-'}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{lead.source}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{lead.product || '-'}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`font-bold ${getScoreColor(lead.score)}`}>
                        {lead.score}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(lead.status)}`}>
                        {statuses.find(s => s.id === lead.status)?.name}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="text-primary-600 hover:text-primary-800 mr-3">查看</button>
                      <button className="text-primary-600 hover:text-primary-800 mr-3">编辑</button>
                      <button className="text-green-600 hover:text-green-800">转化</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  )
}
