import { useEffect, useMemo, useState } from 'react'

const CATS = ['All','Formula 1','NASCAR','Gaming']

export default function Journalism() {
  const [filter, setFilter] = useState('All')
  const [articles, setArticles] = useState([])
  const base = import.meta.env.VITE_BACKEND_URL || ''

  useEffect(() => {
    const url = filter === 'All' ? `${base}/api/articles` : `${base}/api/articles?category=${encodeURIComponent(filter)}`
    fetch(url).then(r => r.json()).then(setArticles).catch(() => setArticles([]))
  }, [filter, base])

  return (
    <section id="journalism" className="py-24 bg-gradient-to-b from-[#0b0b0b] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Journalism Portfolio</h2>
          <div className="hidden md:flex gap-2">
            {CATS.map(c => (
              <button key={c} onClick={() => setFilter(c)} className={`px-3 py-1.5 rounded-full text-sm border ${filter===c? 'bg-red-600 border-red-500 text-white':'border-white/10 text-gray-200 hover:bg-white/10'}`}>{c}</button>
            ))}
          </div>
        </div>
        <div className="md:hidden mt-4 flex gap-2 overflow-x-auto">
          {CATS.map(c => (
            <button key={c} onClick={() => setFilter(c)} className={`px-3 py-1.5 rounded-full text-sm border whitespace-nowrap ${filter===c? 'bg-red-600 border-red-500 text-white':'border-white/10 text-gray-200 hover:bg-white/10'}`}>{c}</button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => (
            <a key={a.id} href={a.url} target="_blank" className="group rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-600/10 transition">
              <div className="aspect-video overflow-hidden">
                <img src={a.thumbnail} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="p-4">
                <div className="text-xs text-cyan-300 font-mono">{a.publication} • {new Date(a.date).toLocaleDateString()}</div>
                <h3 className="mt-2 text-white font-semibold">{a.title}</h3>
                <p className="mt-1 text-sm text-gray-300 line-clamp-2">{a.excerpt}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <a href="https://www.essentiallysports.com/author/viren-mirpuri/" target="_blank" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">View all on EssentiallySports</a>
          <button className="px-4 py-2 rounded-md border border-white/10 text-gray-200 hover:bg-white/10">Load More Articles</button>
        </div>
      </div>
    </section>
  )
}
