import Link from 'next/link'
import { useAppStore } from '@/store/useAppStore'

export default function Header() {
  const { user, setUser } = useAppStore()
  
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            Brand Expo
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/products" className="text-gray-700 hover:text-primary-600">
              Products
            </Link>
            <Link href="/exhibitions" className="text-gray-700 hover:text-primary-600">
              Exhibitions
            </Link>
            <Link href="/leads" className="text-gray-700 hover:text-primary-600">
              Leads
            </Link>
            <Link href="/analytics" className="text-gray-700 hover:text-primary-600">
              Analytics
            </Link>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="text-gray-700 hover:text-primary-600">
            Cart
          </Link>
          {user ? (
            <Link href="/dashboard" className="text-gray-700 hover:text-primary-600">
              Dashboard
            </Link>
          ) : (
            <Link href="/login" className="text-gray-700 hover:text-primary-600">
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}
