import { motion } from 'framer-motion'

const icons = ['⭐', '🎨', '🏀', '✏️', '🌈', '🎵', '🏊', '📚', '✂️', '🌟', '🎯', '🦋']

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl md:text-3xl opacity-60"
          style={{
            left: `${(i * 8 + 3) % 95}%`,
            top: `${(i * 13 + 7) % 85}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut',
          }}
        >
          {icon}
        </motion.span>
      ))}
    </div>
  )
}
