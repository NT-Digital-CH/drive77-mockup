import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'

const spring = { type: 'spring', stiffness: 280, damping: 28 } as const

const autoPreise = [
  { label: 'Probestunde', preis: 'CHF 50.–' },
  { label: '5er Abo', preis: 'CHF 470.–', highlight: true },
  { label: '10er Abo', preis: 'CHF 890.–', highlight: true },
  { label: 'Einzellektion', preis: 'CHF 97.–' },
]

const motorradPreise = [
  { label: 'Kat. A1 – 12 Stunden', preis: 'CHF 480.–' },
  { label: 'Kat. A 35KW – 12 Stunden', preis: 'CHF 460.–', highlight: true },
  { label: 'Kat. A 35KW – 4 Stunden', preis: 'CHF 180.–' },
  { label: 'Motorrad Fahrstunde 60 Min.', preis: 'CHF 100.–' },
]

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: spring },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function Preise() {
  return (
    <section id="preise" className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <SectionHeader
          eyebrow="Preise"
          title="Preise bei Drive 77"
          subtitle="Gut muss nicht teuer sein. Vergleiche und profitiere von unseren Angeboten."
          align="center"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginBottom: '32px',
          }}
        >
          <PriceCard
            title="Auto Fahrstunden"
            subtitle="Fahrlektionenzeit 50 Minuten / Automatik"
            rows={autoPreise}
          />
          <PriceCard
            title="Roller & Motorrad Grundkurse"
            subtitle="Obligatorische Grundkurse"
            rows={motorradPreise}
          />
        </motion.div>

        {/* Info box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.3 }}
          viewport={{ once: true, margin: '-80px' }}
          style={{
            borderLeft: '3px solid var(--color-red)',
            background: 'var(--color-red-dim)',
            padding: '16px 20px',
            fontSize: '14px',
            color: 'var(--color-muted)',
            lineHeight: 1.7,
            borderRadius: '0 var(--radius) var(--radius) 0',
          }}
        >
          Nicht aufgebrauchte Abos werden nach absolvierter Fahrausbildung zurückerstattet. Abos sind bis zur zweiten Fahrstunde zu bezahlen, ansonsten werden die bezogenen Lektionen einzeln verrechnet.
        </motion.div>
      </div>
    </section>
  )
}

interface PriceRow {
  label: string
  preis: string
  highlight?: boolean
}

interface PriceCardProps {
  title: string
  subtitle: string
  rows: PriceRow[]
}

function PriceCard({ title, subtitle, rows }: PriceCardProps) {
  return (
    <motion.div
      variants={cardVariant}
      style={{
        background: 'var(--color-card)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius)',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '24px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        color: 'var(--color-text)',
        marginBottom: '6px',
      }}>
        {title}
      </h3>
      <p style={{ fontSize: '13px', color: 'var(--color-muted)', marginBottom: '28px' }}>
        {subtitle}
      </p>

      <div style={{ flex: 1, marginBottom: '32px' }}>
        {rows.map((row, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '14px 0',
              borderBottom: i < rows.length - 1 ? '1px solid var(--color-border)' : 'none',
            }}
          >
            <span style={{
              fontSize: '15px',
              color: row.highlight ? 'var(--color-text)' : 'var(--color-muted)',
              fontWeight: row.highlight ? 500 : 400,
            }}>
              {row.label}
            </span>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '20px',
              fontWeight: 700,
              color: 'var(--color-red)',
              letterSpacing: '0.5px',
            }}>
              {row.preis}
            </span>
          </div>
        ))}
      </div>

      <Button variant="primary" fullWidth href="#kontakt">
        Jetzt anmelden
      </Button>
    </motion.div>
  )
}
