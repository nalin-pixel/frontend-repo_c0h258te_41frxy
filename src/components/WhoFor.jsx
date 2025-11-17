import React from 'react'

const audiences = [
  {
    title: 'Firms & Legal Aid',
    desc: 'Built for big law, solo practitioners, and legal aid organizations to streamline research workflows.',
    badge: 'omnilaw.ai',
  },
  {
    title: 'Time‑Saving for Attorneys',
    desc: 'Save 20+ hours per week and focus on strategy instead of manual cite‑checking.',
    badge: 'omnilaw.ai',
  },
]

function WhoFor() {
  return (
    <section id="who" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-10">Who It’s For</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {audiences.map((a) => (
            <div key={a.title} className="rounded-xl border border-blue-500/20 bg-slate-800/50 p-6">
              <div className="text-blue-300 text-xs font-mono uppercase tracking-wide mb-2">{a.badge}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{a.title}</h3>
              <p className="text-blue-200/80 text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhoFor
