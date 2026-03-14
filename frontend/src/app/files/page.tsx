'use client'

import { useState, useEffect } from 'react'
import FileUpload from '@/components/FileUpload'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface UploadedFile {
  key: string
  url: string
  hash: string
  size?: number
  mimeType?: string
}

export default function FileManagerPage() {
  const [files, setFiles] = useState<UploadedFile[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedFiles, setSelectedFiles] = useState<Set<string>>(new Set())

  useEffect(() => {
    loadFiles()
  }, [])

  const loadFiles = async () => {
    setLoading(true)
    try {
      // 模拟加载文件列表（实际应该从后端API获取）
      // const response = await api.getFileList()
      // setFiles(response.files)
      setFiles([])
    } catch (error) {
      console.error('Failed to load files:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleUploadComplete = (result: any) => {
    const newFile: UploadedFile = {
      key: result.key,
      url: result.url,
      hash: result.hash,
    }
    setFiles([newFile, ...files])
  }

  const handleDelete = async (key: string) => {
    try {
      // await api.deleteFile(key)
      setFiles(files.filter((f) => f.key !== key))
    } catch (error) {
      console.error('Failed to delete file:', error)
      alert('删除失败')
    }
  }

  const handleBatchDelete = async () => {
    if (selectedFiles.size === 0) {
      alert('请先选择要删除的文件')
      return
    }

    if (!confirm(`确定要删除 ${selectedFiles.size} 个文件吗？`)) {
      return
    }

    try {
      // await api.deleteFiles(Array.from(selectedFiles))
      setFiles(files.filter((f) => !selectedFiles.has(f.key)))
      setSelectedFiles(new Set())
    } catch (error) {
      console.error('Failed to delete files:', error)
      alert('批量删除失败')
    }
  }

  const toggleSelect = (key: string) => {
    const newSelected = new Set(selectedFiles)
    if (newSelected.has(key)) {
      newSelected.delete(key)
    } else {
      newSelected.add(key)
    }
    setSelectedFiles(newSelected)
  }

  const selectAll = () => {
    if (selectedFiles.size === files.length) {
      setSelectedFiles(new Set())
    } else {
      setSelectedFiles(new Set(files.map((f) => f.key)))
    }
  }

  const getFileIcon = (mimeType?: string) => {
    if (!mimeType) return '📄'
    if (mimeType.startsWith('image/')) return '🖼️'
    if (mimeType.startsWith('video/')) return '🎬'
    if (mimeType.startsWith('audio/')) return '🎵'
    if (mimeType.includes('pdf')) return '📄'
    return '📁'
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">文件管理</h1>
          <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700">
            刷新
          </button>
        </div>
        
        {/* Upload Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">上传文件</h2>
          <FileUpload
            onUploadComplete={handleUploadComplete}
            maxSize={10}
            accept="image/*,.pdf,.doc,.docx,.xls,.xlsx"
          />
        </div>
        
        {/* File List */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">文件列表 ({files.length})</h2>
            
            {selectedFiles.size > 0 && (
              <div className="flex gap-2">
                <button
                  onClick={handleBatchDelete}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                >
                  删除选中 ({selectedFiles.size})
                </button>
                <button
                  onClick={selectAll}
                  className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50"
                >
                  {selectedFiles.size === files.length ? '取消全选' : '全选'}
                </button>
              </div>
            )}
          </div>
          
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full mx-auto"></div>
              <p className="mt-4 text-gray-600">加载中...</p>
            </div>
          ) : files.length === 0 ? (
            <div className="text-center py-16 text-gray-500">
              <div className="text-6xl mb-4">📁</div>
              <p>暂无文件，请上传</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {files.map((file) => (
                <div
                  key={file.key}
                  className={`border rounded-lg p-4 hover:shadow-md transition-shadow ${
                    selectedFiles.has(file.key) ? 'border-primary-500 bg-primary-50' : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <input
                      type="checkbox"
                      checked={selectedFiles.has(file.key)}
                      onChange={() => toggleSelect(file.key)}
                      className="mt-1"
                    />
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                      {getFileIcon(file.mimeType)}
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="font-medium truncate" title={file.key}>
                        {file.key}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {file.url}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => window.open(file.url, '_blank')}
                      className="flex-1 border border-primary-600 text-primary-600 px-3 py-1.5 rounded text-sm hover:bg-primary-50"
                    >
                      查看
                    </button>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(file.url)
                        alert('链接已复制')
                      }}
                      className="flex-1 border border-gray-300 text-gray-700 px-3 py-1.5 rounded text-sm hover:bg-gray-50"
                    >
                      复制链接
                    </button>
                    <button
                      onClick={() => handleDelete(file.key)}
                      className="flex-1 bg-red-600 text-white px-3 py-1.5 rounded text-sm hover:bg-red-700"
                    >
                      删除
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
