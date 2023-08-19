const Header = (props) => {
  console.log(props)
  return (
    <>
      <p>{props.course.name}</p>
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
      <Part name={props.course.parts[0].name} exercise={props.course.parts[0].exercises} />
      <Part name={props.course.parts[1].name} exercise={props.course.parts[1].exercises} />
      <Part name={props.course.parts[2].name} exercise={props.course.parts[2].exercises} />
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <>
      <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
    </>
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
      <h1>
        <Header course={course} />
      </h1>
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App
