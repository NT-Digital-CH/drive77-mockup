import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Angebote from './components/sections/Angebote'
import Preise from './components/sections/Preise'
import MotorradKurse from './components/sections/MotorradKurse'
import Vorteile from './components/sections/Vorteile'
import Kontakt from './components/sections/Kontakt'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Angebote />
        <Vorteile />
        <Preise />
        <MotorradKurse />
        <Kontakt />
      </main>
      <Footer />
    </>
  )
}
