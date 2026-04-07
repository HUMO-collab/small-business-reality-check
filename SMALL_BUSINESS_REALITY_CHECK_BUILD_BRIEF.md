# Small Business Reality Check — Master Build Brief
> **For AI/Developer Use:** This document is the single source of truth for building the Survey Funnel application. Read every section before writing any code. Do not infer missing details — everything required is specified here.

---

## TABLE OF CONTENTS
1. [Project Intent](#1-project-intent)
2. [Architecture Overview](#2-architecture-overview)
3. [Landing Page](#3-landing-page)
4. [Survey Flow — Full Spec](#4-survey-flow--full-spec)
5. [Reward Milestone + Contact Gate](#5-reward-milestone--contact-gate)
6. [Result Pages — Full Copy](#6-result-pages--full-copy)
7. [Thank You Page](#7-thank-you-page)
8. [State & Data Model](#8-state--data-model)
9. [Tagging System](#9-tagging-system)
10. [What the Finished Product Looks Like](#10-what-the-finished-product-looks-like)
11. [What NOT to Do](#11-what-not-to-do)
12. [Validation Checklist](#12-validation-checklist)

---

## 1. Project Intent

This is **not a form**. It is a **conversion funnel** that uses behavioral psychology and a reward system to guide small business owners toward a product offer.

### Five Strategic Goals (Build Every Decision Around These)
1. Get attention quickly with an emotionally resonant opening question
2. Build trust through short, meaningful, branching questions that feel conversational
3. Withhold the contact gate until momentum is earned (after Q3 only — never earlier)
4. Let the user **experience** the power of incentives by going through the funnel itself
5. Bridge the right user into **Marketing Boost** as the logical next step

> **The funnel IS the product demo.** By the time the user reaches the result page, they have already experienced firsthand how incentives increase engagement. Q7 closes this loop explicitly.

---

## 2. Architecture Overview

```
Landing Page
    ↓
Q1 → Q2 (branched) → Q3 (branched)
    ↓
Reward Milestone + Contact Gate  ← REQUIRED STOP
    ↓
Q4 → Q5 → Q6 → Q7
    ↓
Result Page (3 variants based on Q7)
    ↓
Thank You Page
```

### Flow Rules
- One question per screen — no exceptions
- Progress indicator visible throughout
- Smooth animated transitions between steps
- Contact gate is a **hard stop** — user cannot proceed without completing it
- Result page is determined **solely** by the Q7 answer
- All state persists until the Thank You page

---

## 3. Landing Page

**Use this exact copy. Do not paraphrase or simplify.**

| Element | Copy |
|---|---|
| **Headline** | Small Business Reality Check |
| **Subheadline** | Answer a few quick questions about your business, unlock a reward for participating, and discover one of the easiest ways to create more response, referrals, and sales. |
| **Reward support line** | You'll receive a reward for participating, and an upgraded reward when you complete the full survey. |
| **Trust line** | No long forms. No pressure. Just a quick business check-in with a reward built in. |
| **CTA Button** | Start the Reality Check |

### Landing Page Behaviour
- CTA button initiates the survey (navigates to Q1)
- No other links, nav, or distractions on this page
- Mobile-first layout

---

## 4. Survey Flow — Full Spec

### QUESTION 1 — Entry Point
> No branching. Shown to everyone.

**Question text:** Is this economy quietly crushing your business growth?

**Options:**
- Yes
- No
- Not sure yet

**Tag assigned from Q1:**
- Yes → `State_Pressure`
- No → `State_Stable`
- Not sure yet → `State_Uncertain`

---

### QUESTION 2 — Conditional on Q1

#### Q2-A (if Q1 = Yes)
**Question text:** What has been the biggest drag on your business lately?

**Options:**
- Rising costs
- Fewer customers
- Customers spending less
- Marketing that is costing more
- Just general uncertainty

#### Q2-B (if Q1 = No)
**Question text:** What has been helping your business stay steady or grow?

**Options:**
- Loyal customers
- Word of mouth
- Better marketing
- Stronger demand
- Keeping a close eye on costs

#### Q2-C (if Q1 = Not sure yet)
**Question text:** What feels the most uncertain in your business right now?

**Options:**
- Sales consistency
- Customer demand
- Profit margins
- Marketing performance
- The economy overall

---

### QUESTION 3 — Conditional on Q1

#### Q3-A (if Q1 = Yes)
**Question text:** Does it feel like you're working harder just to stay in the same place?

**Options:**
- Yes
- No
- Sometimes

#### Q3-B (if Q1 = No)
**Question text:** Do you feel like your business has a reliable way to keep customers coming back?

**Options:**
- Yes
- No
- Somewhat

#### Q3-C (if Q1 = Not sure yet)
**Question text:** Do you feel like you have a clear system for growing your business right now?

**Options:**
- Yes
- No
- Somewhat

> After Q3 is answered → navigate to the **Reward Milestone + Contact Gate**. Do not go to Q4 yet.

---

### QUESTION 4 — Post Gate
**Question text:** If you could improve just one part of your business right now, what would move the needle most?

**Options:**
- More leads
- More repeat business
- More referrals
- Better customer engagement
- Better conversion from the leads I already get

**Tag assigned from Q4:**
- More leads → `Need_Leads`
- More repeat business → `Need_RepeatBusiness`
- More referrals → `Need_Referrals`
- Better customer engagement → `Need_Engagement`
- Better conversion → `Need_Conversion`

---

### QUESTION 5
**Question text:** Right now, are you giving people a strong enough reason to take action quickly?

**Options:**
- Yes
- No
- Not consistently

---

### QUESTION 6
**Question text:** If more customers responded because a reward was attached, would that help your business right now?

**Options:**
- Yes
- No
- I'm not sure

---

### QUESTION 7 — Final Question (determines result page)
**Question text:** Would you like to see one of the easiest ways to use rewards and incentives to create more engagement, leads, and sales in your business, just like this survey did?

> ⚠️ **The phrase "just like this survey did" is mandatory.** It closes the narrative loop promised on the landing page. Do not shorten or alter Q7.

**Options:**
- Yes
- No
- I'd like to learn more

**Tag assigned from Q7:**
- Yes → `Intent_Hot`
- I'd like to learn more → `Intent_Warm`
- No → `Intent_Cool`

---

## 5. Reward Milestone + Contact Gate

> **Trigger:** Appears immediately after Q3 is answered.
> **Gate rule:** User cannot proceed to Q4 without completing this form. All fields marked required must be validated.

**Use this exact copy:**

| Element | Copy |
|---|---|
| **Headline** | You've reached your first reward milestone |
| **Body** | Thank you. You've completed the first part of the Reality Check, and your first reward is now being reserved for you. |
| **Support copy** | Tell us who and where to send it, then complete the final questions to unlock your upgraded reward as well. |
| **Trust line** | We only ask for this now because you've earned your first reward. |
| **Section title (above form)** | Where should we send your reward? |
| **Intro line (above fields)** | Complete this step to reserve your first reward and continue toward your upgraded reward. |

### Form Fields

| Field | Required | Notes |
|---|---|---|
| First Name | Yes | — |
| Email | Yes | Validate email format |
| Business Name | Yes | — |
| Website URL | No | Show helper text: *"Optional, but helpful if you'd like more tailored follow-up ideas."* |

| Element | Copy |
|---|---|
| **Submit button** | Reserve My Reward and Continue |
| **Reassurance line (below button)** | Your information is only being used to deliver your reward and follow up on your survey results. |

### On Successful Submission
- Assign tag: `Reward_Tier1`
- Store all contact fields in state
- Navigate to Q4

---

## 6. Result Pages — Full Copy

> Displayed after Q7. Route based on Q7 answer only.

---

### RESULT A — Q7 = "Yes" (Intent_Hot)

| Element | Copy |
|---|---|
| **Headline** | Excellent. You've unlocked your upgraded reward. |
| **Body** | Because you completed the full Reality Check, you've now unlocked your upgraded reward: a free month of Marketing Boost. |
| **Support copy** | Marketing Boost helps businesses turn more attention into engagement, more engagement into action, and more action into sales by giving people a compelling reason to respond. |
| **Trust block** | No complicated setup. No guesswork. Just a simple way to put rewards and incentives to work in your business. |
| **Primary CTA** | Activate My Free Month of Marketing Boost |
| **Secondary line (below CTA)** | You just experienced how incentives improve engagement. Now you can see how to use that same principle in your own business. |

**Tags to assign:** `Reward_Tier2`, `MB_Trial_Offered`, `MB_Trial_Activated`

---

### RESULT B — Q7 = "I'd like to learn more" (Intent_Warm)

| Element | Copy |
|---|---|
| **Headline** | You've unlocked your upgraded reward |
| **Body** | You may not be ready to activate everything today, and that is completely fine. Your next step is to see how Marketing Boost works and why rewards and incentives can create more response in the right business. |
| **Primary CTA** | Show Me How It Works |
| **Secondary CTA** | Send Me My Reward and More Info |

**Tags to assign:** `Reward_Tier2`, `MB_Trial_Offered`

---

### RESULT C — Q7 = "No" (Intent_Cool)

| Element | Copy |
|---|---|
| **Headline** | Your reward is on the way |
| **Body** | Thank you for completing the Reality Check. Your first reward has been reserved, and we'll send it to you shortly. |
| **Support copy** | Even if now is not the right time, your answers help highlight where growth may be getting stuck. If your priorities change, we can always show you simple ways to create more response, referrals, and repeat business later on. |
| **CTA** | Finish and Send My Reward |

**Tags to assign:** `Reward_Tier2`

> All three result page CTAs navigate to the Thank You page on click.

---

## 7. Thank You Page

| Element | Copy |
|---|---|
| **Headline** | Thank you. Your response has been recorded. |
| **Body** | Your reward status has been updated based on your completion, and the next step is already on its way to your inbox. |
| **Support line** | Keep an eye on your email for your reward, next step, and a simple follow-up based on your answers. |

- No further navigation needed
- Display a summary confirmation (name, email) optionally
- This is the final screen

---

## 8. State & Data Model

Store the following object throughout the session. Persist to localStorage on each update.

```javascript
{
  // Contact info (populated at the gate)
  user: {
    firstName: "",
    email: "",
    businessName: "",
    websiteUrl: ""        // optional
  },

  // Survey answers
  answers: {
    q1: null,             // "Yes" | "No" | "Not sure yet"
    q2: null,             // selected option string
    q3: null,             // "Yes" | "No" | "Sometimes" | "Somewhat"
    q4: null,             // selected option string
    q5: null,             // "Yes" | "No" | "Not consistently"
    q6: null,             // "Yes" | "No" | "I'm not sure"
    q7: null              // "Yes" | "No" | "I'd like to learn more"
  },

  // Tags — built up as user progresses
  tags: [],               // string[]

  // Progress tracking
  currentStep: "landing", // "landing" | "q1"..."q7" | "gate" | "result" | "thankyou"
  gateCompleted: false
}
```

### Tag Assignment Logic

```javascript
// Q1
if (q1 === "Yes")            tags.push("State_Pressure")
if (q1 === "No")             tags.push("State_Stable")
if (q1 === "Not sure yet")   tags.push("State_Uncertain")

// Q4
if (q4 === "More leads")                                    tags.push("Need_Leads")
if (q4 === "More repeat business")                          tags.push("Need_RepeatBusiness")
if (q4 === "More referrals")                                tags.push("Need_Referrals")
if (q4 === "Better customer engagement")                    tags.push("Need_Engagement")
if (q4 === "Better conversion from the leads I already get") tags.push("Need_Conversion")

// Gate completion
tags.push("Reward_Tier1")

// Q7
if (q7 === "Yes")                    tags.push("Intent_Hot")
if (q7 === "I'd like to learn more") tags.push("Intent_Warm")
if (q7 === "No")                     tags.push("Intent_Cool")

// Result page
tags.push("Reward_Tier2")
if (q7 === "Yes")                    tags.push("MB_Trial_Offered", "MB_Trial_Activated")
if (q7 === "I'd like to learn more") tags.push("MB_Trial_Offered")
```

---

## 9. Tagging System

| Source | Answer | Tag |
|---|---|---|
| Q1 | Yes | `State_Pressure` |
| Q1 | No | `State_Stable` |
| Q1 | Not sure yet | `State_Uncertain` |
| Q4 | More leads | `Need_Leads` |
| Q4 | More repeat business | `Need_RepeatBusiness` |
| Q4 | More referrals | `Need_Referrals` |
| Q4 | Better customer engagement | `Need_Engagement` |
| Q4 | Better conversion | `Need_Conversion` |
| Q7 | Yes | `Intent_Hot` |
| Q7 | I'd like to learn more | `Intent_Warm` |
| Q7 | No | `Intent_Cool` |
| Gate submitted | — | `Reward_Tier1` |
| Any result page reached | — | `Reward_Tier2` |
| Result A or B | — | `MB_Trial_Offered` |
| Result A only | — | `MB_Trial_Activated` |

---

## 10. What the Finished Product Looks Like

### Screen-by-Screen UX Expectation

**Landing Page**
- Full-screen centered layout
- Headline prominent, subheadline below, trust line small
- Single CTA button — nothing else clickable
- Clean, minimal, no nav

**Question Screens (Q1–Q7)**
- Progress bar or step indicator at top (e.g. "Step 2 of 10")
- Question text large and centered
- Answer options displayed as large tap/click buttons (not a dropdown)
- Selected option highlights visually before advancing
- Auto-advance on selection OR require a "Next" button — either is acceptable
- Smooth slide or fade transition between screens

**Reward Milestone Screen**
- Feels celebratory but professional — this is a milestone moment
- Headline bold and prominent
- Body copy, trust line, then form
- Form fields clearly labeled
- Reassurance text beneath the CTA button
- Validation feedback on required fields before proceeding

**Result Pages**
- Distinct visual treatment per result (especially Result A — upgraded reward)
- Result A should feel premium/elevated
- Result B should feel helpful and informational
- Result C should feel warm and appreciative — no pressure
- CTAs prominent

**Thank You Page**
- Simple confirmation
- No further actions required

### Tone
Warm, direct, low-pressure, reward-forward. Never salesy. Never clinical.

---

## 11. What NOT to Do

### Logic & Flow
- ❌ Do not show the contact gate before Q3 is answered
- ❌ Do not allow the user to skip the contact gate
- ❌ Do not use Q4–Q6 to determine the result page — only Q7 does this
- ❌ Do not show a generic result page — all three variants must be built with their exact copy
- ❌ Do not branch Q2 or Q3 based on anything other than Q1
- ❌ Do not alter the wording of Q7 — especially do not remove "just like this survey did"

### Copy
- ❌ Do not paraphrase or simplify any of the copy in this document
- ❌ Do not invent new copy for result pages, gate, or landing page
- ❌ Do not omit the reassurance line below the gate CTA
- ❌ Do not omit the secondary CTA on Result B ("Send Me My Reward and More Info")
- ❌ Do not omit the secondary line on Result A (below the primary CTA)

### UI/UX
- ❌ Do not show multiple questions on one screen
- ❌ Do not use dropdown selects for question answers — use buttons
- ❌ Do not add navigation that lets the user jump between questions freely
- ❌ Do not add a back button that lets the user change answers after the gate (gate is a hard commit)
- ❌ Do not clutter the UI with explanations, tooltips, or extra text not specified here

### Technical
- ❌ Do not build authentication
- ❌ Do not build a payment system
- ❌ Do not build an admin dashboard
- ❌ Do not call an external API for the CTAs — stub them (alert or console.log is fine for MVP)
- ❌ Do not use AI/LLM features inside the app itself

---

## 12. Validation Checklist

Use this checklist to verify the build is complete and correct before marking it done.

### 🔀 Conditional Logic
- [ ] Q1 = "Yes" → Q2-A is shown (drag/cost questions)
- [ ] Q1 = "No" → Q2-B is shown (stability questions)
- [ ] Q1 = "Not sure yet" → Q2-C is shown (uncertainty questions)
- [ ] Q1 = "Yes" → Q3-A is shown ("working harder" question)
- [ ] Q1 = "No" → Q3-B is shown ("reliable way to keep customers" question)
- [ ] Q1 = "Not sure yet" → Q3-C is shown ("clear system" question)
- [ ] After Q3, contact gate appears before Q4
- [ ] Q4–Q7 appear in order after gate submission
- [ ] Q7 = "Yes" → Result A
- [ ] Q7 = "I'd like to learn more" → Result B
- [ ] Q7 = "No" → Result C
- [ ] All result page CTAs go to the Thank You page

### 🏷️ Tagging
- [ ] `State_Pressure` assigned when Q1 = "Yes"
- [ ] `State_Stable` assigned when Q1 = "No"
- [ ] `State_Uncertain` assigned when Q1 = "Not sure yet"
- [ ] Correct `Need_*` tag assigned based on Q4 answer
- [ ] `Reward_Tier1` assigned on gate form submission
- [ ] Correct `Intent_*` tag assigned based on Q7 answer
- [ ] `Reward_Tier2` assigned on any result page load
- [ ] `MB_Trial_Offered` assigned for Result A and B
- [ ] `MB_Trial_Activated` assigned for Result A only

### 📋 Copy Accuracy
- [ ] Landing page uses all four copy elements (subheadline, reward line, trust line, CTA)
- [ ] Gate headline is exactly: "You've reached your first reward milestone"
- [ ] Gate trust line is exactly: "We only ask for this now because you've earned your first reward."
- [ ] Gate CTA is exactly: "Reserve My Reward and Continue"
- [ ] Reassurance line appears below gate CTA
- [ ] Q7 includes the phrase "just like this survey did"
- [ ] Result A primary CTA is: "Activate My Free Month of Marketing Boost"
- [ ] Result A secondary line appears below the CTA
- [ ] Result B has both a primary and secondary CTA
- [ ] Result C CTA is: "Finish and Send My Reward"
- [ ] Thank You page uses all three copy elements

### 🧾 Form Validation
- [ ] First Name: required, blocks submission if empty
- [ ] Email: required, validates email format, blocks submission if invalid
- [ ] Business Name: required, blocks submission if empty
- [ ] Website URL: optional, no blocking if empty
- [ ] Error messages are visible and clear

### 💾 State Management
- [ ] All Q1–Q7 answers stored in state
- [ ] User contact fields stored in state after gate submission
- [ ] Tags array is populated correctly throughout
- [ ] State survives navigation between steps (no data loss on back/forward)
- [ ] localStorage updated on each state change (for persistence on refresh)

### 📱 Responsive Design
- [ ] All screens render correctly on mobile (≥320px width)
- [ ] All screens render correctly on tablet (768px)
- [ ] All screens render correctly on desktop (1280px+)
- [ ] Touch targets (buttons) are at minimum 44px height on mobile
- [ ] No horizontal scroll on any screen size

### 🎨 UX & Transitions
- [ ] Transition animation between question screens (slide or fade)
- [ ] Progress indicator updates on each step
- [ ] Selected answer is visually highlighted before advancing
- [ ] Gate milestone screen feels distinct from question screens (celebratory moment)
- [ ] Result A screen feels elevated/premium compared to B and C

### 🔧 Technical Integrity
- [ ] App runs locally with a single command (e.g. `npm start`)
- [ ] No console errors on any screen
- [ ] No broken UI states when navigating all three Q7 paths end-to-end
- [ ] Build completes without errors (`npm run build`)

---

## Quick Reference: Complete Step Sequence

```
1.  Landing Page
2.  Q1
3.  Q2 (A, B, or C — based on Q1)
4.  Q3 (A, B, or C — based on Q1)
5.  Reward Milestone + Contact Gate
6.  Q4
7.  Q5
8.  Q6
9.  Q7
10. Result Page (A, B, or C — based on Q7)
11. Thank You Page
```

**Total screens: 11**
**Branching points: Q1 (affects Q2 + Q3), Q7 (affects Result Page)**
**Hard gate: Step 5**

---

*This document is the master build brief. All copy, logic, tags, and validation criteria are final. Do not deviate from the specifications above.*
