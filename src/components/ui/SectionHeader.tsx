import { motion } from 'framer-motion'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

const spring = { type: 'spring', stiffness: 300, damping: 30 } as const

export default function SectionHeader({ eyebrow, title, subtitle, align = 'left' }: SectionHeaderProps) {
  const isCenter = align === 'center'

  return (
    <div style={{ textAlign: isCenter ? 'center' : 'left', marginBottom: '56px' }}>
      <motion.div
        initial={{ opacity: 0, x: isCenter ? 0 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ...spring, delay: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '12px',
          fontSize: '11px',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          color: 'var(--color-red)',
          marginBottom: '16px',
          paddingLeft: isCenter ? 0 : '12px',
          borderLeft: isCenter ? 'none' : '3px solid var(--color-red)',
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
        }}
      >
        {eyebrow}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 0.1 }}
        viewport={{ once: true, margin: '-80px' }}
        style={{ color: 'var(--color-text)' }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.2 }}
          viewport={{ once: true, margin: '-80px' }}
          style={{
            fontSize: '18px',
            color: 'var(--color-muted)',
            maxWidth: '560px',
            marginTop: '16px',
            marginLeft: isCenter ? 'auto' : undefined,
            marginRight: isCenter ? 'auto' : undefined,
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
