const Header = (props) => {
  console.log(props)
  return (
    <>
      <p>{props.course}</p>
    </>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <>
      <p>{props.name} {props.exercise}</p>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      <Part name={props.part1} exercise={props.exercise1} />
      <Part name={props.part2} exercise={props.exercise2} />
      <Part name={props.part3} exercise={props.exercise3} />
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
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
      <h1>
        <Header course={course}/>
      </h1>
      <Content part1={parts[0].name} part2={parts[1].name} part3={parts[2].name} exercise1={parts[0].exercises} exercise2={parts[1].exercises} exercise3={parts[2].exercises} />
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}

export default App
