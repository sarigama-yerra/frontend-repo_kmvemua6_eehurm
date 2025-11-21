import { useEffect, useMemo, useState } from 'react'

export default function AnalyticsDashboard(){
  const base = import.meta.env.VITE_BACKEND_URL || ''
  const [events, setEvents] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${base}/api/analytics?limit=200`)
        const data = await res.json()
        setEvents(data.events || [])
      } catch (e) {
        setEvents([])
      }
    }
    load()
  }, [base])

  const summary = useMemo(() => {
    const s = { page_view: 0, section_view: 0, click: 0 }
    for (const e of events) {
      if (s[e.type] !== undefined) s[e.type]++
    }
    return s
  }, [events])

  return (
    <section className="py-16 bg-black/60 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-semibold text-white">Engagement Analytics</h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {label:'Page Views', value: summary.page_view},
            {label:'Section Views', value: summary.section_view},
            {label:'Clicks', value: summary.click},
          ].map(card => (
            <div key={card.label} className="rounded-xl bg-white/5 border border-white/10 p-6">
              <div className="text-3xl font-bold text-white">{card.value}</div>
              <div className="text-sm text-gray-300">{card.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="text-gray-300">
                <th className="py-2 pr-4">Type</th>
                <th className="py-2 pr-4">Label</th>
                <th className="py-2 pr-4">Meta</th>
                <th className="py-2 pr-4">When</th>
              </tr>
            </thead>
            <tbody>
              {events.map((e, i) => (
                <tr key={i} className="border-t border-white/10 text-gray-200">
                  <td className="py-2 pr-4">{e.type}</td>
                  <td className="py-2 pr-4">{e.label || '-'}</td>
                  <td className="py-2 pr-4">{e.meta ? JSON.stringify(e.meta) : '-'}</td>
                  <td className="py-2 pr-4">{e.created_at ? new Date(e.created_at).toLocaleString() : '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
