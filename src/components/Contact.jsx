import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative bg-gradient-to-b from-black to-[#0b0b0f] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white mb-10"
        >
          Let's create something magical
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl p-6 bg-white/5 ring-1 ring-white/10"
          >
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-white/80 mb-2">Name</label>
                <input required className="w-full rounded-xl bg-black/40 text-white px-4 py-3 ring-1 ring-white/10 focus:ring-white/30 outline-none" />
              </div>
              <div>
                <label className="block text-sm text-white/80 mb-2">Email</label>
                <input type="email" required className="w-full rounded-xl bg-black/40 text-white px-4 py-3 ring-1 ring-white/10 focus:ring-white/30 outline-none" />
              </div>
              <div>
                <label className="block text-sm text-white/80 mb-2">Message</label>
                <textarea rows={5} required className="w-full rounded-xl bg-black/40 text-white px-4 py-3 ring-1 ring-white/10 focus:ring-white/30 outline-none" />
              </div>
              <button className="inline-flex rounded-xl px-5 py-3 text-sm font-medium text-black bg-white/90 hover:bg-white transition">
                Send Message
              </button>
              {sent && <p className="text-emerald-400/90 text-sm">Thanks! I'll get back to you soon.</p>}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl p-6 ring-1 ring-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-fuchsia-500/10 to-amber-300/10" />
            <div className="relative z-10">
              <h3 className="text-white text-xl font-semibold mb-2">Availability</h3>
              <p className="text-white/70">Open for freelance and full-time roles. Based in India, available for remote work.</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {['React', 'Motion', '3D', 'APIs'].map(t => (
                  <div key={t} className="rounded-xl bg-white/5 px-4 py-3 text-white/80 ring-1 ring-white/10">{t}</div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
