import { motion } from 'framer-motion'

const items = [
  {
    title: 'Fluid Portfolio',
    tags: ['Framer Motion', 'WebGL', 'Spline'],
    desc: 'A kinetic, liquid-inspired portfolio with 3D micro-interactions.'
  },
  {
    title: 'Iridescent UI Kit',
    tags: ['Design', 'React', 'Tailwind'],
    desc: 'A shimmering component library with chromatic gloss effects.'
  },
  {
    title: 'Realtime Canvas Lab',
    tags: ['Canvas', 'Shaders', 'GSAP'],
    desc: 'Interactive paint and warp experiments in the browser.'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-gradient-to-b from-black via-[#07070a] to-black py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white mb-12"
        >
          Featured Work
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.06, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 p-6"
            >
              <div className="absolute -top-10 -right-10 h-36 w-36 rounded-full bg-fuchsia-500/20 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-cyan-400/20 blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <div className="h-2 w-24 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-300 rounded-full" />
                </div>
                <p className="mt-3 text-white/70">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs text-white/80 bg-white/10 rounded-full px-3 py-1 ring-1 ring-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
