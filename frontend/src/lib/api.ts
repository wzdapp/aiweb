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
}

export default api
