export default function Timeline(){
  const items = [
    {company:'EssentiallySports', role:'Motorsports Journalist', dates:'2021 — Present', bullets:['1600+ bylines across F1, NASCAR, and gaming','Breaking news, analysis, and features','Built audience with data-driven content']},
    {company:'The 8 Bit Bistro', role:'Founder', dates:'2022 — Present', bullets:['Community-first gaming café in Pune','Launched PS5 + retro gaming + coffee concept','Scaled events and local esports nights']},
    {company:'Savaal Magazine', role:'Editor', dates:'2020 — 2022', bullets:['Led editorial for indie music magazine','Managed contributors and releases','Interviewed emerging artists']},
  ]

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-black to-[#0b0b0b]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Experience</h2>
        <div className="mt-10 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-white/10 rounded" />
          <div className="space-y-10">
            {items.map((it, idx) => (
              <div key={it.company} className={`grid md:grid-cols-2 gap-6 items-start ${idx % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2'}`}>
                <div className="md:pr-8">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <div className="text-sm text-cyan-300 font-mono">{it.dates}</div>
                    <h3 className="mt-1 text-xl text-white font-semibold">{it.role}</h3>
                    <div className="text-gray-300">{it.company}</div>
                    <ul className="mt-3 list-disc list-inside text-gray-300 space-y-1">
                      {it.bullets.map(b => <li key={b}>{b}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="md:pl-8">
                  <div className="h-48 rounded-xl bg-gradient-to-br from-red-600/30 to-cyan-500/20 border border-white/10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
