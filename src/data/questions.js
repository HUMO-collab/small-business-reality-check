// All question data. Source of truth: BRIEF.md section 4.
// Never alter question text without checking the brief.

export const Q1 = {
  key: 'q1',
  text: 'Is this economy quietly crushing your business growth?',
  options: ['Yes', 'No', 'Not sure yet'],
}

// Q2 — conditional on Q1
export const Q2_VARIANTS = {
  Yes: {
    key: 'q2',
    text: 'What has been the biggest drag on your business lately?',
    options: [
      'Rising costs',
      'Fewer customers',
      'Customers spending less',
      'Marketing that is costing more',
      'Just general uncertainty',
    ],
  },
  No: {
    key: 'q2',
    text: 'What has been helping your business stay steady or grow?',
    options: [
      'Loyal customers',
      'Word of mouth',
      'Better marketing',
      'Stronger demand',
      'Keeping a close eye on costs',
    ],
  },
  'Not sure yet': {
    key: 'q2',
    text: 'What feels the most uncertain in your business right now?',
    options: [
      'Sales consistency',
      'Customer demand',
      'Profit margins',
      'Marketing performance',
      'The economy overall',
    ],
  },
}

// Q3 — conditional on Q1
export const Q3_VARIANTS = {
  Yes: {
    key: 'q3',
    text: 'Does it feel like you\'re working harder just to stay in the same place?',
    options: ['Yes', 'No', 'Sometimes'],
  },
  No: {
    key: 'q3',
    text: 'Do you feel like your business has a reliable way to keep customers coming back?',
    options: ['Yes', 'No', 'Somewhat'],
  },
  'Not sure yet': {
    key: 'q3',
    text: 'Do you feel like you have a clear system for growing your business right now?',
    options: ['Yes', 'No', 'Somewhat'],
  },
}

export const Q4 = {
  key: 'q4',
  text: 'If you could improve just one part of your business right now, what would move the needle most?',
  options: [
    'More leads',
    'More repeat business',
    'More referrals',
    'Better customer engagement',
    'Better conversion from the leads I already get',
  ],
}

export const Q5 = {
  key: 'q5',
  text: 'Right now, are you giving people a strong enough reason to take action quickly?',
  options: ['Yes', 'No', 'Not consistently'],
}

export const Q6 = {
  key: 'q6',
  text: 'If more customers responded because a reward was attached, would that help your business right now?',
  options: ['Yes', 'No', "I'm not sure"],
}

// CRITICAL: Do not alter Q7 text — "just like this survey did" is mandatory (BRIEF.md §4)
export const Q7 = {
  key: 'q7',
  text: 'Would you like to see one of the easiest ways to use rewards and incentives to create more engagement, leads, and sales in your business, just like this survey did?',
  options: ['Yes', 'No', "I'd like to learn more"],
}

// Tag assignment rules
export const Q1_TAGS = {
  Yes: 'State_Pressure',
  No: 'State_Stable',
  'Not sure yet': 'State_Uncertain',
}

export const Q4_TAGS = {
  'More leads': 'Need_Leads',
  'More repeat business': 'Need_RepeatBusiness',
  'More referrals': 'Need_Referrals',
  'Better customer engagement': 'Need_Engagement',
  'Better conversion from the leads I already get': 'Need_Conversion',
}

export const Q7_TAGS = {
  Yes: 'Intent_Hot',
  "I'd like to learn more": 'Intent_Warm',
  No: 'Intent_Cool',
}

// Step progress mapping — used by progress bar
// Format: "Step X of 10" per BRIEF Section 10.4
// Total = 10 (Landing excluded; Gate=4; Q4–Q7=5–8; Result=9; ThankYou=10)
// Progress indicator shown on Q1–Q7 and Gate only.
export const STEP_PROGRESS = {
  q1: { current: 1, total: 10 },
  q2: { current: 2, total: 10 },
  q3: { current: 3, total: 10 },
  gate: { current: 4, total: 10 },
  q4: { current: 5, total: 10 },
  q5: { current: 6, total: 10 },
  q6: { current: 7, total: 10 },
  q7: { current: 8, total: 10 },
}
