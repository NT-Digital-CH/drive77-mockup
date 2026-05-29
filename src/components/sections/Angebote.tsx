import { motion } from 'framer-motion'
import { Car, Motorcycle, Trophy, Flag } from '@phosphor-icons/react'
import SectionHeader from '../ui/SectionHeader'

const spring = { type: 'spring', stiffness: 280, damping: 28 } as const

const cards = [
  {
    icon: <Car size={28} weight="duotone" />,
    kategorie: 'Kategorie B – Auto',
    title: 'Auto Fahrstunden',
    body: 'Fahrstunden mit Automatik und Handschaltung. Fahrlektionenzeit 50 Minuten, gezielt auf deine Prüfung ausgerichtet.',
    link: '#preise',
    linkLabel: 'Angebot Auto',
  },
  {
    icon: <Motorcycle size={28} weight="duotone" />,
    kategorie: 'Kategorie A1 / A – Grundkurs',
    title: 'Roller & Motorrad Grundkurse',
    body: 'Qualitative und preiswerte obligatorische Grundkurse in Zürich. Praktisch jedes Wochenende verfügbar.',
    link: '#motorrad',
    linkLabel: 'Übersicht Kurse',
  },
  {
    icon: <Flag size={28} weight="duotone" />,
    kategorie: 'Kategorie A – Motorrad',
    title: 'Motorrad Fahrstunden',
    body: 'Individuelle Motorrad-Fahrstunden à 60 Minuten mit erfahrenem Fahrlehrer. Flexibel auf dein Level abgestimmt.',
    link: '#preise',
    linkLabel: 'Angebot Motorrad',
  },
  {
    icon: <Trophy size={28} weight="duotone" />,
    kategorie: 'Partnerprogramm',
    title: 'Rennstreckentraining',
    body: 'Strassenkurventraining auf zwei Rädern. In Zusammenarbeit mit unserem Partner Secure Drive.',
    link: '#kontakt',
    linkLabel: 'Veranstaltungen',
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

export default function Angebote() {
  return (
    <section
      id="angebote"
      className="section"
      style={{ background: 'var(--color-surface)' }}
    >
      <div className="container">
        <SectionHeader
          eyebrow="Angebot"
          title="Unser professionelles Angebot"
          subtitle="Alles was du für deinen Führerausweis brauchst – preiswert und effizient."
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
          }}
        >
          {cards.map((card) => (
            <OfferCard key={card.title} {...card} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

interface OfferCardProps {
  icon: React.ReactNode
  kategorie: string
  title: string
  body: string
  link: string
  linkLabel: string
}

function OfferCard({ icon, kategorie, title, body, link, linkLabel }: OfferCardProps) {
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
        gap: '0',
        transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
        cursor: 'default',
      }}
    >
      <div style={{ color: 'var(--color-red)', marginBottom: '20px' }}>{icon}</div>

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

      <h3 style={{ color: 'var(--color-text)', marginBottom: '12px', fontSize: '20px' }}>
        {title}
      </h3>

      <p style={{
        fontSize: '15px',
        color: 'var(--color-muted)',
        lineHeight: 1.65,
        flex: 1,
        marginBottom: '24px',
      }}>
        {body}
      </p>

      <a
        href={link}
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
        {linkLabel} <span>&#8594;</span>
      </a>
    </motion.div>
  )
}
