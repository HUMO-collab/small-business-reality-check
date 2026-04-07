// ThankYouPage.jsx
// Final screen. No further navigation required.
// Copy source: BRIEF.md section 7. Do not alter copy.
// Visual spec: DESIGN_SPEC.md §8 — stone-50 return, ringed checkmark, clean card.
// Emits full egress payload on mount (BRIEF §10.6).

import { useEffect, useRef } from 'react'

export default function ThankYouPage({ user, surveyState }) {
  const egressFired = useRef(false)

  useEffect(() => {
    if (egressFired.current) return
    egressFired.current = true
    console.log('[EGRESS thankyou]', {
      user: surveyState?.user ?? user,
      answers: surveyState?.answers ?? {},
      tags: surveyState?.tags ?? [],
      completedAt: new Date().toISOString(),
    })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center px-5 py-16">
      <div className="w-full max-w-lg text-center animate-fadeIn">

        {/* Checkmark icon — ringed (DESIGN_SPEC §8) */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center justify-center w-20 h-20 bg-white ring-[12px] ring-emerald-50/80 rounded-full shadow-sm scale-125">
            <svg
              className="w-10 h-10 text-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-5 mt-6">
          Thank you. Your response has been recorded.
        </h2>

        {/* Body */}
        <p className="text-slate-600 text-lg leading-relaxed mb-4">
          Your reward status has been updated based on your completion, and the next step is already on its way to your inbox.
        </p>

        {/* Support line */}
        <p className="text-slate-500 text-base leading-relaxed mb-10">
          Keep an eye on your email for your reward, next step, and a simple follow-up based on your answers.
        </p>

        {/* Confirmation card — DESIGN_SPEC §8 */}
        {(user?.firstName || user?.email) && (
          <div className="bg-white border border-stone-200/60 rounded-[2rem] p-10 max-w-sm mx-auto shadow-sm text-left">
            <p className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] mb-4">
              Confirmation
            </p>
            {user.firstName && (
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-slate-400">Name</span>
                <span className="text-sm font-semibold text-slate-800">{user.firstName}</span>
              </div>
            )}
            {user.email && (
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-400">Email</span>
                <span className="text-sm font-semibold text-slate-800">{user.email}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
