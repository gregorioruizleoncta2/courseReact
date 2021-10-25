import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props)=> {
    return (
      <div>
        <p>{props.title}</p>
    </div>
    )
}

const Content = (props)=> {
  return (
    <div>
      <p>Part {props.part}</p>
      <p>Execise {props.excercise}</p>
  </div>
  )
}

const Total = (props)=> {
  return (
    <div>
      <p>Total {props.total}</p>      
  </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header title={course} />
      <Content part={part1} excercise={exercises1} />
      <Content part={part2} excercise={exercises2} />
      <Content part={part3} excercise={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))