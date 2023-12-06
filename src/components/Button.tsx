import { ReactNode } from 'react'

interface IProps {
  className?: string
  variant?: 'standart' | 'text'
  onClick?: (event: any) => any
  type?: 'button' | 'reset' | 'submit'
  children: ReactNode
}

const Button = ({ className, variant, onClick, type, children }: IProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
        variant === 'text'
          ? 'text-red-600 bg-red-50 focus-visible:outline-red-50'
          : 'bg-red-600 hover:bg-red-500 focus-visible:outline-red-600 text-white'
      } ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
