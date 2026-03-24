import { motion } from 'framer-motion'
import { info } from '../data/profile'

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function AboutMe() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-display text-3xl md:text-4xl text-center text-gray-800 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          🌟 关于我
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {info.intro}
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: '学校', value: info.school, emoji: '🏫' },
            { label: '年级', value: '一年级', emoji: '📖' },
            { label: '座右铭', value: info.motto, emoji: '💪' },
            { label: '最爱', value: '画画 & 篮球', emoji: '❤️' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-5 text-center shadow-sm"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-3xl mb-2">{item.emoji}</div>
              <div className="text-xs text-gray-500 mb-1">{item.label}</div>
              <div className="font-bold text-gray-700 text-sm">{item.value}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {info.traits.map((trait) => {
            const colors = [
              'bg-sky-blue/20 text-sky-700',
              'bg-sun-yellow/20 text-yellow-700',
              'bg-grass-green/20 text-green-700',
              'bg-coral-orange/20 text-orange-700',
              'bg-lavender/20 text-purple-700',
            ]
            const color = colors[Math.abs(trait.charCodeAt(0)) % colors.length]
            return (
              <span
                key={trait}
                className={`${color} px-4 py-1.5 rounded-full text-sm font-semibold`}
              >
                {trait}
              </span>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
