import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Soft starfield background */}
      <div aria-hidden className="fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.06),transparent_30%),_radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.06),transparent_35%),_radial-gradient(circle_at_50%_80%,rgba(34,211,238,0.05),transparent_35%)]" />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Contact />

        {/* Footer */}
        <footer className="border-t border-white/10 py-10 text-center text-white/60">
          <p>© {new Date().getFullYear()} Ritesh Bhoir. Crafted with motion and magic.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
