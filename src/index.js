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
  console.log(props)
  return (
    <div>
      <p>Parte: {props.part} </p><p>Numero: {props.excercise}</p>
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  
  return (
    <div>
      <Header title={course} />
      <Content part={part2.name} excercise={part2.exercises} />
      <Content part={part2.name} excercise={part2.exercises} />
      <Content part={part3.name} excercise={part3.exercises} />
      <Total total={ part1.exercises + part2.exercises + part3.exercises} />
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))