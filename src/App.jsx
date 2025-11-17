import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import WhoFor from './components/WhoFor'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.12),transparent_45%)]" />

      {/* Simple nav */}
      <header className="relative z-10">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.6)]" />
            <span className="font-semibold tracking-tight">OmniLaw</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-blue-200/90">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#who" className="hover:text-white">Who It’s For</a>
            <a href="#how" className="hover:text-white">How It Works</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
          </div>
          <a href="#pricing" className="inline-flex items-center px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-semibold">Start Free Trial</a>
        </nav>
      </header>

      <main className="relative z-10">
        <Hero />
        <Features />
        <WhoFor />
        <Workflow />

        {/* Why Choose */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Why Choose OmniLaw</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-blue-500/20 bg-slate-800/50 p-6">
                <h3 className="text-xl font-semibold mb-2">Complete U.S. Legal Database</h3>
                <p className="text-blue-200/80 text-sm">Instant access with AI reasoning saves time and reduces the risk of missing critical citations.</p>
              </div>
              <div className="rounded-xl border border-blue-500/20 bg-slate-800/50 p-6">
                <h3 className="text-xl font-semibold mb-2">Built for Professionals</h3>
                <p className="text-blue-200/80 text-sm">Accuracy, relevance, and citation integrity are prioritized in every answer.</p>
              </div>
              <div className="rounded-xl border border-blue-500/20 bg-slate-800/50 p-6">
                <h3 className="text-xl font-semibold mb-2">Proven Productivity</h3>
                <p className="text-blue-200/80 text-sm">“OmniLaw reduced our research time by 70%. It’s like having a junior associate who never sleeps.”</p>
              </div>
            </div>
            <div className="mt-6 rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-6">
              <h3 className="text-xl font-semibold text-emerald-200">High security and ethical design</h3>
              <p className="text-emerald-100/80 text-sm mt-1">Only public‑domain documents, TLS 1.3 and AES‑256 encryption, and infrastructure tailored for professional use.</p>
            </div>
          </div>
        </section>

        <Pricing />
      </main>

      <footer className="relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-300/70 text-sm">© {new Date().getFullYear()} OmniLaw. All rights reserved.</p>
          <div className="flex items-center gap-6 text-blue-300/80 text-sm">
            <a href="https://omnilaw.ai" target="_blank" rel="noreferrer" className="hover:text-white">omnilaw.ai</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#features" className="hover:text-white">Features</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
