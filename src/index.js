import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = props => <div><p>{props.text}:{props.value}</p></div>
const Printer = props => <div><p>{props.text}</p></div>
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)



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
      <Printer text="Statics" />
       <Display text="Good" value={good} />
       <Display text="Neutral" value={neutral} />
       <Display text="Bad" value={bad} />
      
    </div>
    
    
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)