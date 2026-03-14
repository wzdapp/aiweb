'use client'

import { useState, ChangeEvent } from 'react'
import api from '@/lib/api'

interface FileUploadProps {
  onUploadComplete?: (result: any) => void
  onError?: (error: any) => void
  accept?: string
  maxSize?: number // in MB
}

export default function FileUpload({
  onUploadComplete,
  onError,
  accept = 'image/*',
  maxSize = 10,
}: FileUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // 验证文件大小
    if (file.size > maxSize * 1024 * 1024) {
      onError?.(new Error(`文件大小超过 ${maxSize}MB`))
      return
    }

    // 显示预览
    if (file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setPreviewUrl(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }

    // 获取上传Token
    try {
      setUploading(true)
      setProgress(0)

      // 生成唯一文件名
      const timestamp = Date.now()
      const randomStr = Math.random().toString(36).substring(2, 8)
      const fileExt = file.name.split('.').pop()
      const key = `${timestamp}-${randomStr}.${fileExt}`

      const tokenData = await api.getUploadToken(key)
      
      setProgress(30)

      // 上传到七牛
      const formData = new FormData()
      formData.append('token', tokenData.token)
      formData.append('key', key)
      formData.append('file', file)

      const xhr = new XMLHttpRequest()
      xhr.open('POST', `https://upload-z2.qiniup.com`, true)
      
      xhr.upload.onprogress = (e) => {
        if (e.lengthComputable) {
          const percent = Math.round((e.loaded / e.total) * 70)
          setProgress(30 + percent)
        }
      }

      xhr.onload = () => {
        if (xhr.status === 200) {
          const result = JSON.parse(xhr.responseText)
          setProgress(100)
          onUploadComplete?.({
            key,
            url: `https://${tokenData.bucket}.cdn.kuojing.cloudns.com/${key}`,
            hash: result.hash,
          })
        } else {
          onError?.(new Error('上传失败'))
        }
        setUploading(false)
        setTimeout(() => setProgress(0), 1000)
      }

      xhr.onerror = () => {
        onError?.(new Error('上传失败'))
        setUploading(false)
        setProgress(0)
      }

      xhr.send(formData)

    } catch (error) {
      onError?.(error)
      setUploading(false)
      setProgress(0)
    }
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-center w-full">
        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primary-500 transition-colors bg-gray-50">
          {previewUrl ? (
            <div className="relative">
              <img
                src={previewUrl}
                alt="Preview"
                className="max-h-60 max-w-full object-contain"
              />
              <button
                onClick={(e) => {
                  e.preventDefault()
                  setPreviewUrl(null)
                  const input = document.getElementById('file-input') as HTMLInputElement
                  if (input) input.value = ''
                }}
                className="absolute top-2 right-2 bg-white text-gray-700 rounded-full p-2 shadow hover:shadow-md"
              >
                ✕
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-12 h-12 text-gray-400 mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1116.9 4 4 0 01-2.526.926 5 5 0 11-8.196 2.192A4 4 0 0116.908 8.109M9 12a4 4 0 00-4-4 4 4 0 014 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
 d="M12 8v4m0 4h.01"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-600">
                {uploading ? '上传中...' : '点击或拖拽文件到此处'}
              </p>
              <p className="text-xs text-gray-500">
                最大 {maxSize}MB
              </p>
            </div>
          )}
          <input
            id="file-input"
            type="file"
            accept={accept}
            onChange={handleFileChange}
            disabled={uploading}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </label>
      </div>

      {uploading && (
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-primary-600 h-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-1 text-center">
            {progress}%
          </p>
        </div>
      )}
    </div>
  )
}
