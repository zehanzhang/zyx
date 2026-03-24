import { motion } from 'framer-motion'
import { timeline } from '../data/profile'

export default function Timeline() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="font-display text-3xl md:text-4xl text-center text-gray-800 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          📅 成长时间线
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-blue via-lavender to-coral-orange" />

          {timeline.map((event, i) => {
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={i}
                className={`relative flex items-start mb-10 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-sky-blue z-10" />

                {/* Content */}
                <div
                  className={`ml-14 md:ml-0 md:w-[45%] ${
                    isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                  }`}
                >
                  <span className="inline-block bg-sky-blue/20 text-sky-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
                    {event.date}
                  </span>
                  <h3 className="font-display text-lg text-gray-800">{event.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                  {event.image && (
                    <img
                      src={event.image}
                      alt={event.title}
                      className="mt-3 rounded-xl w-full max-w-xs shadow-sm"
                    />
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
