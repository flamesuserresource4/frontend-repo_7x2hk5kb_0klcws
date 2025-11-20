import { motion } from 'framer-motion'

const skills = [
  { name: 'React', level: 90 },
  { name: 'Framer Motion', level: 85 },
  { name: 'Three.js', level: 70 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'FastAPI', level: 80 },
]

export default function Skills() {
  return (
    <section id="skills" className="relative bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white mb-10"
        >
          Fluid Skills Map
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-medium">{s.name}</span>
                <span className="text-white/70 text-sm">{s.level}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
