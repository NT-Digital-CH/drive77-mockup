import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { List, X } from '@phosphor-icons/react'
import Button from '../ui/Button'

const navLinks = [
  { label: 'Angebote', href: '#angebote' },
  { label: 'Motorrad', href: '#motorrad' },
  { label: 'Preise', href: '#preise' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 60)
  })

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['angebote', 'motorrad', 'preise', 'kontakt']
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveLink(`#${id}`)
          return
        }
      }
      setActiveLink('')
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (href: string) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          transition: 'background 0.3s ease, border-color 0.3s ease',
          background: scrolled ? 'rgba(13,13,13,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
          >
            <CheckeredFlag />
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '22px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: 'var(--color-text)',
              lineHeight: 1,
            }}>
              drive<span style={{ color: 'var(--color-red)' }}>77</span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }} className="desktop-nav">
            {navLinks.map((link) => (
              <li key={link.href} style={{ position: 'relative' }}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.href) }}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '14px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    color: activeLink === link.href ? 'var(--color-text)' : 'var(--color-muted)',
                    transition: 'color 0.2s ease',
                    paddingBottom: '4px',
                    position: 'relative',
                  }}
                >
                  {link.label}
                  {activeLink === link.href && (
                    <motion.div
                      layoutId="nav-underline"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'var(--color-red)',
                        borderRadius: '1px',
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="desktop-nav">
            <Button variant="primary" size="md" href="#kontakt">
              Probestunde CHF 50.–
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Menu schliessen' : 'Menu öffnen'}
            className="mobile-menu-btn"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-text)',
              display: 'none',
              padding: '8px',
            }}
          >
            {mobileOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{
              position: 'fixed',
              top: '72px',
              left: 0,
              right: 0,
              bottom: 0,
              background: 'var(--color-bg)',
              zIndex: 99,
              display: 'flex',
              flexDirection: 'column',
              padding: '48px 32px',
              borderTop: '1px solid var(--color-border)',
            }}
          >
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, type: 'spring', stiffness: 300, damping: 30 }}
                  style={{ borderBottom: '1px solid var(--color-border)' }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(link.href) }}
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '32px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '2px',
                      color: 'var(--color-text)',
                      display: 'block',
                      padding: '20px 0',
                    }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div style={{ marginTop: '32px' }}>
              <Button variant="primary" size="lg" fullWidth href="#kontakt">
                Probestunde CHF 50.–
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}

function CheckeredFlag() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="0" y="0" width="10" height="10" fill="#E8320A"/>
      <rect x="10" y="0" width="10" height="10" fill="#F0F0F0"/>
      <rect x="0" y="10" width="10" height="10" fill="#F0F0F0"/>
      <rect x="10" y="10" width="10" height="10" fill="#E8320A"/>
    </svg>
  )
}
