import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const filteredPersons = persons.filter((person) =>
    person.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumChange = (e) => {
    setNewNumber(e.target.value);
  };

  const removedPerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService.remove(id).then((response) => {
        const updatedPersons = persons.filter((person) => person.id !== id);
        setPersons(updatedPersons);
      });
    }
  };

  const addPerson = (e) => {
    e.preventDefault();

    const personObj = {
      name: newName,
      number: newNumber,
      // id: persons.length + 1,
    };

    const currentName = persons.filter((person) => person.name === newName);

    if (currentName.length === 0) {
      personService.create(personObj).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
      });
    } else {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        personService
          .update(currentName[0].id, personObj)
          .then((updatedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== currentName[0].id ? person : updatedPerson
              )
            );
          });
      }
    }
    setNewName('');
    setNewNumber('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} setSearch={setSearch} />
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumChange={handleNumChange}
      />
      <h2>Numbers</h2>
      <Persons
        filteredPersons={filteredPersons}
        newName={newName}
        removedPerson={removedPerson}
      />
    </div>
  );
};

export default App;
