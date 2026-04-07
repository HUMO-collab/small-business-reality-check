# Implementation Plan: Visual Improvements

This plan outlines the steps for a developer to apply the `DESIGN_SPEC.md` to the "Small Business Reality Check" React + Tailwind CSS funnel.

> [!IMPORTANT]
> **Constraints Reminder:**
> - Tailwind CSS v3 utility classes only.
> - Do NOT change any text content.
> - Do NOT change any business logic.
> - All changes must be mobile-first (320px minimum width).

---

## Phase 1: Landing Page (The Entry Moment)
**Goal:** Shift the tone from "form" to "premium consultation."

1. **Update `LandingPage.jsx` container:**
   - Change `bg-white` to `bg-stone-50`.
   - Update `py-16` to `py-24 sm:py-32`.
2. **Refine Typography:**
   - Update the `h1` to include `text-slate-900 font-black tracking-tighter`.
   - Update the `p` tags to use `text-slate-600/90`.
3. **Upgrade CTA:**
   - Change the button padding and add a soft shadow: `px-12 py-5 rounded-2xl shadow-xl shadow-indigo-600/20`.
   - Add hover effects: `hover:scale-[1.03] active:scale-100 transition-all`.
4. **Detailing:**
   - Update the reward badge (`span`) with `bg-white border-stone-200 text-stone-700 shadow-sm`.

---

## Phase 2: Core Question Screens (Q1–Q3)
**Goal:** Create a focused, neutral "conversational" starting point.

1. **Modify `QuestionScreen.jsx` background and layout:**
   - Update the main container to `bg-stone-50`.
   - Change the step indicator (`Step X of 10`) to `text-stone-400 font-bold tracking-[0.2em] uppercase`.
2. **Style Selection Buttons:**
   - Update the base options button: `bg-white border-2 border-stone-200/80 text-slate-700 font-semibold text-lg py-5 px-6 rounded-2xl shadow-sm hover:border-indigo-400 hover:bg-indigo-50/50`.
3. **Progress Bar Update:**
   - Set the track background to `bg-stone-200` and ensure the fill stays `bg-indigo-600`.

---

## Phase 3: The Reward Milestone (Gate)
**Goal:** Transition the user into a high-trust, celebratory moment.

1. **Background and Tone Shift:**
   - Update `RewardGate.jsx` main container to use `bg-indigo-50/50`.
2. **Milestone Container:**
   - Wrap the form in a deep-shadow card: `bg-white rounded-[2.5rem] shadow-2xl shadow-indigo-900/5 p-10 sm:p-14 border border-indigo-50/50`.
3. **Icon Upgrade:**
   - Update the gift icon outer container with `bg-white ring-8 ring-indigo-100/50 shadow-lg scale-125 mb-8`.
4. **Form Inputs:**
   - Style all fields with `bg-stone-50 border-stone-200 focus:ring-4 focus:ring-indigo-500/10 rounded-xl`.

---

## Phase 4: Forward Momentum (Q4–Q7)
**Goal:** Use visual transitions to maintain engagement.

1. **Background Transition:**
   - For `stepKey` Q4–Q7, shift from `stone-50` to `indigo-50/30`.
2. **Progress Bar Enhancement:**
   - Update the fill color to a gradient: `bg-gradient-to-r from-indigo-600 to-violet-500`.
3. **Final Question Treatment (Q7):**
   - Apply a subtler `ring-1 ring-slate-200/50` around the question block.
   - For the Next button, use `bg-slate-950` to signal finality.

---

## Phase 5: Results & Closure
**Goal:** Deliver value through distinct, variant-specific themes.

1. **Result A (Premium Upgrade):**
   - Implement `bg-slate-950` with the radial glow pattern.
   - Use `glassmorphism` (`bg-white/5 backdrop-blur-xl`) for the featured content card.
   - Use `bg-amber-400` for the CTA to simulate gold.
2. **Result B (Helpful):**
   - Emphasize `bg-white` and clean `slate-900` typography.
   - Differentiate primary/secondary buttons using borders and soft shadows.
3. **Result C (Soft Thank You):**
   - Apply `bg-emerald-50/20` and softer `slate-800` text.
   - Increase vertical spacing and use `bg-slate-900` for the final button.
4. **Thank You Page:**
   - Return to `bg-stone-50` and wrap content in a clean `rounded-[2rem]` card.

---

## Verification Checklist
- [ ] Test Landing Page on iPhone SE/320px width.
- [ ] Verify that the progress bar gradient only triggers from Q4 onwards.
- [ ] Ensure "Result A" is the only screen using the radial glow and amber accents.
- [ ] Verify that all text content remains 100% identical to the current code.
