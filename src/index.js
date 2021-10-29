import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Printer = props => <div><p>{props.text}</p></div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Good = (props) => {
  return (
    <div>
        {props.good}
    </div>
  )
}
const Neutral = (props) => {
  return (
    <div>
        {props.neutral}
    </div>
  )
}

const Bad = (props) => {
  return (
    <div>
        {props.bad}
    </div>
  )
}

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  return (
    <div>
        {total}
    </div>
  )
}

const Average = (props) => {
  const total = props.good + props.neutral + props.bad
  const average = total / 3
    
  return (
    <div>
        {average}
    </div>
  )
}

const Positive = (props) => {
  const total = props.good + props.neutral + props.bad
  const positive = (total) =>{
      if (total !== 0)
        return props.good / total   
      else  
        return 0
  }     
    
  return (
    <div>
        {positive(total)}
    </div>
  )
}

const Anecdotes = (props) =>{
  const aleatorio = (minimo,maximo)=> Math.floor(Math.random() * ((maximo+1)-minimo)+minimo)
  
  let max = props.selected
  if (props.selected  >=  props.anecdotes.length){
            max = props.anecdotes.length - 1
  }
  return (
    <div>
      {props.anecdotes[aleatorio(0,max)]}
    </div>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(0)
  
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  return (
    
    <div>
      <Anecdotes anecdotes={anecdotes} selected={selected} />
      <Button handleClick={() => setSelected(selected + 1)} text="Next Anecdote" />
      <Printer text="Give Feedback" />
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <Printer text="Statistics" />
      <table>
      <tbody>
      <tr>
        <td>
          Good
        </td>
        <td>
        <Good good={good} neutral={neutral} bad={bad} />    
        </td>
      </tr>
      <tr>
        <td>
          Neutral
        </td>
        <td>
        <Neutral good={good} neutral={neutral} bad={bad} />    
        </td>
      </tr>
      <tr>
        <td>
          Bad
        </td>
        <td>
        <Bad good={good} neutral={neutral} bad={bad} />    
        </td>
      </tr>
      <tr>
        <td>
          All
        </td>
        <td>
        <Statistics good={good} neutral={neutral} bad={bad} />    
        </td>
      </tr>
      <tr>
        <td>
          Average
        </td>
        <td>
        <Average good={good} neutral={neutral} bad={bad} />    
        </td>
      </tr>
      <tr>
        <td>
          Positive
        </td>
        <td>
        <Positive good={good} neutral={neutral} bad={bad} />    
        </td>
      </tr>
      </tbody>
      
      </table>      

      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)