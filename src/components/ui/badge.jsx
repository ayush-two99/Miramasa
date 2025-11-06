import React from 'react'

const Badge = React.forwardRef(({ 
  className = '', 
  variant = 'default',
  ...props 
}, ref) => {
  const baseStyles = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2'
  
  const variants = {
    default: 'border-transparent bg-slate-900 text-slate-50 hover:bg-slate-900/80',
    secondary: 'border-transparent bg-slate-100 text-slate-900 hover:bg-slate-100/80',
    outline: 'text-slate-950 border-slate-200',
  }
  
  return (
    <div
      ref={ref}
      className={`${baseStyles} ${variants[variant] || variants.default} ${className}`}
      {...props}
    />
  )
})
Badge.displayName = 'Badge'

export { Badge }

