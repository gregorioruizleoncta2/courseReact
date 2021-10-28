import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Printer = props => <div><p>{props.text}</p></div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  const average = total / 3
  const positive = (total) =>{
      if (total !== 0)
        return props.good / total   
      else  
        return 0
  }     
    
  return (
    <div>
        <p>Good = {props.good}</p>
        <p>Neutral = {props.neutral}</p>
        <p>Bad = {props.bad}</p>
        <p>ALL = {total}</p>
        <p>Average = {average}</p>
        <p>Positive = {positive(total)}</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    
    <div>
      <Printer text="Give Feedback" />
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <Printer text="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />    
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)