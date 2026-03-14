import { create } from 'zustand'

interface AppState {
  isLoading: boolean
  user: any | null
  products: any[]
  cart: any[]
  setLoading: (loading: boolean) => void
  setUser: (user: any) => void
  setProducts: (products: any[]) => void
  addToCart: (product: any) => void
  removeFromCart: (productId: string) => void
  clearCart: () => void
}

export const useAppStore = create<AppState>((set) => ({
  isLoading: false,
  user: null,
  products: [],
  cart: [],
  
  setLoading: (loading) => set({ isLoading: loading }),
  setUser: (user) => set({ user }),
  setProducts: (products) => set({ products }),
  
  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),
    
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),
    
  clearCart: () => set({ cart: [] }),
}))
