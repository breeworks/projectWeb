import type { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-white dark:bg-gray-900 shadow-md rounded-xl p-6 ${className}`}>
      {children}
    </div>
  )
}
