export interface HobbyWork {
  src: string
  caption: string
}

export interface Hobby {
  emoji: string
  name: string
  description: string
  color: string
  works: HobbyWork[]
}

export interface TimelineEvent {
  date: string
  title: string
  description: string
  image?: string
}

export interface Award {
  title: string
  issuer: string
  date: string
  category: '学业' | '体育' | '艺术' | '其他'
}

export interface ProfileInfo {
  name: string
  birthday: string
  school: string
  motto: string
  traits: string[]
  intro: string
}

export const info: ProfileInfo = {
  name: '张屹煊',
  birthday: '2018-09-15',
  school: '（小学）',
  motto: '每天进步一点点！',
  traits: ['活泼', '好奇', '勇敢', '爱笑', '专注', '善良', '乐观', '坚持'],
  intro: '大家好！我是张屹煊，一个热爱生活、兴趣广泛的小学生。我喜欢画画、做手工、打篮球，还喜欢游泳和阅读。每一天都是新的冒险！',
}

export const hobbies: Hobby[] = [
  {
    emoji: '🎨',
    name: '绘画',
    description: '用画笔描绘心中的世界，色彩是我最好的朋友。',
    color: 'bg-coral-orange',
    works: [],
  },
  {
    emoji: '✂️',
    name: '手工',
    description: '剪纸、折纸、粘土……动手创造无限可能！',
    color: 'bg-lavender',
    works: [],
  },
  {
    emoji: '✍️',
    name: '写字',
    description: '一笔一划，认真写好每一个字。',
    color: 'bg-sky-blue',
    works: [],
  },
  {
    emoji: '🏀',
    name: '篮球',
    description: '在球场上奔跑，投篮的感觉太棒了！',
    color: 'bg-sun-yellow',
    works: [],
  },
  {
    emoji: '🏊',
    name: '游泳',
    description: '像鱼一样在水里自由自在。',
    color: 'bg-sky-blue',
    works: [],
  },
  {
    emoji: '📚',
    name: '阅读',
    description: '书里有无穷无尽的奇妙世界等着我探索。',
    color: 'bg-grass-green',
    works: [],
  },
]

export const timeline: TimelineEvent[] = [
  {
    date: '2025-09',
    title: '一年级入学 🎒',
    description: '背上小书包，开始了小学生活！',
  },
  {
    date: '2025-10',
    title: '第一次校运会 🏃',
    description: '参加了学校运动会，奋力奔跑！',
  },
  {
    date: '2026-01',
    title: '一年级上学期结束 📝',
    description: '顺利完成第一个学期，收获满满。',
  },
  {
    date: '2026-03',
    title: '春季学期开学 🌸',
    description: '新学期新气象，继续加油！',
  },
]

export const awards: Award[] = [
  {
    title: '优秀少先队员',
    issuer: '学校',
    date: '2026-01',
    category: '其他',
  },
  {
    title: '绘画比赛三等奖',
    issuer: '区少年宫',
    date: '2025-12',
    category: '艺术',
  },
  {
    title: '期末学业优秀奖',
    issuer: '学校',
    date: '2026-01',
    category: '学业',
  },
]
