const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

export const api = {
  // Products
  getProducts: async () => {
    const response = await fetch(`${API_BASE_URL}/products`)
    return response.json()
  },
  
  getProduct: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`)
    return response.json()
  },
  
  // Categories
  getCategories: async () => {
    const response = await fetch(`${API_BASE_URL}/categories`)
    return response.json()
  },
  
  // Exhibitions
  getExhibitions: async () => {
    const response = await fetch(`${API_BASE_URL}/exhibitions`)
    return response.json()
  },
  
  // Leads
  getLeads: async () => {
    const response = await fetch(`${API_BASE_URL}/leads`)
    return response.json()
  },
}

export default api
