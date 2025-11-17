import React from 'react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]"></div>
      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-200 text-sm mb-6">
          AI for Legal Professionals
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
          Legal Research & Analysis Reinvented with AI
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-blue-200/90 max-w-3xl mx-auto">
          Stop wasting hours digging through statutes and cases. OmniLaw delivers citation-grade legal answers, comprehensive precedent analysis, and AI-powered legal reasoning — all in seconds.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#pricing" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors w-full sm:w-auto">
            Start Free 7‑Day Trial
          </a>
          <a href="#how" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors w-full sm:w-auto">
            See How It Works
          </a>
        </div>
        <p className="mt-4 text-blue-300/70 text-sm">No setup required • Cancel anytime</p>
      </div>
    </section>
  )
}

export default Hero
