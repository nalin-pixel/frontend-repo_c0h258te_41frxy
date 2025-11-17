import React from 'react'

const steps = [
  {
    title: 'Case Intake',
    desc: 'Enter case facts and get instant analysis of relevant statutes, regulations, and precedent.',
    badge: 'omnilaw.ai',
  },
  {
    title: 'Research',
    desc: 'Explore all jurisdictions with AI‑powered search, apply smart filters, and get ranked results.',
    badge: 'omnilaw.ai',
  },
  {
    title: 'Strategy',
    desc: 'Generate legal approaches and counterarguments with outcome predictions from historical data.',
    badge: 'omnilaw.ai',
  },
]

function Workflow() {
  return (
    <section id="how" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-10">How It Works</h2>
        <ol className="grid sm:grid-cols-3 gap-6 counter-reset">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-xl border border-blue-500/20 bg-slate-800/50 p-6">
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-lg bg-blue-500 text-white font-bold flex items-center justify-center shadow-lg">{i + 1}</div>
              <div className="text-blue-300 text-xs font-mono uppercase tracking-wide mb-2">{s.badge}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-blue-200/80 text-sm leading-relaxed">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Workflow
