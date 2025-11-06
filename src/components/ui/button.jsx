import React from 'react'

const Button = React.forwardRef(({ 
  className = '', 
  variant = 'default',
  ...props 
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50'
  
  const variants = {
    default: 'bg-slate-900 text-slate-50 hover:bg-slate-900/90',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-100/80',
    outline: 'border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900',
    ghost: 'hover:bg-slate-100 hover:text-slate-900',
  }
  
  return (
    <button
      className={`${baseStyles} ${variants[variant] || variants.default} ${className}`}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = 'Button'

export { Button }

