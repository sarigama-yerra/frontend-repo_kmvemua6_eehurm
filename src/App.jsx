import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Journalism from './components/Journalism'
import Businesses from './components/Businesses'
import Timeline from './components/Timeline'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import AnalyticsDashboard from './components/AnalyticsDashboard'
import { useEffect } from 'react'

const base = import.meta.env.VITE_BACKEND_URL || ''

function useAnalytics(){
  useEffect(() => {
    fetch(`${base}/api/analytics`, { method: 'POST', headers: { 'Content-Type':'application/json' }, body: JSON.stringify({ type: 'page_view', label: 'home', meta: { path: window.location.pathname } }) })
      .catch(()=>{})

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          fetch(`${base}/api/analytics`, { method: 'POST', headers: { 'Content-Type':'application/json' }, body: JSON.stringify({ type: 'section_view', label: entry.target.id }) })
            .catch(()=>{})
        }
      }
    }, { threshold: 0.5 })

    const ids = ['about','journalism','businesses','projects','contact']
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}

function App() {
  useAnalytics()
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journalism />
        <Businesses />
        <Timeline />
        <Testimonials />
        <Contact />
        <AnalyticsDashboard />
      </main>
      <footer className="py-8 text-center text-gray-400 text-sm bg-black/60 border-t border-white/10">© {new Date().getFullYear()} Viren Mirpuri</footer>
    </div>
  )
}

export default App
