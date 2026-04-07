// ResultPage.jsx
// Three variants — A (Intent_Hot), B (Intent_Warm), C (Intent_Cool)
// Copy source: BRIEF.md section 6. Do not alter copy.
// Visual spec: DESIGN_SPEC.md §5 (A: dark/amber/glass), §6 (B: clean/white), §7 (C: soft emerald)
// Tags assigned on mount via addTags prop.
// All CTAs call onContinue() → navigates to Thank You page.

import { useEffect, useRef } from 'react'

export default function ResultPage({ variant, addTags, onContinue }) {
  const tagsAssigned = useRef(false)

  useEffect(() => {
    if (tagsAssigned.current) return
    tagsAssigned.current = true
    const tags = ['Reward_Tier2']
    if (variant === 'A') tags.push('MB_Trial_Offered', 'MB_Trial_Activated')
    if (variant === 'B') tags.push('MB_Trial_Offered')
    addTags(tags)
  }, [variant, addTags])

  if (variant === 'A') return <ResultA onContinue={onContinue} />
  if (variant === 'B') return <ResultB onContinue={onContinue} />
  return <ResultC onContinue={onContinue} />
}

// ─── RESULT A — Intent_Hot ────────────────────────────────────────────────────
// DESIGN_SPEC §5: slate-950 bg + radial glow, glassmorphism card, amber CTA
function ResultA({ onContinue }) {
  return (
    <div className="min-h-screen bg-slate-950 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-500/30 via-slate-950 to-slate-950 flex flex-col items-center justify-start px-5 pt-12 pb-16">
      <div className="w-full max-w-lg animate-fadeIn">

        {/* Premium badge — glassmorphism */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 text-indigo-50 text-sm font-bold px-6 py-3 rounded-full">
            <span className="text-amber-300 text-lg">★</span>
            Upgraded Reward Unlocked
          </div>
        </div>

        {/* Glassmorphism content card */}
        <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 sm:p-10 backdrop-blur-md shadow-2xl">
          {/* Headline */}
          <h2 className="text-5xl sm:text-7xl font-black tracking-tighter text-white text-center leading-tight mb-6">
            Excellent. You've unlocked your upgraded reward.
          </h2>

          {/* Body */}
          <p className="text-indigo-100/80 text-lg text-center leading-relaxed mb-4">
            Because you completed the full Reality Check, you've now unlocked your upgraded reward: a free month of Marketing Boost.
          </p>

          {/* Support copy */}
          <p className="text-indigo-200/70 text-base text-center leading-relaxed mb-4">
            Marketing Boost helps businesses turn more attention into engagement, more engagement into action, and more action into sales by giving people a compelling reason to respond.
          </p>

          {/* Trust block */}
          <p className="text-white/50 text-sm text-center leading-relaxed mb-10">
            No complicated setup. No guesswork. Just a simple way to put rewards and incentives to work in your business.
          </p>

          {/* Primary CTA — amber/gold (DESIGN_SPEC §5) */}
          <button
            onClick={() => {
              console.log('[CTA] Activate My Free Month of Marketing Boost')
              onContinue()
            }}
            className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-lg px-8 py-5 rounded-2xl shadow-2xl shadow-amber-400/20 transition-all duration-300 min-h-[56px] mb-5"
          >
            Activate My Free Month of Marketing Boost
          </button>

          {/* Secondary line — required by BRIEF */}
          <p className="text-indigo-200/60 text-sm text-center leading-relaxed">
            You just experienced how incentives improve engagement. Now you can see how to use that same principle in your own business.
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── RESULT B — Intent_Warm ───────────────────────────────────────────────────
// DESIGN_SPEC §6: clean white, info hierarchy, soft indigo primary, bordered secondary
function ResultB({ onContinue }) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start px-5 pt-12 pb-16">
      <div className="w-full max-w-lg animate-fadeIn">

        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium px-5 py-2 rounded-2xl">
            <span className="text-base">🎁</span>
            Upgraded Reward Unlocked
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-slate-900 text-center leading-tight mb-5">
          You've unlocked your upgraded reward
        </h2>

        {/* Body */}
        <p className="text-slate-600 text-lg text-center leading-relaxed mb-10">
          You may not be ready to activate everything today, and that is completely fine. Your next step is to see how Marketing Boost works and why rewards and incentives can create more response in the right business.
        </p>

        {/* Primary CTA */}
        <button
          onClick={() => {
            console.log('[CTA] Show Me How It Works')
            onContinue()
          }}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl shadow-indigo-600/20 transition-all duration-300 min-h-[56px] mb-4"
        >
          Show Me How It Works
        </button>

        {/* Secondary CTA — required by BRIEF */}
        <button
          onClick={() => {
            console.log('[CTA] Send Me My Reward and More Info')
            onContinue()
          }}
          className="w-full bg-white border-2 border-slate-200 hover:border-indigo-300 text-slate-700 font-semibold text-base px-8 py-4 rounded-2xl transition-all duration-300 min-h-[56px]"
        >
          Send Me My Reward and More Info
        </button>
      </div>
    </div>
  )
}

// ─── RESULT C — Intent_Cool ───────────────────────────────────────────────────
// DESIGN_SPEC §7: emerald-50/20 tint, soft slate text, no urgency, maximum whitespace
function ResultC({ onContinue }) {
  return (
    <div className="min-h-screen bg-emerald-50/20 flex flex-col items-center justify-start px-5 pt-12 pb-16">
      <div className="w-full max-w-lg animate-fadeIn">

        {/* Icon — ringed, soft (DESIGN_SPEC §7) */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center justify-center w-16 h-16 bg-white ring-8 ring-white/50 rounded-3xl shadow-sm">
            <span className="text-3xl">📬</span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-slate-800 text-center leading-tight mb-5">
          Your reward is on the way
        </h2>

        {/* Body */}
        <p className="text-slate-500 text-lg text-center leading-relaxed mb-4">
          Thank you for completing the Reality Check. Your first reward has been reserved, and we'll send it to you shortly.
        </p>

        {/* Support copy */}
        <p className="text-slate-400 text-base text-center leading-relaxed mb-10">
          Even if now is not the right time, your answers help highlight where growth may be getting stuck. If your priorities change, we can always show you simple ways to create more response, referrals, and repeat business later on.
        </p>

        {/* CTA — slate-900 (DESIGN_SPEC §7) */}
        <button
          onClick={() => {
            console.log('[CTA] Finish and Send My Reward')
            onContinue()
          }}
          className="w-full bg-slate-900 hover:bg-black text-white font-semibold text-base sm:text-lg px-8 py-5 rounded-2xl shadow-lg transition-all duration-300 min-h-[56px]"
        >
          Finish and Send My Reward
        </button>
      </div>
    </div>
  )
}
