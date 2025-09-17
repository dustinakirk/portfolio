import { useState } from 'react'

const THEMES = {
  Calm: {
    bg: 'bg-slate-900',
    panel: 'bg-slate-800/60',
    accent: 'bg-blue-400',
    text: 'text-slate-100',
    supporting: 'text-slate-400'
  },
  Bold: {
    bg: 'bg-zinc-950',
    panel: 'bg-zinc-900/80',
    accent: 'bg-rose-500',
    text: 'text-zinc-50',
    supporting: 'text-zinc-400'
  },
  Fresh: {
    bg: 'bg-emerald-900',
    panel: 'bg-emerald-800/70',
    accent: 'bg-emerald-300',
    text: 'text-emerald-50',
    supporting: 'text-emerald-200'
  }
}

function DesignSystemShowcase() {
  const [activeTheme, setActiveTheme] = useState('Calm')
  const theme = THEMES[activeTheme]

  return (
    <main className={`min-h-screen ${theme.bg} ${theme.text} transition-colors duration-300`}> 
      <section className="mx-auto flex max-w-4xl flex-col gap-10 px-6 pb-20 pt-24">
        <header className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Design System</p>
          <h1 className="text-4xl font-semibold tracking-tight">Dustinkirk.com Component Library</h1>
          <p className={`max-w-2xl text-base ${theme.supporting}`}>
            This standalone playground demonstrates tokens, interactions, and component scaffolds that will inform the next iteration of the public site. Swap themes to preview different directions.
          </p>
        </header>

        <div className="flex flex-wrap items-center gap-3">
          {Object.keys(THEMES).map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => setActiveTheme(name)}
              className={`rounded-full border border-white/10 px-4 py-2 text-sm font-medium transition ${
                activeTheme === name ? 'bg-white/10' : 'hover:bg-white/5'
              }`}
            >
              {name} theme
            </button>
          ))}
        </div>

        <div className={`grid gap-6 rounded-2xl p-8 shadow-lg ring-1 ring-white/10 ${theme.panel}`}>
          <span className="text-xs uppercase tracking-[0.4em]">Components</span>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-xl bg-black/10 p-6">
              <h2 className="text-lg font-semibold">Navigation</h2>
              <p className={`mt-2 text-sm ${theme.supporting}`}>
                Placeholder top navigation structure with logo, global search, and quick actions.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className={`rounded-full px-3 py-1 text-xs ${theme.accent} text-black`}>Primary</span>
                <span className="rounded-full border border-white/20 px-3 py-1 text-xs">Secondary</span>
                <span className="rounded-full border border-white/20 px-3 py-1 text-xs">Utility</span>
              </div>
            </article>
            <article className="rounded-xl bg-black/10 p-6">
              <h2 className="text-lg font-semibold">Interactive Panel</h2>
              <p className={`mt-2 text-sm ${theme.supporting}`}>
                Tap the controls below to preview motion timing and state layering. Tokens are placeholders until specs land.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <span className={`h-12 w-12 rounded-full ${theme.accent}`} />
                <div className="flex-1">
                  <div className="h-3 w-full rounded-full bg-white/20" />
                  <div className="mt-2 h-2 w-1/2 rounded-full bg-white/10" />
                </div>
              </div>
            </article>
          </div>

          <footer className={`flex flex-col gap-2 text-sm ${theme.supporting}`}>
            <p>Coming next: token docs, accessibility checklist, and interactive prototypes.</p>
            <p>
              Track feedback in the dedicated design system board. This page will be replaced with live components once specs are approved.
            </p>
          </footer>
        </div>
      </section>
    </main>
  )
}

export default DesignSystemShowcase
