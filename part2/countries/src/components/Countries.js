import React from 'react';

const Countries = ({ showCountries, setShowCountries }) => {
  return showCountries.map((country) => (
    <div key={country.name.official}>{country.name.common}</div>
  ));
};

export default Countries;
