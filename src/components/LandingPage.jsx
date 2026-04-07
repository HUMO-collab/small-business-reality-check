// LandingPage.jsx
// Copy source: BRIEF.md section 3. Do not alter copy.
// Visual spec: DESIGN_SPEC.md §1 — "premium consultant" feel, stone-50 base.

export default function LandingPage({ onStart }) {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center px-5 py-24 sm:py-32">
      <div className="w-full max-w-lg animate-fadeIn">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 bg-white border border-stone-200 text-stone-700 text-sm font-medium px-5 py-2 rounded-full shadow-sm">
            <span className="text-base">🎁</span>
            Reward included for participants
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl font-black tracking-tighter text-center text-slate-900 leading-tight mb-5">
          Small Business Reality Check
        </h1>

        {/* Subheadline */}
        <p className="text-lg text-center text-slate-600/90 leading-relaxed mb-6 max-w-md mx-auto">
          Answer a few quick questions about your business, unlock a reward for participating, and discover one of the easiest ways to create more response, referrals, and sales.
        </p>

        {/* Reward support line */}
        <p className="text-center text-indigo-700 font-medium text-base mb-10">
          You'll receive a reward for participating, and an upgraded reward when you complete the full survey.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={onStart}
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold text-xl px-12 py-5 rounded-2xl shadow-xl shadow-indigo-600/20 transition-all duration-300 ease-out hover:scale-[1.03] active:scale-100 min-h-[56px]"
          >
            Start the Reality Check
          </button>
        </div>

        {/* Trust line */}
        <p className="text-center text-stone-400 text-sm">
          No long forms. No pressure. Just a quick business check-in with a reward built in.
        </p>
      </div>
    </div>
  )
}
