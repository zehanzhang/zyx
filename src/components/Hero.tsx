import { motion } from 'framer-motion'
import { info } from '../data/profile'
import FloatingIcons from './FloatingIcons'

function getGradeInfo(birthday: string): { age: number; grade: string } {
  const now = new Date()
  const birth = new Date(birthday)
  let age = now.getFullYear() - birth.getFullYear()
  if (
    now.getMonth() < birth.getMonth() ||
    (now.getMonth() === birth.getMonth() && now.getDate() < birth.getDate())
  ) {
    age--
  }

  // 2025年9月入学一年级，以此推算
  const enrollYear = 2025
  const currentYear = now.getFullYear()
  const currentMonth = now.getMonth() + 1
  let schoolYears = currentYear - enrollYear
  if (currentMonth < 9) schoolYears--
  const gradeNum = Math.max(1, Math.min(12, schoolYears + 1))

  let grade: string
  if (gradeNum <= 6) grade = `${gradeNum}年级小学生`
  else if (gradeNum <= 9) grade = `${gradeNum - 6}年级初中生`
  else grade = `高${gradeNum - 9}学生`

  return { age, grade }
}

export default function Hero() {
  const { age, grade } = getGradeInfo(info.birthday)

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-sky-100 via-blue-50 to-purple-100 overflow-hidden">
      <FloatingIcons />
      <div className="relative z-10 text-center px-6 py-20">
        <motion.h1
          className="font-display text-5xl md:text-7xl text-gray-800 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          你好！我是{info.name} 👋
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {grade} · {age}岁 · 爱好广泛 · 快乐成长
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {['🎨 绘画', '✂️ 手工', '✍️ 写字', '🏀 篮球', '🏊 游泳', '📚 阅读'].map((tag) => (
            <span
              key={tag}
              className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-700 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
