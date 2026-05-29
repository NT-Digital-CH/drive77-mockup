import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Startseite', href: '#' },
  { label: 'Angebote', href: '#angebote' },
  { label: 'Motorrad Grundkurse', href: '#motorrad' },
  { label: 'Preise', href: '#preise' },
  { label: 'Feedbacks', href: '#kontakt' },
]

export default function Footer() {
  return (
    <footer style={{
      background: '#0A0A0A',
      borderTop: '1px solid var(--color-border)',
      paddingTop: '60px',
      paddingBottom: '32px',
    }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 280, damping: 28 }}
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr',
            gap: '48px',
            marginBottom: '48px',
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <CheckeredFlag />
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '22px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: 'var(--color-text)',
              }}>
                drive<span style={{ color: 'var(--color-red)' }}>77</span>
              </span>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--color-muted)', marginBottom: '8px', lineHeight: 1.6 }}>
              Günstig · Preiswert · Gut
            </p>
            <p style={{ fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.6 }}>
              Birmensdorferstrasse 484<br />
              8055 Zürich
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p style={{
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: 'var(--color-muted)',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              marginBottom: '16px',
            }}>
              Navigation
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '14px',
                      color: 'var(--color-muted)',
                      display: 'block',
                      lineHeight: 2,
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-text)' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-muted)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: 'var(--color-muted)',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              marginBottom: '16px',
            }}>
              Kontakt
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { label: '079 405 48 58', href: 'tel:0794054858' },
                { label: 'info@drive77.ch', href: 'mailto:info@drive77.ch' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  style={{ fontSize: '14px', color: 'var(--color-muted)', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-text)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-muted)' }}
                >
                  {label}
                </a>
              ))}
              <p style={{ fontSize: '14px', color: 'var(--color-muted)', marginTop: '4px' }}>
                Mo–Fr 08:00–20:00
              </p>
              <p style={{ fontSize: '14px', color: 'var(--color-muted)' }}>
                Sa 10:00–14:00
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--color-border)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <span style={{ fontSize: '13px', color: 'var(--color-muted)' }}>
            © 2025 Fahrschule drive77.ch
          </span>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Impressum', 'Datenschutz'].map((label) => (
              <a
                key={label}
                href="#"
                style={{
                  fontSize: '13px',
                  color: 'var(--color-muted)',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-text)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-muted)' }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  )
}

function CheckeredFlag() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="0" y="0" width="10" height="10" fill="#E8320A"/>
      <rect x="10" y="0" width="10" height="10" fill="#F0F0F0"/>
      <rect x="0" y="10" width="10" height="10" fill="#F0F0F0"/>
      <rect x="10" y="10" width="10" height="10" fill="#E8320A"/>
    </svg>
  )
}
