import { useState } from 'react'

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const sum = bad + good + neutral

  if (sum === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <>
    <div>good {good}</div>
    <div>neutral {neutral}</div>
    <div>bad {bad}</div>
    <div>all {bad + good + neutral}</div>
    <div>average {sum/3}</div>
    <div>positive {good/sum * 100}%</div>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={() => setGood(good + 1)} text={'good'} />
      <Button onClick={() => setNeutral(neutral + 1)} text={'neutral'} />
      <Button onClick={() => setBad(bad + 1)} text={'bad'} />
      <h2>statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App