import { useSurveyState } from './hooks/useSurveyState'
import {
  Q1, Q2_VARIANTS, Q3_VARIANTS, Q4, Q5, Q6, Q7,
  Q1_TAGS, Q4_TAGS, Q7_TAGS,
} from './data/questions'
import LandingPage from './components/LandingPage'
import QuestionScreen from './components/QuestionScreen'
import RewardGate from './components/RewardGate'
import ResultPage from './components/ResultPage'
import ThankYouPage from './components/ThankYouPage'

export default function App() {
  const { state, setStep, setAnswer, addTag, addTags, completeGate } = useSurveyState()
  const { currentStep, answers } = state

  // Q1 handler — stores answer, assigns tag, advances to q2
  function handleQ1(answer) {
    setAnswer('q1', answer)
    addTag(Q1_TAGS[answer])
    setStep('q2')
  }

  // Q2 handler — no tag, advances to q3
  function handleQ2(answer) {
    setAnswer('q2', answer)
    setStep('q3')
  }

  // Q3 handler — no tag, advances to gate
  function handleQ3(answer) {
    setAnswer('q3', answer)
    setStep('gate')
  }

  // Q4 handler — stores answer, assigns Need_* tag, advances to q5
  function handleQ4(answer) {
    setAnswer('q4', answer)
    addTag(Q4_TAGS[answer])
    setStep('q5')
  }

  // Q5 handler
  function handleQ5(answer) {
    setAnswer('q5', answer)
    setStep('q6')
  }

  // Q6 handler
  function handleQ6(answer) {
    setAnswer('q6', answer)
    setStep('q7')
  }

  // Q7 handler — stores answer, assigns Intent_* tag, advances to result
  function handleQ7(answer) {
    setAnswer('q7', answer)
    addTag(Q7_TAGS[answer])
    setStep('result')
  }

  // Determine result variant from Q7 answer
  function getResultVariant() {
    if (answers.q7 === 'Yes') return 'A'
    if (answers.q7 === "I'd like to learn more") return 'B'
    return 'C'
  }

  const q2Config = answers.q1 ? Q2_VARIANTS[answers.q1] : null
  const q3Config = answers.q1 ? Q3_VARIANTS[answers.q1] : null

  switch (currentStep) {
    case 'landing':
      return <LandingPage onStart={() => setStep('q1')} />

    case 'q1':
      return (
        <QuestionScreen
          question={Q1}
          stepKey="q1"
          onAnswer={handleQ1}
          onBack={() => setStep('landing')}
        />
      )

    case 'q2':
      return q2Config ? (
        <QuestionScreen
          question={q2Config}
          stepKey="q2"
          onAnswer={handleQ2}
          onBack={() => setStep('q1')}
        />
      ) : null

    case 'q3':
      return q3Config ? (
        <QuestionScreen
          question={q3Config}
          stepKey="q3"
          onAnswer={handleQ3}
          onBack={() => setStep('q2')}
        />
      ) : null

    case 'gate':
      return <RewardGate onComplete={completeGate} />

    case 'q4':
      return (
        <QuestionScreen
          question={Q4}
          stepKey="q4"
          onAnswer={handleQ4}
        />
      )

    case 'q5':
      return (
        <QuestionScreen
          question={Q5}
          stepKey="q5"
          onAnswer={handleQ5}
        />
      )

    case 'q6':
      return (
        <QuestionScreen
          question={Q6}
          stepKey="q6"
          onAnswer={handleQ6}
        />
      )

    case 'q7':
      // Q7 must NOT auto-advance — give it a closing beat (BRIEF §10.2 + §10.4)
      return (
        <QuestionScreen
          question={Q7}
          stepKey="q7"
          onAnswer={handleQ7}
          requireExplicitAdvance
        />
      )

    case 'result':
      return (
        <ResultPage
          variant={getResultVariant()}
          addTags={addTags}
          onContinue={() => setStep('thankyou')}
        />
      )

    case 'thankyou':
      return <ThankYouPage user={state.user} surveyState={state} />

    default:
      return <LandingPage onStart={() => setStep('q1')} />
  }
}
