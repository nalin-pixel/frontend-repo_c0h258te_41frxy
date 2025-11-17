import React from 'react'

const features = [
  {
    title: '30+ Years of Legal Data',
    desc: 'Access full federal statutes, Supreme Court opinions, and comprehensive precedent archives.',
    badge: 'omnilaw.ai',
  },
  {
    title: 'Natural‑Language Querying',
    desc: 'Ask plain‑English questions and get relevant results instantly, no Boolean syntax required.',
    badge: 'omnilaw.ai',
  },
  {
    title: 'Semantic Precedent Search',
    desc: 'Find cases other tools miss with intelligent relevance ranking and similarity scoring.',
    badge: 'omnilaw.ai',
  },
  {
    title: 'Bluebook Citations Built‑In',
    desc: 'Automatic Bluebook‑formatted citations and citation‑strength analysis for every result.',
    badge: 'omnilaw.ai',
  },
  {
    title: 'Enterprise‑Grade Security',
    desc: 'TLS 1.3, AES‑256 encryption, and public‑domain legal sources only — built for professional use.',
    badge: 'omnilaw.ai',
  },
]

function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.12),transparent_60%)]"></div>
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-10">
          Key Features
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-xl border border-blue-500/20 bg-slate-800/50 p-6 hover:bg-slate-800/70 transition-colors">
              <div className="text-blue-300 text-xs font-mono uppercase tracking-wide mb-2">{f.badge}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-blue-200/80 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
