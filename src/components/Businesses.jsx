export default function Businesses(){
  return (
    <section id="businesses" className="py-24 bg-[#0b0b0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Businesses</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <div className="aspect-[16/9]">
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=60&auto=format&fit=crop" alt="The 8 Bit Bistro" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-white text-2xl font-semibold">The 8 Bit Bistro</h3>
              <p className="mt-2 text-gray-300">Pune • Mon-Sun 11am-11pm</p>
              <div className="mt-3 text-sm text-gray-300">PS5 Gaming • Retro Classics • Artisan Coffee • Board Games</div>
              <div className="mt-4 flex gap-3">
                <a href="#contact" className="px-4 py-2 rounded-md bg-cyan-600/30 text-cyan-200 border border-cyan-400/40 hover:bg-cyan-600/40">Visit Website</a>
                <a href="https://maps.google.com/?q=The%208%20Bit%20Bistro%20Pune" target="_blank" className="px-4 py-2 rounded-md border border-white/10 text-white hover:bg-white/10">Get Directions</a>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <div className="aspect-[16/9]">
              <img src="https://images.unsplash.com/photo-1436809031070-e5451a391628?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYXZhYWwlMjBNYWdhemluZXxlbnwwfDB8fHwxNzYzNzMyMzc5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Savaal Magazine" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-white text-2xl font-semibold">Savaal Magazine</h3>
              <p className="mt-2 text-gray-300">Independent music journalism, stories, and artist features.</p>
              <div className="mt-4 flex gap-3">
                <a href="#projects" className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-500">Read Magazine</a>
                <a href="#" className="px-4 py-2 rounded-md border border-white/10 text-white hover:bg-white/10">Pitch a story</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
