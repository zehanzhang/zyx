import { motion } from 'framer-motion'
import { awards } from '../data/profile'

const categoryConfig: Record<string, { emoji: string; color: string }> = {
  '学业': { emoji: '📖', color: 'bg-sky-blue/20 text-sky-700' },
  '体育': { emoji: '🏅', color: 'bg-sun-yellow/20 text-yellow-700' },
  '艺术': { emoji: '🎨', color: 'bg-coral-orange/20 text-orange-700' },
  '其他': { emoji: '⭐', color: 'bg-lavender/20 text-purple-700' },
}

export default function Awards() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-amber-50/50 to-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-display text-3xl md:text-4xl text-center text-gray-800 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          🏆 荣誉墙
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, i) => {
            const config = categoryConfig[award.category] ?? categoryConfig['其他']
            return (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="text-4xl mb-3">{config.emoji}</div>
                <h3 className="font-display text-lg text-gray-800 mb-2">{award.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{award.issuer} · {award.date}</p>
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${config.color}`}>
                  {award.category}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
