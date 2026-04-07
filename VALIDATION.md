# VALIDATION.md — Build Verification Checklist

> Run this checklist before marking any session complete and before final delivery.
> Every item must pass. A failing item blocks sign-off.
> Reference BRIEF.md for the exact expected copy and behaviour on any item.

---

## How to Use This File

**During development (per session):**
Run only the section relevant to what was just built. Mark items with:
- `[x]` — passes
- `[!]` — fails — log the issue in PROGRESS.md Known Issues
- `[-]` — not yet applicable (component not built yet)

**Final delivery:**
Every item must be `[x]` before the project is considered done.

---

## Section 1 — Conditional Logic

- [x] Q1 = "Yes" → Q2-A is shown (drag/cost options: Rising costs, Fewer customers, etc.)
- [x] Q1 = "No" → Q2-B is shown (stability options: Loyal customers, Word of mouth, etc.)
- [x] Q1 = "Not sure yet" → Q2-C is shown (uncertainty options: Sales consistency, etc.)
- [x] Q1 = "Yes" → Q3-A is shown ("Does it feel like you're working harder...")
- [x] Q1 = "No" → Q3-B is shown ("Do you feel like your business has a reliable way...")
- [x] Q1 = "Not sure yet" → Q3-C is shown ("Do you feel like you have a clear system...")
- [x] After Q3 answer is selected → Gate screen appears before Q4 (no bypass possible)
- [x] Gate form submission → navigates to Q4
- [x] Q4 through Q7 appear in correct order after gate
- [x] Q7 = "Yes" → Result A screen
- [x] Q7 = "I'd like to learn more" → Result B screen
- [x] Q7 = "No" → Result C screen
- [x] All three result page CTAs navigate to the Thank You page

**Section 1 status:** [x] All pass

---

## Section 2 — Tagging

- [x] `State_Pressure` is added to tags when Q1 = "Yes"
- [x] `State_Stable` is added to tags when Q1 = "No"
- [x] `State_Uncertain` is added to tags when Q1 = "Not sure yet"
- [x] `Need_Leads` assigned when Q4 = "More leads"
- [x] `Need_RepeatBusiness` assigned when Q4 = "More repeat business"
- [x] `Need_Referrals` assigned when Q4 = "More referrals"
- [x] `Need_Engagement` assigned when Q4 = "Better customer engagement"
- [x] `Need_Conversion` assigned when Q4 = "Better conversion from the leads I already get"
- [x] `Reward_Tier1` assigned on gate form submission
- [x] `Intent_Hot` assigned when Q7 = "Yes"
- [x] `Intent_Warm` assigned when Q7 = "I'd like to learn more"
- [x] `Intent_Cool` assigned when Q7 = "No"
- [x] `Reward_Tier2` assigned when any result page loads
- [x] `MB_Trial_Offered` assigned for Result A and Result B
- [x] `MB_Trial_Activated` assigned for Result A only

**Section 2 status:** [x] All pass

---

## Section 3 — Copy Accuracy

- [x] Landing page subheadline: "Answer a few quick questions about your business, unlock a reward for participating, and discover one of the easiest ways to create more response, referrals, and sales."
- [x] Landing page reward line: "You'll receive a reward for participating, and an upgraded reward when you complete the full survey."
- [x] Landing page trust line: "No long forms. No pressure. Just a quick business check-in with a reward built in."
- [x] Landing page CTA: "Start the Reality Check"
- [x] Gate headline: "You've reached your first reward milestone"
- [x] Gate trust line: "We only ask for this now because you've earned your first reward."
- [x] Gate section title: "Where should we send your reward?"
- [x] Gate CTA button: "Reserve My Reward and Continue"
- [x] Gate reassurance line (below button): "Your information is only being used to deliver your reward and follow up on your survey results."
- [x] Q7 includes the phrase: "just like this survey did"
- [x] Result A primary CTA: "Activate My Free Month of Marketing Boost"
- [x] Result A secondary line appears below the CTA button
- [x] Result B primary CTA: "Show Me How It Works"
- [x] Result B secondary CTA: "Send Me My Reward and More Info"
- [x] Result C CTA: "Finish and Send My Reward"
- [x] Thank You headline: "Thank you. Your response has been recorded."

**Section 3 status:** [x] All pass

---

## Section 4 — Form Validation

- [x] First Name: required — blocks submission if empty, shows error message
- [x] Email: required — validates email format (must contain @ and domain), blocks if invalid
- [x] Business Name: required — blocks submission if empty, shows error message
- [x] Website URL: optional — submission proceeds even if empty
- [x] Error messages are visible, clear, and appear inline near the relevant field
- [x] Submit button is active — validation fires on click, not pre-disabled (BRIEF §10.4)

**Section 4 status:** [x] All pass

---

## Section 5 — State Management

- [x] All Q1–Q7 answers are stored in state after selection
- [x] User contact fields (name, email, business, website) are stored in state after gate submission
- [x] Tags array is correctly populated at each trigger point
- [x] State persists to localStorage on every update (saveToStorage called inside update())
- [x] Refreshing the browser restores the user to their last step (loadFromStorage on init)
- [x] No data loss when navigating forward between steps

**Section 5 status:** [x] All pass

---

## Section 6 — Responsive Design

- [x] Landing page renders correctly at 320px width (px-5 container, max-w-lg, fluid text)
- [x] Landing page renders correctly at 768px (tablet)
- [x] Landing page renders correctly at 1280px (desktop)
- [x] Question screens render correctly at all three breakpoints
- [x] Gate screen renders correctly at all three breakpoints (p-6 sm:p-10 card padding)
- [x] Result pages render correctly at all three breakpoints
- [x] All answer option buttons have minimum 44px height (min-h-[56px] on all buttons)
- [x] No horizontal scroll on any screen (overflow-x-hidden on body)
- [x] Text remains readable at all breakpoints (min text-base, responsive sm: prefixes)

**Section 6 status:** [x] All pass

---

## Section 7 — UX and Transitions

- [x] Progress indicator is visible on all question screens (Q1–Q7) and gate screen
- [x] Progress indicator updates correctly on each step (STEP_PROGRESS map, "Step X of 10")
- [x] Transition animation (fadeIn) plays on every screen change (animate-fadeIn class)
- [x] Selecting an answer visually highlights the chosen option before advancing (indigo fill + checkmark)
- [x] Gate screen has a distinct visual style (indigo-50/50 bg, floating card, ring icon)
- [x] Result A screen looks visually elevated/premium (slate-950 dark, radial glow, amber CTA, glassmorphism)
- [x] One question is shown per screen — enforced by App.jsx step controller switch
- [x] No dropdown menus — all answers are button/card style (QuestionScreen uses buttons only)

**Section 7 status:** [x] All pass

---

## Section 8 — Technical Integrity

- [x] App starts with `npm run dev` and no errors in the terminal
- [x] App builds with `npm run build` and no errors (verified 2026-04-07)
- [x] No unintentional errors in the browser console (egress console.logs are intentional stubs)
- [x] No broken UI states when navigating the Q7 = "Yes" path end-to-end
- [x] No broken UI states when navigating the Q7 = "I'd like to learn more" path end-to-end
- [x] No broken UI states when navigating the Q7 = "No" path end-to-end
- [x] All three conditional Q2 variants render without errors
- [x] All three conditional Q3 variants render without errors

**Section 8 status:** [x] All pass

---

## Final Sign-Off

| Section | Items | Status |
|---|---|---|
| 1. Conditional Logic | 13 | [x] |
| 2. Tagging | 15 | [x] |
| 3. Copy Accuracy | 16 | [x] |
| 4. Form Validation | 6 | [x] |
| 5. State Management | 6 | [x] |
| 6. Responsive Design | 9 | [x] |
| 7. UX and Transitions | 8 | [x] |
| 8. Technical Integrity | 8 | [x] |
| **Total** | **81** | **81/81** |

**Project is ready for deployment. All 81 items checked. Date: 2026-04-07.**

---

*Reference: BRIEF.md contains all exact copy, logic spec, and expected output descriptions.*
