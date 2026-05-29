import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ButtonProps {
  variant?: 'primary' | 'ghost'
  size?: 'md' | 'lg'
  children: ReactNode
  onClick?: () => void
  href?: string
  fullWidth?: boolean
  type?: 'button' | 'submit'
}

const spring = { type: 'spring', stiffness: 400, damping: 25 } as const

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  fullWidth = false,
  type = 'button',
}: ButtonProps) {
  const pad = size === 'lg' ? '16px 40px' : '13px 32px'
  const fs = size === 'lg' ? '15px' : '13px'

  const base: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: pad,
    fontFamily: 'var(--font-display)',
    fontSize: fs,
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    fontWeight: 600,
    borderRadius: 'var(--radius)',
    cursor: 'pointer',
    transition: 'box-shadow var(--transition)',
    whiteSpace: 'nowrap',
    width: fullWidth ? '100%' : undefined,
    border: '1px solid transparent',
  }

  const styles: Record<string, React.CSSProperties> = {
    primary: {
      ...base,
      background: 'var(--color-red)',
      color: '#fff',
      borderColor: 'var(--color-red)',
    },
    ghost: {
      ...base,
      background: 'transparent',
      color: 'var(--color-red)',
      borderColor: 'var(--color-red)',
    },
  }

  const hoverShadow = '0 8px 24px var(--color-red-glow)'

  const motionProps = {
    whileHover: { y: -2, boxShadow: hoverShadow },
    whileTap: { scale: 0.98 },
    transition: spring,
  }

  if (href) {
    return (
      <motion.a href={href} style={styles[variant]} {...motionProps}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      style={styles[variant]}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}
