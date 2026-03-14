'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Loading() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 10
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary-600 to-primary-800">
      <div className="text-center">
        <div className="mb-8">
          <div className="text-6xl mb-4">🚀</div>
          <h1 className="text-3xl font-bold text-white mb-2">Global Brand Expo</h1>
          <p className="text-primary-200">正在加载...</p>
        </div>
        
        {/* Progress Bar */}
        <div className="w-64 bg-primary-800 rounded-full h-3 mb-4 overflow-hidden">
          <div 
            className="bg-white h-full rounded-full transition-all duration-500"
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>
        
        <p className="text-primary-200 text-sm">
          {Math.round(progress)}%
        </p>
        
        <div className="mt-8 flex justify-center gap-4">
          <div className="w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
          <div className="w-3 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 bg-white/70 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  )
}
