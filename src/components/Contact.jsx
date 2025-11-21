import { useState } from 'react'
import { Mail, Phone, Linkedin, Instagram, Youtube } from 'lucide-react'

export default function Contact(){
  const [status, setStatus] = useState(null)
  const base = import.meta.env.VITE_BACKEND_URL || ''

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const res = await fetch(`${base}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const data = await res.json()
      if (res.ok) {
        setStatus('Thanks! I will get back to you shortly.')
        e.currentTarget.reset()
      } else {
        setStatus(data?.detail || 'Something went wrong')
      }
    } catch (e) {
      setStatus('Network error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#0b0b0b] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Get in touch</h2>
            <p className="mt-2 text-gray-300">Email: your.email@example.com • Phone: +91-00000-00000</p>
            <div className="mt-4 flex gap-4">
              <a href="https://www.linkedin.com" target="_blank" className="text-gray-300 hover:text-white"><Linkedin /></a>
              <a href="https://www.instagram.com" target="_blank" className="text-gray-300 hover:text-white"><Instagram /></a>
              <a href="https://www.youtube.com" target="_blank" className="text-gray-300 hover:text-white"><Youtube /></a>
              <a href="https://www.essentiallysports.com/author/viren-mirpuri/" target="_blank" className="text-gray-300 hover:text-white">ES</a>
            </div>
            <div className="mt-6 rounded-xl overflow-hidden border border-white/10">
              <iframe title="The 8 Bit Bistro" className="w-full h-64" src="https://www.google.com/maps?q=The%208%20Bit%20Bistro%20Pune&output=embed"></iframe>
            </div>
          </div>
          <form onSubmit={onSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-300">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white" />
              </div>
              <div>
                <label className="block text-sm text-gray-300">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-gray-300">Subject</label>
              <input name="subject" required className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white" />
            </div>
            <div className="mt-4">
              <label className="block text-sm text-gray-300">Message</label>
              <textarea name="message" rows="5" required className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white"></textarea>
            </div>
            <button className="mt-6 px-5 py-3 rounded-md bg-red-600 hover:bg-red-500 text-white">Send Message</button>
            {status && <p className="mt-3 text-sm text-gray-300">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
