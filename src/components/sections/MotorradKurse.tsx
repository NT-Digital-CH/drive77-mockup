import { motion } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'
import SectionHeader from '../ui/SectionHeader'

const spring = { type: 'spring', stiffness: 280, damping: 28 } as const

const kurse = [
  {
    kategorie: 'Kategorie A1',
    title: '12 Stunden Grundkurs',
    body: 'Obligatorischer Grundkurs für Roller und Motorrad Kategorie A1.',
  },
  {
    kategorie: 'Kategorie A 35KW',
    title: '12 Stunden Grundkurs',
    body: 'Obligatorischer Grundkurs für Motorrad Kategorie A 35KW.',
  },
  {
    kategorie: 'Kategorie A 35KW (im Besitz Kat. A1)',
    title: '4 Stunden Grundkurs',
    body: 'Auffrischungskurs für Fahrer, die bereits im Besitz der Kategorie A1 sind.',
  },
]

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: spring },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function MotorradKurse() {
  return (
    <section id="motorrad" className="section" style={{ background: 'var(--color-surface)' }}>
      <div className="container">
        <SectionHeader
          eyebrow="Motorrad"
          title="Motorrad Grundkurse"
          subtitle="Qualitative und preiswerte Grundkurse in Zürich – praktisch jedes Wochenende."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '48px',
          }}
        >
          {kurse.map((kurs) => (
            <KursCard key={kurs.title + kurs.kategorie} {...kurs} />
          ))}
        </motion.div>

        {/* Partner banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.2 }}
          viewport={{ once: true, margin: '-80px' }}
          style={{
            background: 'var(--color-card)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius)',
            padding: '28px 40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <SecureDriveLogo />
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '22px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: 'var(--color-red)',
            }}>
              Secure Drive
            </span>
          </div>
          <p style={{ fontSize: '14px', color: 'var(--color-muted)', maxWidth: '460px', margin: 0 }}>
            Unsere Partnerfirma für Strassenkurventrainings auf zwei Rädern.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

interface KursCardProps {
  kategorie: string
  title: string
  body: string
}

function KursCard({ kategorie, title, body }: KursCardProps) {
  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ borderColor: 'var(--color-red)', boxShadow: '0 0 32px var(--color-red-glow)' }}
      style={{
        background: 'var(--color-card)',
        border: '1px solid var(--color-border)',
        borderTop: '3px solid var(--color-red)',
        borderRadius: 'var(--radius)',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
      }}
    >
      <div style={{
        fontSize: '11px',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        color: 'var(--color-muted)',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        marginBottom: '12px',
      }}>
        {kategorie}
      </div>

      <h3 style={{
        color: 'var(--color-text)',
        marginBottom: '12px',
        fontSize: '20px',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        textTransform: 'uppercase',
      }}>
        {title}
      </h3>

      <p style={{ fontSize: '15px', color: 'var(--color-muted)', lineHeight: 1.65, flex: 1, marginBottom: '24px' }}>
        {body}
      </p>

      <a
        href="#kontakt"
        style={{
          fontSize: '13px',
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '1.5px',
          color: 'var(--color-red)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          transition: 'gap 0.2s ease',
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.gap = '10px' }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.gap = '6px' }}
      >
        Kursdaten ansehen <ArrowRight size={14} weight="bold" />
      </a>
    </motion.div>
  )
}

function SecureDriveLogo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Secure Drive">
      <rect width="36" height="36" rx="3" fill="var(--color-red)" fillOpacity="0.12"/>
      <path d="M18 6L28 11V19C28 24.5 23.5 29.2 18 30.5C12.5 29.2 8 24.5 8 19V11L18 6Z" stroke="var(--color-red)" strokeWidth="1.5" fill="none"/>
      <path d="M14 18L17 21L22 15" stroke="var(--color-red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
