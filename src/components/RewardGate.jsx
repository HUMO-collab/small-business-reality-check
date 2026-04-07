// RewardGate.jsx
// Hard stop between Q3 and Q4. User cannot proceed without completing this form.
// Copy source: BRIEF.md section 5. Do not alter copy.
// Visual spec: DESIGN_SPEC.md §3 — floating deep-shadow card, ring icon, stone inputs.

import { useState } from 'react'
import { STEP_PROGRESS } from '../data/questions'

const progress = STEP_PROGRESS['gate']

export default function RewardGate({ onComplete }) {
  const [fields, setFields] = useState({
    firstName: '',
    email: '',
    businessName: '',
    websiteUrl: '',
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitting, setSubmitting] = useState(false)

  // Human error messages per BRIEF §10.4
  function validateField(name, value) {
    if (name === 'firstName' && !value.trim()) {
      return "We need your first name to send your reward."
    }
    if (name === 'email') {
      if (!value.trim()) return "We need your email address to send your reward."
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return "That doesn't look like a valid email address — please double-check."
    }
    if (name === 'businessName' && !value.trim()) {
      return "Please add your business name so we know who to send this to."
    }
    return null
  }

  function validate() {
    const e = {}
    ;['firstName', 'email', 'businessName'].forEach((name) => {
      const msg = validateField(name, fields[name])
      if (msg) e[name] = msg
    })
    return e
  }

  function handleBlur(e) {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const err = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: err || undefined }))
  }

  function handleChange(e) {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    if (touched[name]) {
      const err = validateField(name, value)
      setErrors((prev) => ({ ...prev, [name]: err || undefined }))
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      setTouched({ firstName: true, email: true, businessName: true })
      return
    }
    setSubmitting(true)
    onComplete({
      firstName: fields.firstName.trim(),
      email: fields.email.trim(),
      businessName: fields.businessName.trim(),
      websiteUrl: fields.websiteUrl.trim(),
    })
  }

  const progressPct = Math.round((progress.current / progress.total) * 100)

  // Shared input class builder
  const inputClass = (name) => [
    'w-full border rounded-xl px-4 py-4 text-base text-slate-900 placeholder-stone-400',
    'focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all',
    errors[name]
      ? 'border-red-400 bg-red-50'
      : 'border-stone-200 bg-stone-50',
  ].join(' ')

  return (
    <div className="min-h-screen bg-indigo-50/50 flex flex-col">
      {/* Progress bar */}
      <div className="w-full bg-stone-200 h-1.5">
        <div
          className="bg-indigo-600 h-1.5 transition-all duration-500 ease-out"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* Step counter */}
      <div className="text-center pt-5 pb-1">
        <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.2em]">
          Step {progress.current} of {progress.total}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-start px-5 py-8 animate-fadeIn">
        <div className="w-full max-w-lg">

          {/* Milestone icon — ring treatment (DESIGN_SPEC §3) */}
          <div className="flex justify-center mb-10">
            <div className="flex items-center justify-center w-16 h-16 bg-white ring-8 ring-indigo-100/50 rounded-full shadow-lg scale-125">
              <span className="text-3xl">🎁</span>
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl font-black text-center text-slate-950 leading-[1.1] mb-4">
            You've reached your first reward milestone
          </h2>

          {/* Body */}
          <p className="text-center text-slate-600 text-base leading-relaxed mb-3">
            Thank you. You've completed the first part of the Reality Check, and your first reward is now being reserved for you.
          </p>

          {/* Support copy */}
          <p className="text-center text-slate-600 text-base leading-relaxed mb-4">
            Tell us who and where to send it, then complete the final questions to unlock your upgraded reward as well.
          </p>

          {/* Trust line */}
          <p className="text-center text-indigo-700 font-medium text-sm mb-8">
            We only ask for this now because you've earned your first reward.
          </p>

          {/* Form card — deep shadow, ultra-rounded (DESIGN_SPEC §3) */}
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-indigo-900/5 p-6 sm:p-10 border border-indigo-50/50">
            {/* Section title */}
            <h3 className="text-xl font-semibold text-slate-900 mb-1">
              Where should we send your reward?
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              Complete this step to reserve your first reward and continue toward your upgraded reward.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              {/* First Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="firstName">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  value={fields.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClass('firstName')}
                  placeholder="Jane"
                />
                {errors.firstName && (
                  <p className="mt-1.5 text-sm text-red-600">{errors.firstName}</p>
                )}
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={fields.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClass('email')}
                  placeholder="jane@example.com"
                />
                {errors.email && (
                  <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Business Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="businessName">
                  Business Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="businessName"
                  name="businessName"
                  type="text"
                  autoComplete="organization"
                  value={fields.businessName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClass('businessName')}
                  placeholder="Jane's Bakery"
                />
                {errors.businessName && (
                  <p className="mt-1.5 text-sm text-red-600">{errors.businessName}</p>
                )}
              </div>

              {/* Website URL — optional */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="websiteUrl">
                  Website URL
                  <span className="ml-1 text-stone-400 font-normal">(optional)</span>
                </label>
                <input
                  id="websiteUrl"
                  name="websiteUrl"
                  type="url"
                  autoComplete="url"
                  value={fields.websiteUrl}
                  onChange={handleChange}
                  className="w-full border border-stone-200 bg-stone-50 rounded-xl px-4 py-4 text-base text-slate-900 placeholder-stone-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all"
                  placeholder="https://yourbusiness.com"
                />
                <p className="mt-1.5 text-xs text-stone-400 italic">
                  Optional, but helpful if you'd like more tailored follow-up ideas.
                </p>
              </div>

              {/* Submit — CTA stays active per BRIEF §10.4 */}
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base px-6 py-5 rounded-2xl shadow-2xl shadow-indigo-600/30 transition-all duration-300 hover:scale-[1.02] min-h-[56px]"
              >
                {submitting ? 'Reserving...' : 'Reserve My Reward and Continue'}
              </button>

              {/* Reassurance line — required by BRIEF */}
              <p className="text-center text-stone-400 text-xs mt-4 leading-relaxed">
                Your information is only being used to deliver your reward and follow up on your survey results.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
