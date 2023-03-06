import React from 'react';

const Persons = ({ filteredPersons, newName }) => {
  return (
    <>
      {filteredPersons.map((person) => (
        <div key={person.id}>
          {person.name === newName
            ? alert(`${newName} is already added to phonebook`)
            : person.name}{' '}
          {person.number}
        </div>
      ))}
    </>
  );
};

export default Persons;
