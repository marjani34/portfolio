'use client'

import { useState, useEffect } from 'react'

interface PDFViewerProps {
  file: string
}

const PDFViewer = ({ file }: PDFViewerProps) => {
  const [isClient, setIsClient] = useState(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    setIsClient(true)
    console.log('PDFViewer: Client initialized, file path:', file)
  }, [file])

  const handlePdfLoad = () => {
    console.log('PDFViewer: PDF loaded successfully')
    setError(false)
  }

  const handlePdfError = () => {
    console.log('PDFViewer: PDF failed to load')
    setError(true)
  }

  if (!isClient) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 dark:border-primary-400 mx-auto mb-2"></div>
          <p className="text-gray-600 dark:text-gray-400">Initializing PDF viewer...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center text-gray-600 dark:text-gray-400">
        <svg className="w-12 h-12 mb-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
        <p className="mb-2">Failed to load PDF</p>
        <p className="text-sm">Please check your internet connection or try again later</p>
        <a 
          href={file} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          Open PDF in New Tab
        </a>
      </div>
    )
  }

  return (
    <div className="w-full">
      {/* Debug Info */}
      <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Debug:</strong> PDF path: {file}
        </p>
        <p className="text-sm text-blue-600 dark:text-blue-300">
          Status: {error ? 'Error' : 'Loading...'}
        </p>
      </div>

      {/* PDF Display - Multiple approaches for better compatibility */}
      <div className="flex justify-center mb-4">
        {/* Primary: Object tag for PDF display */}
        <object
          data={file}
          type="application/pdf"
          className="w-full max-w-2xl h-[600px] border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg"
          onLoad={handlePdfLoad}
          onError={handlePdfError}
        >
          {/* Fallback 1: Iframe for browsers that support it */}
          <iframe
            src={file}
            className="w-full max-w-2xl h-[600px] border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg"
            title="PDF Viewer"
          >
            {/* Fallback 2: Direct link for browsers that don't support iframe */}
            <div className="w-full max-w-2xl h-[600px] border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-gray-600 dark:text-gray-400 mb-2">PDF Preview Not Available</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm">Your browser doesn&apos;t support PDF preview</p>
              </div>
            </div>
          </iframe>
        </object>
      </div>

    </div>
  )
}

export default PDFViewer
