import React from 'react';

const Persons = ({ filteredPersons, newName, removedPerson }) => {
  return (
    <>
      {filteredPersons.map((person) => (
        <div key={person.id}>
          {/* {person.name === newName
            ? alert(`${newName} is already added to phonebook`)
            : person.name}{' '} */}
          {person.name} {person.number}{' '}
          <button onClick={() => removedPerson(person.id, person.name)}>
            delete
          </button>
        </div>
      ))}
    </>
  );
};

export default Persons;
