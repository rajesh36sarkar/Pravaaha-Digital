import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export default function Button({
  children,
  className,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium transition-all duration-300 ease-smooth',

        variant === 'primary' &&
          'bg-primary text-white shadow-soft hover:-translate-y-1 hover:shadow-glow',

        variant === 'secondary' &&
          'glass text-foreground hover:bg-white/80',

        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}