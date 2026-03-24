import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { hobbies } from '../data/profile'
import type { Hobby } from '../data/profile'

const colorMap: Record<string, string> = {
  'bg-coral-orange': 'from-orange-100 to-red-50 border-coral-orange/30',
  'bg-lavender': 'from-purple-100 to-pink-50 border-lavender/30',
  'bg-sky-blue': 'from-blue-100 to-cyan-50 border-sky-blue/30',
  'bg-sun-yellow': 'from-yellow-100 to-amber-50 border-sun-yellow/30',
  'bg-grass-green': 'from-green-100 to-emerald-50 border-grass-green/30',
}

function HobbyCard({ hobby, index }: { hobby: Hobby; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const gradient = colorMap[hobby.color] ?? 'from-gray-100 to-gray-50 border-gray-200'

  return (
    <motion.div
      className={`bg-gradient-to-br ${gradient} border rounded-2xl p-6 cursor-pointer shadow-sm hover:shadow-md transition-shadow`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={() => setExpanded(!expanded)}
      whileHover={{ scale: 1.02 }}
    >
      <div className="text-5xl mb-3">{hobby.emoji}</div>
      <h3 className="font-display text-xl text-gray-800 mb-2">{hobby.name}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{hobby.description}</p>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-4 overflow-hidden"
          >
            {hobby.works.length > 0 ? (
              <div className="grid grid-cols-2 gap-2">
                {hobby.works.map((work, i) => (
                  <div key={i} className="rounded-xl overflow-hidden">
                    <img src={work.src} alt={work.caption} className="w-full h-32 object-cover" />
                    <p className="text-xs text-gray-500 mt-1 text-center">{work.caption}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400 italic text-center py-4">
                📷 作品即将上传，敬请期待！
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-3 text-xs text-gray-400">
        {expanded ? '点击收起 ▲' : '点击展开 ▼'}
      </div>
    </motion.div>
  )
}

export default function Hobbies() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-yellow-50/50 to-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-display text-3xl md:text-4xl text-center text-gray-800 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          🎯 我的爱好
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, i) => (
            <HobbyCard key={hobby.name} hobby={hobby} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
