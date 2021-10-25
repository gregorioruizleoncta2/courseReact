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
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  
  return (
    <div>
      <Header title={course} />
      <Content part={parts[0].name} excercise={parts[0].exercises} />
      <Content part={parts[1].name} excercise={parts[1].exercises} />
      <Content part={parts[2].name} excercise={parts[2].exercises} />
      <Total total={ parts[0].exercises + parts[1].exercises + parts[2].exercises} />
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))