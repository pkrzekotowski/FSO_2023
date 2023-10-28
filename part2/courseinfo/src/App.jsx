const Header = (props) => {
  console.log(props)
  const { name } = props
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  const { part } = props
  return (
    <p>{part.name} {part.exercises}</p>
  )
}

const Total = (props) => {
  console.log(props)
  const { course } = props
  const total = course.parts.reduce((acc, parts) => acc + parts.exercises, 0)
  return (
    <div>
      <b>total of {total} exercises</b>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  const { course } = props
  return (
    <div>
      {course.parts.map(part =>
        <Part key={part.id} part={part}/>
      )}
    </div>
  )
}

const Course = (props) => {
  console.log(props)
  const { courses } = props
  return (
    <>
      {courses.map(course =>
        <div key={course.id}>
          <Header name={course.name}/>
          <Content course={course} />
          <Total course={course} />
        </div>
      )}
    </>
  )
}

const App = () => {
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course courses={course} />
}

export default App
