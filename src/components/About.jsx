export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#0b0b0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1200&q=60&auto=format&fit=crop" alt="Viren Mirpuri" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">About</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">BA in Mass Media & Audio Engineering. Multi-passionate entrepreneur building at the intersection of motorsports, gaming, and music. I turn fast-moving stories into clear insights and build communities around shared passions.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['F1 Writing','NASCAR Coverage','Gaming Industry','Audio Engineering','Business Management','iRacing'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-gray-200 hover:bg-cyan-500/10 hover:border-cyan-400/40 transition">{tag}</span>
              ))}
            </div>
            <a href="#" className="mt-8 inline-flex items-center px-5 py-3 rounded-md bg-white/10 hover:bg-white/20 border border-white/10 text-white">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  )
}
