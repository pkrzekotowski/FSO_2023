import { useState } from 'react'

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({ text, value }) => {
  return(
    <div>
      {text} {value}
    </div>
  )
}

const Statistics = ({ good, neutral, bad, sum }) => {

  console.log(good, bad, neutral, sum)

  if (sum === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <>
    <StatisticLine text={'good'} value={good} />
    <StatisticLine text={'neutral'} value={neutral} />
    <StatisticLine text={'bad'} value={bad} />
    <StatisticLine text={'all'} value={sum} />
    <StatisticLine text={'average'} value={sum/3} />
    <StatisticLine text={'positive'} value={good/sum * 100 + '%'} />
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const sum = bad + good + neutral

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={() => setGood(good + 1)} text={'good'} />
      <Button onClick={() => setNeutral(neutral + 1)} text={'neutral'} />
      <Button onClick={() => setBad(bad + 1)} text={'bad'} />
      <h2>statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral} sum={sum} />
    </div>
  )
}

export default App
