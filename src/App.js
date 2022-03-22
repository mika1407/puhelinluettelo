import React, { useState } from 'react'
import Person from "./components/Person"

const App = () => {
  const [ persons, setPersons] = useState([ { name: 'Arto Hellas' } ]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState("")

  const addName = (event) => {
      event.preventDefault()

      const nameObject = {    
          name: newName,
          number: newNumber,
      }
      setPersons([...persons,nameObject])
      setNewName("")
      setNewNumber("")

		// Alert jos on jo sama nimi
    const samePerson = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    )

    if (samePerson) {
      alert(`${newName} is already added to phonebook`)
      setPersons(persons)
      setNewName("")
      setNewNumber("")
      return
    }
  }

  const handleNameChange = (event) => {
      setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
		  setNewNumber(event.target.value)
	}
	

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName} >
        <div>name: <input value={newName} onChange={handleNameChange} /></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
         <Person persons={persons}/>
    </div>
  )

}

export default App

