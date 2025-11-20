import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Radial glow overlays - pointer-events-none so Spline stays interactive */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-40 pb-28">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: 'easeOut' }} className="max-w-3xl">
          <p className="text-cyan-200/90 text-sm tracking-widest uppercase mb-4">Creative Developer • Fluid Interfaces</p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight text-white drop-shadow-[0_4px_30px_rgba(255,255,255,0.15)]">
            Magical, fluid experiences that flow like liquid metal
          </h1>
          <p className="mt-6 text-white/80 text-lg max-w-2xl">
            I blend motion, code, and curiosity to craft immersive, animated websites. Dive into my world of
            interactive projects and experiments.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="group relative inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-black bg-white/90 hover:bg-white transition">
              <span>View Projects</span>
              <span className="relative ml-1 h-1 w-6 overflow-hidden rounded-full bg-black/20">
                <span className="absolute inset-0 translate-x-[-80%] group-hover:translate-x-[80%] transition-transform duration-700 bg-black/60" />
              </span>
            </a>
            <a href="#contact" className="inline-flex rounded-xl px-5 py-3 text-sm font-medium text-white/90 ring-1 ring-white/20 hover:ring-white/40 transition">
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
