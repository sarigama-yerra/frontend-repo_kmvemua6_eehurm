import Spline from '@splinetool/react-spline'
import { useEffect, useMemo, useRef, useState } from 'react'

const TAGLINES = [
  'Motorsports Journalist',
  'Gaming Café Owner',
  'Music Editor',
  'Entrepreneur',
]

function useTypewriter(lines, speed = 60, pause = 1200) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    let i = 0
    let timeout

    const type = () => {
      if (i < lines[index].length) {
        setText((t) => t + lines[index][i])
        i++
        timeout = setTimeout(type, speed)
      } else {
        setTyping(false)
        timeout = setTimeout(() => {
          setTyping(true)
          // erase
          const erase = () => {
            if (i > 0) {
              setText((t) => t.slice(0, -1))
              i--
              timeout = setTimeout(erase, 30)
            } else {
              setIndex((idx) => (idx + 1) % lines.length)
            }
          }
          erase()
        }, pause)
      }
    }

    type()
    return () => clearTimeout(timeout)
  }, [index, lines, speed, pause])

  return { text, typing }
}

export default function Hero() {
  const { text } = useTypewriter(TAGLINES)

  return (
    <section className="relative min-h-[90vh] flex items-center" id="top">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-[#0b0b0b] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-gray-200 mb-4">
            High-energy. Insight-driven. Multi-domain.
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
            Viren Mirpuri
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-gray-200 font-mono">
            {text}<span className="text-red-500">|</span>
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-xl text-center">
            {[{label:'Articles Published', value:'1607+'},{label:'Businesses Founded', value:'2'},{label:'Years in Gaming', value:'5+'}].map((s) => (
              <div key={s.label} className="rounded-lg bg-white/5 border border-white/10 p-4">
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-gray-300">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a href="#journalism" className="inline-flex items-center px-5 py-3 rounded-md bg-red-600 hover:bg-red-500 text-white font-medium transition-shadow shadow-lg shadow-red-600/20">Read My Work</a>
            <a href="#businesses" className="inline-flex items-center px-5 py-3 rounded-md border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10 font-medium">Visit My Café</a>
          </div>
        </div>
      </div>
    </section>
  )
}
