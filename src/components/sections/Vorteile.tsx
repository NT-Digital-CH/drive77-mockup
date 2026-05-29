import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'

const spring = { type: 'spring', stiffness: 280, damping: 28 } as const

const vorteile = [
  {
    num: '01',
    title: 'Qualität zu fairen Preisen',
    body: 'Faire Abos, transparente Einzelpreise und eine Probestunde für nur CHF 50.–. Keine versteckten Kosten.',
  },
  {
    num: '02',
    title: 'Gezielt und Speditiv',
    body: 'Effiziente Ausbildung direkt auf dein Ziel ausgerichtet. Du lernst schnell, sicher und ohne unnötige Umwege.',
  },
  {
    num: '03',
    title: 'Exklusive Tips und Tricks',
    body: 'Profitiere vom Praxiswissen und den Insiderkenntnissen von Fahrlehrer Kris.',
  },
]

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: spring },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function Vorteile() {
  return (
    <section className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <SectionHeader
          eyebrow="Warum Drive 77"
          title="Deine Vorteile"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
          }}
        >
          {vorteile.map((v) => (
            <VorteilBlock key={v.num} {...v} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

interface VorteilBlockProps {
  num: string
  title: string
  body: string
}

function VorteilBlock({ num, title, body }: VorteilBlockProps) {
  return (
    <motion.div
      variants={cardVariant}
      style={{ position: 'relative', overflow: 'hidden', padding: '8px 0' }}
    >
      {/* Faded background number */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-20px',
          right: '0',
          fontFamily: 'var(--font-display)',
          fontSize: '120px',
          fontWeight: 700,
          color: 'rgba(255,255,255,0.03)',
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
          letterSpacing: '-4px',
        }}
      >
        {num}
      </div>

      {/* Red accent bar */}
      <div style={{
        width: '40px',
        height: '2px',
        background: 'var(--color-red)',
        marginBottom: '20px',
        borderRadius: '1px',
      }} />

      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '22px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        color: 'var(--color-text)',
        marginBottom: '12px',
        position: 'relative',
      }}>
        {title}
      </h3>

      <p style={{
        fontSize: '15px',
        color: 'var(--color-muted)',
        lineHeight: 1.7,
        maxWidth: '320px',
        position: 'relative',
      }}>
        {body}
      </p>
    </motion.div>
  )
}
