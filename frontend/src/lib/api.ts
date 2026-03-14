const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'

export const api = {
  // Products
  getProducts: async (params?: { categoryId?: number; isActive?: boolean }) => {
    const query = new URLSearchParams(params as any).toString()
    const response = await fetch(`${API_BASE_URL}/products${query ? '?' + query : ''}`)
    return response.json()
  },
  
  getProduct: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`)
    return response.json()
  },
  
  getFeaturedProducts: async () => {
    const response = await fetch(`${API_BASE_URL}/products/featured`)
    return response.json()
  },

  // Categories
  getCategories: async () => {
    const response = await fetch(`${API_BASE_URL}/categories`)
    return response.json()
  },

  // Customers
  getCustomers: async (params?: { status?: string; isActive?: boolean }) => {
    const query = new URLSearchParams(params as any).toString()
    const response = await fetch(`${API_BASE_URL}/customers${query ? '?' + query : ''}`)
    return response.json()
  },
  
  getCustomer: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/customers/${id}`)
    return response.json()
  },
  
  getCustomerStats: async () => {
    const response = await fetch(`${API_BASE_URL}/customers/stats`)
    return response.json()
  },
  
  createCustomer: async (data: any) => {
    const response = await fetch(`${API_BASE_URL}/customers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    return response.json()
  },
  
  updateCustomer: async (id: string, data: any) => {
    const response = await fetch(`${API_BASE_URL}/customers/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    return response.json()
  },
  
  deleteCustomer: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/customers/${id}`, {
      method: 'DELETE',
    })
    return response.json()
  },

  // Exhibitions
  getExhibitions: async (params?: { status?: string; isActive?: boolean }) => {
    const query = new URLSearchParams(params as any).toString()
    const response = await fetch(`${API_BASE_URL}/exhibitions${query ? '?' + query : ''}`)
    return response.json()
  },
  
  getExhibition: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/exhibitions/${id}`)
    return response.json()
  },
  
  getExhibitionStats: async () => {
    const response = await fetch(`${API_BASE_URL}/exhibitions/stats`)
    return response.json()
  },
  
  getUpcomingExhibitions: async () => {
    const response = await fetch(`${API_BASE_URL}/exhibitions/upcoming`)
    return response.json()
  },
  
  getOngoingExhibitions: async () => {
    const response = await fetch(`${API_BASE_URL}/exhibitions/ongoing`)
    return response.json()
  },

  // Users
  getUsers: async () => {
    const response = await fetch(`${API_BASE_URL}/users`)
    return response.json()
  },
  
  getUser: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/users/${id}`)
    return response.json()
  },
  
  createUser: async (data: any) => {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    return response.json()
  },

  // Leads
  getLeads: async (params?: { status?: string }) => {
    const query = new URLSearchParams(params as any).toString()
    const response = await fetch(`${API_BASE_URL}/leads${query ? '?' + query : ''}`)
    return response.json()
  },

  getLeadStats: async () => {
    const response = await fetch(`${API_BASE_URL}/leads/stats`)
    return response.json()
  },

  createLead: async (data: any) => {
    const response = await fetch(`${API_BASE_URL}/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    return response.json()
  },

  // Orders
  getOrders: async () => {
    const response = await fetch(`${API_BASE_URL}/orders`)
    return response.json()
  },

  getOrder: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/orders/${id}`)
    return response.json()
  },

  createOrder: async (data: any) => {
    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    return response.json()
  },

  // Analytics
  getOverview: async () => {
    const response = await fetch(`${API_BASE_URL}/analytics/overview`)
    return response.json()
  },

  getSales: async (params?: { period?: string }) => {
    const query = new URLSearchParams(params as any).toString()
    const response = await fetch(`${API_BASE_URL}/analytics/sales${query ? '?' + query : ''}`)
    return response.json()
  },

  // Qiniu Storage
  getUploadToken: async (key?: string) => {
    const query = key ? `?key=${key}` : ''
    const response = await fetch(`${API_BASE_URL}/qiniu/upload-token${query}`)
    return response.json()
  },

  uploadFile: async (file: File, key: string) => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('key', key)
    formData.append('mimeType', file.type)

    const response = await fetch(`${API_BASE_URL}/qiniu/upload`, {
      method: 'POST',
      body: formData,
    })
    return response.json()
  },

  deleteFile: async (key: string) => {
    const response = await fetch(`${API_BASE_URL}/qiniu/file/${key}`, {
      method: 'DELETE',
    })
    return response.json()
  },

  getPrivateUrl: async (key: string, expires: number = 3600) => {
    const response = await fetch(`${API_BASE_URL}/qiniu/private-url/${key}?expires=${expires}`)
    return response.json()
  },
}

export default api
