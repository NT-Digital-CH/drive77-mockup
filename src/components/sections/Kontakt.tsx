import { motion } from 'framer-motion'
import { Phone, Envelope, MapPin, Clock } from '@phosphor-icons/react'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'

const spring = { type: 'spring', stiffness: 280, damping: 28 } as const

export default function Kontakt() {
  return (
    <section id="kontakt" className="section" style={{ background: 'var(--color-surface)' }}>
      <div className="container">
        <SectionHeader
          eyebrow="Kontakt"
          title="So erreichst du uns"
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: '24px',
        }}
          className="kontakt-grid"
        >
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            style={{
              background: 'var(--color-card)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius)',
              padding: '48px',
            }}
          >
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '24px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: 'var(--color-text)',
              marginBottom: '24px',
            }}>
              Kris – Fahrlehrer
            </h3>

            <div style={{ height: '1px', background: 'var(--color-border)', marginBottom: '24px' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <InfoBlock
                icon={<Phone size={18} weight="duotone" />}
                label="Telefon"
                value={
                  <a href="tel:0794054858" style={{ color: 'var(--color-text)', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-red)' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-text)' }}>
                    079 405 48 58
                  </a>
                }
              />
              <InfoBlock
                icon={<Envelope size={18} weight="duotone" />}
                label="E-Mail"
                value={
                  <a href="mailto:info@drive77.ch" style={{ color: 'var(--color-text)', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-red)' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-text)' }}>
                    info@drive77.ch
                  </a>
                }
              />
              <InfoBlock
                icon={<Clock size={18} weight="duotone" />}
                label="Öffnungszeiten"
                value={
                  <div>
                    <div>Mo–Fr: 08:00–20:00 Uhr</div>
                    <div>Sa: 10:00–14:00 Uhr</div>
                  </div>
                }
              />
              <InfoBlock
                icon={<MapPin size={18} weight="duotone" />}
                label="Adresse"
                value={
                  <div>
                    <div>Birmensdorferstrasse 484</div>
                    <div>8055 Zürich</div>
                    <div style={{ fontSize: '13px', marginTop: '4px' }}>
                      Direkt an der Socar Tankstelle, beim Triemli
                    </div>
                  </div>
                }
              />
            </div>

            {/* Social */}
            <div style={{ marginTop: '32px', display: 'flex', gap: '16px' }}>
              <SocialLink href="https://facebook.com" label="Facebook" icon={<FacebookIcon />} />
              <SocialLink href="https://youtube.com" label="YouTube" icon={<YouTubeIcon />} />
            </div>
          </motion.div>

          {/* Right: CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.12 }}
            viewport={{ once: true, margin: '-80px' }}
            style={{
              background: 'var(--color-card)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius)',
              padding: '48px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '-0.5px',
              color: 'var(--color-text)',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}>
              Bereit für deinen Führerausweis?
            </h2>

            <p style={{
              fontSize: '16px',
              color: 'var(--color-muted)',
              lineHeight: 1.65,
              marginBottom: '32px',
            }}>
              Melde dich jetzt an und starte mit einer Probestunde für nur CHF 50.–.
            </p>

            <Button variant="primary" size="lg" fullWidth href="mailto:info@drive77.ch">
              Probestunde buchen
            </Button>

            <p style={{
              fontSize: '13px',
              color: 'var(--color-muted)',
              marginTop: '20px',
              textAlign: 'center',
            }}>
              Oder ruf uns an:{' '}
              <a href="tel:0794054858" style={{ color: 'var(--color-text)' }}>079 405 48 58</a>
            </p>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .kontakt-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

interface InfoBlockProps {
  icon: React.ReactNode
  label: string
  value: React.ReactNode
}

function InfoBlock({ icon, label, value }: InfoBlockProps) {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
      <div style={{ color: 'var(--color-red)', marginTop: '2px', flexShrink: 0 }}>{icon}</div>
      <div>
        <div style={{
          fontSize: '11px',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          color: 'var(--color-muted)',
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          marginBottom: '4px',
        }}>
          {label}
        </div>
        <div style={{ fontSize: '16px', color: 'var(--color-text)', lineHeight: 1.6 }}>
          {value}
        </div>
      </div>
    </div>
  )
}

interface SocialLinkProps {
  href: string
  label: string
  icon: React.ReactNode
}

function SocialLink({ href, label, icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: 'var(--color-muted)',
        transition: 'color 0.2s ease',
        display: 'flex',
        alignItems: 'center',
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-text)' }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-muted)' }}
    >
      {icon}
    </a>
  )
}

function FacebookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20.05 12 20.05 12 20.05s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon fill="var(--color-bg)" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
    </svg>
  )
}
