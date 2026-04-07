# Visual Improvement Spec: Small Business Reality Check

## THE PRODUCT
A 11-screen conversion funnel called "Small Business Reality Check".

## THE VISUAL BRIEF
Each screen has a specific emotional job:
- **Landing Page**: Confident, low-pressure.
- **Q1–Q3**: Focused, conversational.
- **Reward Gate**: Celebratory but trustworthy.
- **Q4–Q6**: Forward momentum, warmer.
- **Q7**: Closing moment.
- **Result A**: Premium, elevated.
- **Result B**: Helpful, informational.
- **Result C**: Warm, appreciative.
- **Thank You**: Simple, complete.

---

## Screen-by-Screen Improvement Spec

### 1. Landing Page
**Emotional target:** Confident, low-pressure.
**Current state:** Generic white background with standard Indigo-600 button and high-contrast text.
**Issues:** Lacks a "premium consultant" feel; looks like a standard automated form.

**Recommended changes:**
- **Background:** `bg-stone-50` (warm neutral).
- **Typography:** Headline: `text-slate-900 tracking-tighter font-black text-4xl sm:text-6xl`. Body: `text-slate-600/90 leading-relaxed max-w-lg mx-auto`.
- **Primary CTA:** `bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold text-xl px-12 py-5 rounded-2xl shadow-xl shadow-indigo-600/20 transition-all hover:scale-[1.03]`.
- **Accent / colour:** Reward Badge: `bg-white border border-stone-200 text-stone-700 shadow-sm rounded-full px-6 py-2`.
- **Spacing / layout:** Increase vertical padding with `py-24 sm:py-32`.
- **Any other elements:** Top header border: `border-b border-stone-200/50`.

**Why:** Using `stone-50` instead of pure white removes the clinical feel and replaces it with an approachable, premium aesthetic.

---

### 2. QuestionScreen (Q1–Q3: Neutral/Conversational)
**Emotional target:** Focused, conversational.
**Current state:** Basic white layout with a thin progress bar and standard button borders.
**Issues:** Interaction feels clinical; lacks visual depth.

**Recommended changes:**
- **Background:** `bg-stone-50`.
- **Typography:** Question: `text-slate-900 font-extrabold text-2xl sm:text-4xl tracking-tight mb-12`.
- **Options:** `bg-white border-2 border-stone-200/80 text-slate-700 font-semibold text-lg py-5 px-6 rounded-2xl shadow-sm hover:border-indigo-400 hover:bg-indigo-50/50 transition-all active:scale-[0.98]`.
- **Accent / colour:** Progress Track: `bg-stone-200`. Filler: `bg-indigo-600`.
- **Spacing / layout:** `gap-4` between options; center-aligned container.
- **Any other elements:** Step counter: `text-stone-400 font-bold tracking-[0.2em] text-[10px] uppercase`.

**Why:** Soft neutrals and "elevated" cards create a tactile, conversational feel for the start of the journey.

---

### 3. Reward Gate (The Milestone)
**Emotional target:** Celebratory but trustworthy.
**Current state:** Flat `indigo-50` background. The form feels like an interruption.
**Issues:** Abrupt transition; doesn't celebrate the "First Reward" milestone.

**Recommended changes:**
- **Background:** `bg-indigo-50/50`.
- **Typography:** Headline: `text-slate-950 font-black text-3xl sm:text-5xl leading-[1.1]`.
- **Primary CTA:** `bg-indigo-600 hover:bg-indigo-700 shadow-2xl shadow-indigo-600/30 rounded-2xl py-5 text-xl font-bold transition-transform hover:scale-[1.02]`.
- **Accent / colour:** Milestone Icon: `bg-white ring-8 ring-indigo-100/50 text-indigo-600 shadow-lg scale-125 mb-8`.
- **Spacing / layout:** Card: `bg-white rounded-[2.5rem] shadow-2xl shadow-indigo-900/5 p-10 sm:p-14 border border-indigo-50/50`.
- **Any other elements:** Inputs: `bg-stone-50 border-stone-200 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 rounded-xl py-4`.

**Why:** Using a "floating" high-shadow card with ultra-rounded corners signals a special milestone, building trust during the information exchange phase.

---

### 4. QuestionScreen (Q4–Q7: Forward Momentum)
**Emotional target:** Forward momentum, warmer.
**Current state:** Identical to Q1-Q3.
**Issues:** No visual progression; the user needs a psychological "lift" as they near the finish.

**Recommended changes:**
- **Background:** Transition to `bg-indigo-50/30` or `bg-slate-50`.
- **Typography:** Same as Q1-Q3.
- **Options:** Same as Q1-Q3, but hover state: `hover:border-indigo-500 hover:shadow-indigo-500/10`.
- **Accent / colour:** Progress Filler: `bg-gradient-to-r from-indigo-600 to-violet-500`.
- **Spacing / layout:** **Q7 Treatment:** Add a subtle `ring-1 ring-slate-200/50` around the question area to ground the final question. 
- **Any other elements:** **Q7 NEXT BUTTON:** Change to `bg-slate-950` to signal a solid completion action.

**Why:** The introduction of color gradients in the filler provides a subtle sense of "leveling up."

---

### 5. Result Page: Variant A (Premium)
**Emotional target:** Premium, elevated.
**Current state:** Simple dark purple gradient.
**Issues:** Lacks visual depth and "Wow" factor.

**Recommended changes:**
- **Background:** `bg-slate-950` with radial glow: `bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-500/30 via-slate-950 to-slate-950`.
- **Typography:** Headline: `text-white font-black text-5xl sm:text-7xl tracking-tighter`. Body: `text-indigo-100/80`.
- **Primary CTA:** `bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-lg py-5 rounded-2xl shadow-2xl shadow-amber-400/20 transition-all`.
- **Accent / colour:** Badge: `bg-white/10 backdrop-blur-xl border border-white/20 text-indigo-50 font-bold px-6 py-3`.
- **Spacing / layout:** Cinematic centering `py-32`. Container: `bg-white/5 border border-white/10 rounded-[2rem] p-10 backdrop-blur-md shadow-2xl`.

**Why:** Dark mode + Gold (Amber) + Glassmorphism is the universal visual language for premium rewards.

---

### 6. Result Page: Variant B (Helpful)
**Emotional target:** Helpful, informational.
**Current state:** Static white page.
**Issues:** Lacks hierarchy and warmth.

**Recommended changes:**
- **Background:** `bg-white`.
- **Typography:** `text-slate-900` headings, `text-slate-600` for body.
- **Primary CTA:** `bg-indigo-600 shadow-xl shadow-indigo-600/20 hover:bg-indigo-700`.
- **Secondary CTA:** `bg-white border-2 border-slate-200 text-slate-700 hover:border-indigo-300 rounded-2xl py-4`.
- **Accent / colour:** Icon: `bg-indigo-50 border border-indigo-100 text-indigo-700 rounded-2xl`.

**Why:** Focus on "Clean Information" hierarchy to support the user who wants value without urgency.

---

### 7. Result Page: Variant C (Appreciative)
**Emotional target:** Warm, appreciative.
**Current state:** Standard white with green icon.
**Issues:** Can feel "clinical."

**Recommended changes:**
- **Background:** `bg-emerald-50/20` (soft tint).
- **Typography:** Headline `text-slate-800` (soft black). Body `text-slate-500`.
- **Primary CTA:** `bg-slate-900 hover:bg-black py-5 shadow-lg`.
- **Accent / colour:** Icon container: `bg-white ring-8 ring-white/50 text-emerald-500 shadow-sm rounded-3xl`.
- **Spacing / layout:** Maximum white space usage (`py-24`).

**Why:** Soft tints and calm neutrals communicate gratitude without pressure.

---

### 8. Thank You Page
**Emotional target:** Simple, complete.
**Current state:** White with a simple checkmark.
**Issues:** Low impact.

**Recommended changes:**
- **Background:** `bg-stone-50`.
- **Typography:** `text-slate-900 font-bold text-4xl`.
- **Accent / colour:** Check icon: `bg-white ring-[12px] ring-emerald-50/80 text-emerald-500 shadow-sm rounded-full scale-125`.
- **Any other elements:** Confirmation Card: `bg-white border border-stone-200/60 rounded-[2rem] p-10 max-w-sm mx-auto shadow-sm`.

**Why:** Returning to the `stone-50` palette provides psychological closure for the entire funnel.

---

## GLOBAL DESIGN SYSTEM
- **Primary:** `indigo-600` (actions), `indigo-100` (backdrops).
- **Surfaces:** `stone-50` (warm neutral), `slate-950` (premium dark).
- **Radius:** Component: `rounded-2xl` (1rem). Major Cards: `rounded-[2.5rem]` (2.5rem).
- **Shadows:** Soft UI: `shadow-xl shadow-slate-200/50`. Highlight UI: `shadow-2xl shadow-indigo-600/10`.
- **Transitions:** `transition-all duration-300 ease-out`. Active hover scales: `scale-[1.02]`.
- **Weights:** Headlines: `font-black` (900). Selections: `font-semibold` (600).
