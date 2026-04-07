# CLAUDE.md — Small Business Reality Check

> Auto-loaded by Claude Code at session start.
> Read this fully before touching any file.

---

## 1. Project Summary

**App:** Small Business Reality Check — a survey conversion funnel
**Purpose:** Guide small business owners through a branching survey, gate contact info behind a reward milestone, and route them to one of three result pages based on Q7.
**Stack:** Vite + React 18 + Tailwind CSS v3
**Dev command:** `npm run dev` (from `proper-operating-structure/`)

---

## 2. Architecture

```
proper-operating-structure/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── CLAUDE.md               ← this file
├── BRIEF.md                ← SMALL_BUSINESS_REALITY_CHECK_BUILD_BRIEF.md (source of truth)
├── PROGRESS.md
├── VALIDATION.md
├── OPERATION_GUIDE.md
└── src/
    ├── main.jsx
    ├── index.css
    ├── App.jsx              ← step controller (switch on currentStep)
    ├── data/
    │   └── questions.js     ← all question text, options, tag maps, STEP_PROGRESS
    ├── hooks/
    │   └── useSurveyState.js ← full state, localStorage persistence
    └── components/
        ├── LandingPage.jsx
        ├── QuestionScreen.jsx  ← reusable for Q1–Q7
        ├── RewardGate.jsx
        ├── ResultPage.jsx      ← renders variant A, B, or C
        └── ThankYouPage.jsx
```

---

## 3. State Shape

```javascript
{
  user: { firstName, email, businessName, websiteUrl },
  answers: { q1, q2, q3, q4, q5, q6, q7 },  // null until answered
  tags: [],          // string[] — built up as user progresses
  currentStep: 'landing',  // see step flow below
  gateCompleted: false
}
```

**Persisted to:** `localStorage` key `sbrc_survey_state`

---

## 4. Step Flow

```
landing → q1 → q2 → q3 → gate → q4 → q5 → q6 → q7 → result → thankyou
```

- Q2 and Q3 variants are determined by Q1 answer (see `questions.js`)
- Result variant (A/B/C) is determined solely by Q7 answer
- Gate is a hard stop — `completeGate()` in useSurveyState sets step to q4

---

## 5. Tag Assignment

| Trigger | Tag |
|---|---|
| Q1 = Yes | State_Pressure |
| Q1 = No | State_Stable |
| Q1 = Not sure yet | State_Uncertain |
| Q4 = More leads | Need_Leads |
| Q4 = More repeat business | Need_RepeatBusiness |
| Q4 = More referrals | Need_Referrals |
| Q4 = Better customer engagement | Need_Engagement |
| Q4 = Better conversion... | Need_Conversion |
| Gate submitted | Reward_Tier1 |
| Q7 = Yes | Intent_Hot |
| Q7 = I'd like to learn more | Intent_Warm |
| Q7 = No | Intent_Cool |
| Any result page | Reward_Tier2 |
| Result A or B | MB_Trial_Offered |
| Result A only | MB_Trial_Activated |

---

## 6. Critical Rules

- Never alter Q7 text — must include "just like this survey did"
- Never show more than one question per screen
- Never use dropdowns — always buttons (QuestionScreen uses button cards)
- Never allow gate bypass — gateCompleted gate in App.jsx
- Never call external APIs — all CTAs use console.log() stub for MVP
- Never add auth, payments, or dashboard features
- Copy source of truth: `SMALL_BUSINESS_REALITY_CHECK_BUILD_BRIEF.md`

---

## 7. Progress Log

| Session | Date | Task | Status |
|---|---|---|---|
| All sessions (1–14) | 2026-04-07 | Full app built in one pass | Complete |

---

## 8. Known Issues

```
None at initial build.
```
