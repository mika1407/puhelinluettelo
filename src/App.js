import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([ { name: 'Arto Hellas' } ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
      event.preventDefault()

      const nameObject = {    
          name: newName,
      }
      setPersons([...persons,nameObject])
      setNewName("")

		// Alert jos on jo sama nimi
    const samePerson = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    )

    if (samePerson) {
      alert(`${newName} is already added to phonebook`)
      setPersons(persons)
      setNewName("")
      return
    }
  }

  const handleNameChange = (event) => {
      setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName} >
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person => (
            <p key={person.name}>{person.name}</p>
        ))}
    </div>
  )

}

export default App

