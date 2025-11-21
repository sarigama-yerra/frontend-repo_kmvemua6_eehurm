import { useEffect, useRef, useState } from 'react'

export default function Testimonials(){
  const items = [
    {quote: 'Viren’s coverage captures the pulse of the paddock with clarity and pace.', pub: 'EssentiallySports', url: 'https://www.essentiallysports.com/author/viren-mirpuri/'},
    {quote: 'Brings gaming culture and business under one roof—community-first.', pub: 'The 8 Bit Bistro', url: '#'},
    {quote: 'Editorial leadership that puts artists first and tells stories that matter.', pub: 'Savaal Magazine', url: '#'},
  ]
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i+1)%items.length), 4000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="py-24 bg-[#0b0b0b]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured</h2>
        <div className="mt-8 relative">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <p className="text-xl text-gray-200">“{items[index].quote}”</p>
            <a href={items[index].url} target="_blank" className="mt-3 inline-block text-cyan-300 hover:text-cyan-200">{items[index].pub}</a>
          </div>
          <div className="mt-4 flex justify-center gap-2">
            {items.map((_, i) => (
              <button key={i} className={`w-2 h-2 rounded-full ${i===index ? 'bg-red-500' : 'bg-white/20'}`} onClick={() => setIndex(i)} aria-label={`Go to slide ${i+1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
