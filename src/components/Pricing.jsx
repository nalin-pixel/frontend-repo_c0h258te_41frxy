import React from 'react'

const plans = [
  {
    name: 'Starter',
    price: '$79',
    period: '/month',
    desc: 'Great for individual attorneys getting started.',
    bullets: [
      'Core research features',
      'Bluebook citations',
      'Email support',
    ],
  },
  {
    name: 'Professional',
    price: '$149',
    period: '/month',
    desc: 'Best for power users and small teams.',
    featured: true,
    bullets: [
      'Unlimited queries',
      'Advanced filters and analytics',
      'Priority support',
    ],
  },
]

function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-10">Pricing & Trial</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border p-6 bg-slate-800/50 ${p.featured ? 'border-blue-400/50 shadow-[0_0_40px_rgba(59,130,246,0.25)]' : 'border-blue-500/20'}`}
            >
              <h3 className="text-2xl font-semibold text-white">{p.name}</h3>
              <p className="text-blue-200/80 text-sm mt-1">{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-white">{p.price}</span>
                <span className="text-blue-300/80">{p.period}</span>
              </div>
              <ul className="mt-6 space-y-2">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-blue-100">
                    <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className={`mt-6 inline-flex w-full items-center justify-center px-5 py-3 rounded-lg font-semibold transition-colors ${p.featured ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                Start 7‑Day Free Trial
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-blue-300/70 text-sm mt-6">No setup required • Cancel anytime</p>
      </div>
    </section>
  )
}

export default Pricing
