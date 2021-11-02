import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const aleatorio = (minimo,maximo)=> Math.floor(Math.random() * ((maximo+1)-minimo)+minimo)

const Anecdotes = (props) =>{
  
  return (
    <div>
      {props.anecdotes[props.selected]}
    </div>
  )
 }
 
const Votes = (props) =>{
    return (
      <div>
        has {props.votes[props.selected]} votes
      </div>
    )
}

const MaxVotes = (props) =>{
  return (
    <div>
      <h1>Anecdote with most votes </h1>
      <p>{props.anecdotes[props.mostVoted]} </p>
      has {props.votes[props.mostVoted]} votes
    </div>
  )
}



const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const initVotes = new Array(anecdotes.length).fill(0)

const App = () => {
  

  // save clicks of each button to its own state
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(initVotes)
  const [mostVoted, setMostVoted] = useState(0)
  
  const handlerUpdateVote = (selected) =>{
        const changeVotes = [...votes]
        changeVotes[selected] +=1
        setVotes(changeVotes)
        updateMaxVotes(changeVotes)
  }

  const updateMaxVotes = (votes) =>{
    const maximo = Math.max(...votes)
    const index = votes.findIndex(element => element===maximo);
    setMostVoted(index)    
  }

  return (
     <div>
      <Anecdotes anecdotes={anecdotes} selected={selected}  />
      <Votes votes={votes} selected={selected} />
      <Button handleClick={() => setSelected(aleatorio(0,anecdotes.length-1))} text="Next Anecdote" />
      <Button handleClick={() => handlerUpdateVote(selected)} text="vote" />
      <MaxVotes votes={votes} anecdotes={anecdotes} mostVoted={mostVoted} />
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)