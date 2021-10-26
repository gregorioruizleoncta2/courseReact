import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props)=> {
    return (
      <div>
        <p>{props.curso.name}</p>
    </div>
    )
}

const Content = (props)=> {
  const salida = props.curso.parts.map(element => 'Parts: '+element.name+' Number: '+ element.exercises)
  return (
    <div>
      {salida}
   </div>
  )
}

const Total = (props)=> {
  let sum = 0
  props.curso.parts.forEach(element => {
    sum +=element.exercises
  });
  return (
    <div>
      <p>Total {sum}</p>      
  </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  
  return (
    <div>
      <Header curso={course} />
      <Content curso={course} />
      <Total curso={course} />
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))