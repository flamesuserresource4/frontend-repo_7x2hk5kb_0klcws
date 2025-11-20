import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${
      scrolled ? 'backdrop-blur-xl bg-black/30 border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="group inline-flex items-center gap-3">
          <div className="relative h-9 w-9">
            <span className="absolute inset-0 rounded-xl bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-amber-300 blur-sm opacity-60 group-hover:opacity-90 transition" />
            <span className="relative z-10 inset-0 block h-full w-full rounded-xl bg-black/60 ring-1 ring-white/20" />
          </div>
          <span className="text-white/90 font-semibold tracking-tight">Ritesh Bhoir</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-white/70 hover:text-white transition">
              {l.label}
            </a>
          ))}
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile */}
      <div className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 space-y-2">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-white/80 hover:text-white py-2">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
