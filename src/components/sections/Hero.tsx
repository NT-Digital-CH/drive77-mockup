import { motion } from 'framer-motion'
import Button from '../ui/Button'

const spring = { type: 'spring', stiffness: 280, damping: 28 } as const

const TICKER_ITEMS = [
  'Probestunde CHF 50.–',
  '5er Abo CHF 470.–',
  '10er Abo CHF 890.–',
  'Grundkurs ab CHF 460.–',
  'Motorrad Fahrstunde CHF 100.–',
  'Mo–Fr 08:00–20:00',
  'Sa 10:00–14:00',
]

export default function Hero() {
  const tickerContent = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <section
      style={{
        minHeight: '100dvh',
        background: 'var(--color-bg)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Speed lines */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '140%',
              height: '1px',
              background: 'rgba(232,50,10,0.055)',
              top: `${10 + i * 11}%`,
              left: '-20%',
              animation: `speedline 5s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative 77 */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '-60px',
          top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(180px, 28vw, 360px)',
          fontWeight: 700,
          color: 'rgba(232,50,10,0.055)',
          userSelect: 'none',
          lineHeight: 0.85,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        77
      </div>

      {/* Hero content */}
      <div
        className="container"
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          paddingTop: '72px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: '680px' }}>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...spring, delay: 0 }}
            style={{
              fontSize: '11px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: 'var(--color-red)',
              borderLeft: '3px solid var(--color-red)',
              paddingLeft: '12px',
              marginBottom: '24px',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
            }}
          >
            Deine Fahrschule in Zürich
          </motion.div>

          {/* Headline */}
          <h1 style={{ marginBottom: '24px', color: 'var(--color-text)' }}>
            {(['GÜNSTIG.', 'GEZIELT.', 'SPEDITIV.'] as const).map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: 0.10 + i * 0.12 }}
                style={{ display: 'block' }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...spring, delay: 0.50 }}
            style={{
              fontSize: '18px',
              color: 'var(--color-muted)',
              maxWidth: '480px',
              lineHeight: 1.6,
              marginBottom: '40px',
            }}
          >
            Qualität zu fairen Preisen – Auto und Motorrad in Zürich
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.65 }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
          >
            <Button variant="primary" size="lg" href="#angebote">
              Jetzt anmelden
            </Button>
            <Button variant="ghost" size="lg" href="#preise">
              Preise ansehen
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Stats ticker */}
      <div
        style={{
          width: '100%',
          height: '52px',
          background: 'var(--color-surface)',
          borderTop: '1px solid var(--color-border)',
          overflow: 'hidden',
          position: 'relative',
          zIndex: 1,
          flexShrink: 0,
        }}
      >
        <div className="ticker-track">
          {tickerContent.map((item, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
              <span style={{ padding: '0 8px' }}>{item}</span>
              <span className="ticker-sep" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
