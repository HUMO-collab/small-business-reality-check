# Section 10 — UX Design Intent & Psychological Architecture

> **Insert this section between Section 9 (Tagging System) and the current Section 10 (What the Finished Product Looks Like). Renumber existing sections 10, 11, 12 → 11, 12, 13.**

> **For developers and designers:** This section explains the *why* behind the funnel's structure. Every decision in the question sequence, visual treatment, and interaction model is intentional. Do not optimise away from these directions — you will be optimising away from the conversion strategy.

---

## 10.1 The Four-Layer Psychological Arc

The survey moves through four deliberate phases. Each phase has a specific emotional job to do.

| Phase | Steps | Emotional Job |
|---|---|---|
| **1. Self-Recognition** | Landing → Q1 | User sees their own situation reflected back immediately. No friction, no setup. |
| **2. Guided Realization** | Q2 → Q3 | User examines external pressure first (Q2), then assesses themselves internally (Q3). This order is intentional — it creates a moment of honest self-assessment rather than defensiveness. Do not swap the order. |
| **3. Earned Reward** | Gate | The gate works because trust has been built across three meaningful interactions. The reward feels deserved, not dangled. If the gate appears earlier, this psychology collapses. |
| **4. Narrative Close** | Q7 → Result | Q7 closes the loop opened on the landing page ("discover one of the easiest ways…"). The user was promised something at the start — Q7 delivers on that promise explicitly. The phrase "just like this survey did" is the moment of conscious realisation. |

---

## 10.2 Per-Question Design Intent

### Q1 — Emotional Self-Recognition
- This question must stand alone. No subtext, no helper copy, no tooltip.
- Its power comes from directness. Any additional text around it reduces the emotional impact.
- The user should feel seen, not interrogated.
- **Design rule:** Question text only. No supporting copy on this screen.

### Q2 + Q3 — The Guided Realization Sequence
- Q2 externalises the problem (market, economy, costs). Q3 turns it inward (how *you* are coping).
- This sequence — external pressure first, self-assessment second — is what creates guided realization rather than resistance.
- **Design rule:** Do not add motivational or framing copy between Q2 and Q3. The transition should feel seamless and conversational.

### Reward Gate — Earned Exchange Psychology
- The gate works because three questions have already been answered. The user has invested. The reward now feels like fair compensation for that investment.
- The trust line ("We only ask for this now because you've earned your first reward") makes the timing explicit.
- **Design rule:** Do not add a reward preview, progress teaser, or "almost there" message before the gate. Anticipation here undermines the earned feeling.

### Q7 — Narrative Continuity Close
- This is not just the final question. It is the payoff of a promise made on the landing page.
- The phrase "just like this survey did" is mandatory because it makes the user consciously connect their own experience to the product being offered. Without it, the offer feels like an add-on. With it, it feels like the obvious next step.
- **Design rule:** This question should carry slightly more visual weight than Q4–Q6. Consider a subtle visual pause — slightly slower transition in, or a brief moment before options appear — to signal that this is the closing moment.

---

## 10.3 Visual Design Direction

The brief does not specify a brand colour palette — that is intentional. The following principles should guide whatever palette is chosen.

### Emotional Tone Per Screen Type

| Screen | Emotional Target | Visual Direction |
|---|---|---|
| Landing | Confident, low-pressure | Clean, generous whitespace. Single focal point on headline + CTA. No decorative elements. |
| Q1–Q3 | Focused, conversational | Neutral background. Question dominant. Options feel like a natural conversation choice, not a form. |
| Reward Gate | Celebratory but trustworthy | Shift the visual register here — a subtle change in background tone, border treatment, or headline weight signals "something changed". Do not make it feel like a pop-up or interruption. |
| Q4–Q6 | Forward momentum | Slightly warmer. The user is now invested and moving toward something. |
| Result A | Premium, elevated | Highest visual distinction of any screen. This is the upgraded reward — it should feel like an upgrade. Consider a gold/warm accent, larger headline, or a distinct card treatment. |
| Result B | Helpful, no-pressure | Neutral and informational. Friendly, not urgent. |
| Result C | Warm, appreciative | Softest visual treatment. No urgency signals. The relationship is intact — the screen should reflect that. |
| Thank You | Simple, complete | Minimal. The journey is done. One clear confirmation, nothing competing for attention. |

---

## 10.4 Interaction Behaviour Spec

These decisions were left open in the brief and must be resolved before build. The intent behind each is specified so the decision aligns with the conversion strategy.

### Auto-Advance vs. Next Button
- **Recommended: auto-advance on selection** for Q1–Q6.
- Rationale: reduces friction, maintains conversational momentum, prevents second-guessing.
- **Exception: Q7 should NOT auto-advance.** The user should see their selection highlighted for a moment before advancing. Q7 is the close — give it a beat.
- If auto-advance is not feasible on the platform, a Next button is acceptable for all questions, but it must appear only after an option is selected (not pre-visible as an inactive grey button).

### Selected State Before Advancing
- Selected option must visually confirm before transition (highlight, checkmark, or fill).
- Transition should begin no sooner than 300ms and no later than 600ms after selection.
- Do not advance instantly — the micro-pause confirms to the user that their answer was registered.

### Progress Indicator
- Must be visible on every question screen (Q1–Q7) and on the gate screen.
- Should reflect true position: gate counts as a step.
- Label format: "Step X of 10" (total = 10 steps: Landing excluded, Gate = Step 4, Q4–Q7 = Steps 5–9, Result = Step 10).
- Do not show progress on Landing, Result pages, or Thank You page.

### Error States (Gate Form)
- Inline validation on blur, not on submit.
- Error messages appear directly below the relevant field.
- Error copy should be human: "We need your first name to send your reward." Not: "Field required."
- CTA button remains active — validation fires on click if fields are incomplete, but do not disable the button visually before the user attempts submission.

### Back Navigation
- Back is permitted on Q1–Q3 (pre-gate).
- Back is **not permitted** after gate submission. The gate is a hard commit.
- Do not show a visible back button on the gate screen or any post-gate screen.

---

## 10.5 Lead Nurture Intent — Tag Semantics

The tags are not just labels. They define three completely different follow-up tracks. Any CRM or email system consuming this data should treat them as behavioural segments, not metadata.

### State Tags (from Q1) — Drive Tone and Empathy Level

| Tag | What it means | Follow-up approach |
|---|---|---|
| `State_Pressure` | Business is under active strain. Owner is in pain-avoidance mode. | Lead with relief and simplicity. No aspirational language. Emphasise "easy", "quick", "without adding complexity". |
| `State_Stable` | Business is holding steady. Owner is in maintenance or cautious-growth mode. | Lead with opportunity and efficiency. They're not in pain — appeal to getting ahead, not surviving. |
| `State_Uncertain` | Owner is unsure. Could go either way. | Lead with clarity and confidence-building. Give them a framework before pitching anything. |

### Need Tags (from Q4) — Drive Content and Offer Angle

| Tag | Primary message angle |
|---|---|
| `Need_Leads` | Position Marketing Boost as a lead generation mechanism. |
| `Need_RepeatBusiness` | Position as a loyalty and retention tool. |
| `Need_Referrals` | Position as a referral activation system. |
| `Need_Engagement` | Position as an engagement multiplier. |
| `Need_Conversion` | Position as a conversion rate tool — they have leads, they need response. |

### Intent Tags (from Q7) — Drive Urgency and Sequence Timing

| Tag | What it means | Follow-up approach |
|---|---|---|
| `Intent_Hot` | Said yes to seeing Marketing Boost. Has activated or been offered the trial. | Onboarding sequence immediately. Short time-to-value. Welcome + first win. |
| `Intent_Warm` | Curious but not committing. Chose "I'd like to learn more." | Education-first sequence. Social proof, case examples, low-friction next step. No hard ask before value delivered. |
| `Intent_Cool` | Declined. Not ready. | Long-game nurture. No pitch for at least 3 touchpoints. Build trust through useful content. Re-introduce offer only after value demonstrated. |

---

## 10.6 Data Egress — Getting Tags Out of localStorage

The brief specifies localStorage as the persistence layer for MVP. This is correct for a standalone build. For the data to drive actual follow-up, one of the following egress approaches must be implemented at or before the gate submission.

### Minimum Viable Egress (Gate Submission)
On gate form submission, POST the following payload to a webhook, form endpoint, or email service:

```javascript
{
  user: {
    firstName: state.user.firstName,
    email: state.user.email,
    businessName: state.user.businessName,
    websiteUrl: state.user.websiteUrl       // may be empty string
  },
  tags: state.tags,                          // array at time of gate submission
  answers: {
    q1: state.answers.q1,
    q2: state.answers.q2,
    q3: state.answers.q3
  },
  submittedAt: new Date().toISOString()
}
```

### Full Egress (Thank You Page)
On Thank You page load, POST the complete final state:

```javascript
{
  user: state.user,
  answers: state.answers,                    // all q1–q7
  tags: state.tags,                          // complete final tag array
  completedAt: new Date().toISOString()
}
```

### Recommended Endpoints for MVP
- **Webhook:** n8n, Make.com, or Zapier catch-hook (zero backend required)
- **Form submission:** Formspree or similar (email delivery of payload)
- **Direct CRM:** If the target system has a REST API and CORS-permissive endpoint

> The Thank You page references "an email on its way to your inbox." This requires a transactional email to be triggered on gate submission (minimum) or Thank You page load. The email address and sender name must be configured in whichever system receives the webhook. This is outside the scope of the front-end build but must be wired before the funnel goes live.

---

*This section is purely additive. Nothing in the existing brief changes. All copy, logic, tags, and validation criteria in Sections 1–9 remain final.*
