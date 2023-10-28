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

export default Course
