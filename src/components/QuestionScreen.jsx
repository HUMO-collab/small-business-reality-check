// QuestionScreen.jsx
// Reusable component for Q1–Q7.
// Props:
//   question              — { key, text, options[] }
//   stepKey               — "q1"..."q7" (for progress bar + visual variant)
//   onAnswer              — callback(selectedOption: string)
//   onBack                — optional — shows back chevron (Q1–Q3 only per BRIEF §10.4)
//   requireExplicitAdvance — when true (Q7), show Next button after selection instead of auto-advancing

import { useState } from 'react'
import { STEP_PROGRESS } from '../data/questions'

const POST_GATE_STEPS = new Set(['q4', 'q5', 'q6', 'q7'])

export default function QuestionScreen({ question, stepKey, onAnswer, onBack, requireExplicitAdvance }) {
  const [selected, setSelected] = useState(null)
  const [advancing, setAdvancing] = useState(false)
  const progress = STEP_PROGRESS[stepKey] ?? { current: 1, total: 10 }

  const isPostGate = POST_GATE_STEPS.has(stepKey)
  const isQ7 = stepKey === 'q7'

  function handleSelect(option) {
    if (advancing) return
    setSelected(option)
    if (!requireExplicitAdvance) {
      setAdvancing(true)
      setTimeout(() => { onAnswer(option) }, 350)
    }
  }

  function handleNext() {
    if (!selected || advancing) return
    setAdvancing(true)
    setTimeout(() => { onAnswer(selected) }, 500)
  }

  const progressPct = Math.round((progress.current / progress.total) * 100)

  const bgClass = isPostGate ? 'bg-indigo-50' : 'bg-stone-50'
  const progressFillClass = isPostGate
    ? 'bg-gradient-to-r from-indigo-600 to-violet-500'
    : 'bg-indigo-600'

  return (
    <div className={`min-h-screen ${bgClass} flex flex-col`}>

      {/* Progress bar */}
      <div className="w-full bg-stone-200 h-1.5 shrink-0">
        <div
          className={`${progressFillClass} h-1.5 transition-all duration-500 ease-out`}
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* Top bar */}
      <div className="shrink-0 flex items-center justify-between px-5 pt-4 pb-2 w-full max-w-lg mx-auto">
        {onBack ? (
          <button
            onClick={onBack}
            className="flex items-center gap-1 text-stone-400 hover:text-slate-700 text-sm font-medium transition-colors min-h-[44px] pr-4"
            aria-label="Go back"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        ) : (
          <div />
        )}

        <span className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em]">
          Step {progress.current} of {progress.total}
        </span>

        <div className="w-12" />
      </div>

      {/* Main content — justify-start so tall option lists don't clip above scroll origin */}
      <div className="flex-1 flex flex-col items-center justify-start px-5 pt-4 pb-10 animate-fadeIn">
        <div className="w-full max-w-lg">

          {/* Question text */}
          <div className={[
            'mb-8',
            isQ7 ? 'ring-1 ring-slate-200 rounded-2xl p-5' : '',
          ].join(' ')}>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 text-center leading-snug">
              {question.text}
            </h2>
          </div>

          {/* Answer options */}
          <div className="flex flex-col gap-3">
            {question.options.map((option) => {
              const isSelected = selected === option
              return (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  disabled={advancing && !isSelected}
                  className={[
                    'w-full text-left px-5 py-4 rounded-2xl border-2 text-base font-semibold',
                    'transition-all duration-300 ease-out min-h-[56px] shadow-sm',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400',
                    isSelected
                      ? 'border-indigo-600 bg-indigo-600 text-white shadow-md'
                      : 'bg-white border-stone-200 text-slate-700 hover:border-indigo-400 hover:bg-indigo-50 active:scale-[0.98]',
                    advancing && !isSelected ? 'opacity-40' : '',
                  ].join(' ')}
                >
                  <span className="flex items-center justify-between gap-3">
                    <span>{option}</span>
                    {isSelected && (
                      <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Q7 Next button */}
          {requireExplicitAdvance && selected && (
            <div className="mt-6 animate-fadeIn">
              <button
                onClick={handleNext}
                disabled={advancing}
                className="w-full bg-slate-950 hover:bg-black disabled:opacity-60 text-white font-bold text-base px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg min-h-[56px]"
              >
                {advancing ? 'Continuing…' : 'Next'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
