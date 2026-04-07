import { useState, useCallback } from 'react'

const STORAGE_KEY = 'sbrc_survey_state'

const DEFAULT_STATE = {
  user: {
    firstName: '',
    email: '',
    businessName: '',
    websiteUrl: '',
  },
  answers: {
    q1: null,
    q2: null,
    q3: null,
    q4: null,
    q5: null,
    q6: null,
    q7: null,
  },
  tags: [],
  currentStep: 'landing',
  gateCompleted: false,
}

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_STATE
    return JSON.parse(raw)
  } catch {
    return DEFAULT_STATE
  }
}

function saveToStorage(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // storage unavailable — proceed without persistence
  }
}

export function useSurveyState() {
  const [state, setState] = useState(() => loadFromStorage())

  const update = useCallback((updater) => {
    setState((prev) => {
      const next = typeof updater === 'function' ? updater(prev) : { ...prev, ...updater }
      saveToStorage(next)
      return next
    })
  }, [])

  const setStep = useCallback((step) => {
    update((prev) => ({ ...prev, currentStep: step }))
  }, [update])

  const setAnswer = useCallback((questionKey, value) => {
    update((prev) => ({
      ...prev,
      answers: { ...prev.answers, [questionKey]: value },
    }))
  }, [update])

  const addTag = useCallback((tag) => {
    update((prev) => {
      if (prev.tags.includes(tag)) return prev
      return { ...prev, tags: [...prev.tags, tag] }
    })
  }, [update])

  const addTags = useCallback((tags) => {
    update((prev) => {
      const newTags = tags.filter((t) => !prev.tags.includes(t))
      if (newTags.length === 0) return prev
      return { ...prev, tags: [...prev.tags, ...newTags] }
    })
  }, [update])

  const setUser = useCallback((userData) => {
    update((prev) => ({
      ...prev,
      user: { ...prev.user, ...userData },
    }))
  }, [update])

  const completeGate = useCallback((userData) => {
    update((prev) => {
      const nextTags = prev.tags.includes('Reward_Tier1')
        ? prev.tags
        : [...prev.tags, 'Reward_Tier1']

      const next = {
        ...prev,
        user: { ...prev.user, ...userData },
        gateCompleted: true,
        tags: nextTags,
        currentStep: 'q4',
      }

      // Minimum viable egress — BRIEF §10.6
      // Replace console.log with a webhook POST before going live.
      console.log('[EGRESS gate]', {
        user: next.user,
        tags: next.tags,
        answers: { q1: next.answers.q1, q2: next.answers.q2, q3: next.answers.q3 },
        submittedAt: new Date().toISOString(),
      })

      return next
    })
  }, [update])

  const reset = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY)
    setState(DEFAULT_STATE)
  }, [])

  return {
    state,
    setStep,
    setAnswer,
    addTag,
    addTags,
    setUser,
    completeGate,
    reset,
  }
}
