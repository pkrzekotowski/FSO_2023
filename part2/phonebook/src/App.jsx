import { useState } from 'react'

const Filter = (props) => {
console.log(props)
const { filter, handleFilterChange } = props

  return (
    <div>
      filter shown with <input
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  )
}

const PersonForm = (props) => {
  console.log(props)
  const { addName, newName, handleNameChange, newNumber, handleNumberChange } = props

  return (
    <div>
      <form onSubmit={addName}>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
     </form>
    </div>
  )
}

const Persons = (props) => {
  console.log(props)
  const { persons, filter } = props
  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return(
    <div>
      {filteredPersons.map(person =>
        <Person key={person.id} person={person} />
      )}
   </div>
  )
}

const Person = (props) => {
  console.log(props)
  const { person } = props

  return (
    <div>{person.name} {person.number} </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addName = (e) => {
    e.preventDefault()

    const nameExists = persons.some(person => person.name.toLowerCase() === newName.toLowerCase())
    console.log('does person exists...', nameExists)

    if (nameExists){
      alert(`${newName} is already in the phonebook`)
    } else {

      const newObject = {
        name: newName,
        number: newNumber,
        id: persons.length +1,
      }
      console.log(newObject)

      setPersons(persons.concat(newObject))
      console.log('current persons array is..', persons)

    }

    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
    console.log(newName)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
    console.log(newNumber)
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
    console.log(filter)

  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h3>Add a new</h3>

      <PersonForm
      addName={addName}
      newName={newName}
      handleNameChange={handleNameChange}
      newNumber={newNumber}
      handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>

      <Persons persons={persons} filter={filter} />
    </div>
  )
}

export default App
