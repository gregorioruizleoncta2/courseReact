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
  const salida = props.part.map(element => 'Parts: '+element.name+' Number: '+ element.exercises)
  return (
    <div>
      {salida}
   </div>
  )
}

const Total = (props)=> {
  let sum = 0
  props.total.forEach(element => {
    sum +=element.exercises
  });
  return (
    <div>
      <p>Total {sum}</p>      
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
      <Content part={parts} />
      <Total total={parts} />
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))