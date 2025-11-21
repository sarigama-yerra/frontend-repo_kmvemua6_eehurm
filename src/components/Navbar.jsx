import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'journalism', label: 'Journalism' },
  { id: 'businesses', label: 'Businesses' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-red-600 to-red-800 grid place-items-center font-extrabold text-white tracking-tight">VM</div>
            <span className="hidden sm:block text-white/90 font-semibold">Viren Mirpuri</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-200">
            {navItems.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="hover:text-white transition-colors">
                {n.label}
              </button>
            ))}
          </nav>
          <button className="md:hidden text-gray-200" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 py-2 space-y-1 bg-black/80">
            {navItems.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="block w-full text-left py-3 text-gray-200 hover:text-white">
                {n.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
