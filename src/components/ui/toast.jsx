import React, { useEffect } from 'react'
import { CheckCircle } from 'lucide-react'

export function Toast({ message, onClose, duration = 3000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-[slideUp_0.3s_ease-out]">
      <div className="bg-slate-900 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 min-w-[200px]">
        <CheckCircle className="h-5 w-5 flex-shrink-0" />
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  )
}

