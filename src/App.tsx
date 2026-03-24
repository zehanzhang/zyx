import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Hobbies from './components/Hobbies'
import Timeline from './components/Timeline'
import Awards from './components/Awards'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <AboutMe />
      <Hobbies />
      <Timeline />
      <Awards />
      <footer className="py-8 text-center bg-gradient-to-r from-sky-50 via-purple-50 to-pink-50">
        <p className="font-display text-gray-500 text-sm">
          张屹煊的成长小站 · 记录每一个精彩瞬间 ✨
        </p>
      </footer>
    </div>
  )
}
