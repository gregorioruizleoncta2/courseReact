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
        <p>Good = {props.good}</p>
    </div>
  )
}
const Neutral = (props) => {
  return (
    <div>
        <p>Neutral = {props.neutral}</p>
    </div>
  )
}

const Bad = (props) => {
  return (
    <div>
        <p>Bad = {props.bad}</p>
    </div>
  )
}

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  return (
    <div>
        <p>ALL = {total}</p>
    </div>
  )
}

const Average = (props) => {
  const total = props.good + props.neutral + props.bad
  const average = total / 3
    
  return (
    <div>
        <p>Average = {average}</p>
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
      <Good good={good} neutral={neutral} bad={bad} />    
      <Neutral good={good} neutral={neutral} bad={bad} />    
      <Bad good={good} neutral={neutral} bad={bad} />    
      <Statistics good={good} neutral={neutral} bad={bad} />    
      <Average good={good} neutral={neutral} bad={bad} />    
      <Positive good={good} neutral={neutral} bad={bad} />    
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)