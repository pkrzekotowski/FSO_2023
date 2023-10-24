import { useState } from 'react'

const Button = ({ onClick, text, }) => {
  return(
      <button onClick={onClick}>
        {text}
      </button>
  )
}

const Votes = ({ votes, selected }) => {
  return(
    <div>
      has {votes[selected]} votes
    </div>
  )
}

const HighlightedAnecdote = ({ anecdotes, votes, index }) => {

for(let i = 1; i < anecdotes.length; i++) {
  if(votes[i] === index) {
    return (
      <div>
      {anecdotes[i]}
      </div>
    )
  }
}

  return (
    <div>
    {anecdotes[0]}
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(8).fill(0))

  const highestVotes = Math.max(...votes)

  const randomNumber = () => Math.floor(Math.random() * 8)
  const handleClick = () => setSelected(randomNumber())
  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <Votes selected={selected} votes={votes} />
      <Button text={'next anecdote'} onClick={handleClick} />
      <Button text={'vote'} onClick={handleVote} />
      <h2>Anecdote with the most votes</h2>
      <HighlightedAnecdote index={highestVotes} votes={votes} anecdotes={anecdotes}/>
    </div>
  )
}

export default App
