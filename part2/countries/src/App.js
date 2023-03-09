import { useState, useEffect } from 'react';
import axios from 'axios';
import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [showCountries, setShowCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setCountries(response.data);
    });
  }, []);

  const onChange = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
    setShowCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  };

  return (
    <div>
      find countries <input value={search} onChange={onChange} />
      <br />
      {showCountries.length > 10 ? (
        'Too many matches, specify another filter'
      ) : (
        <Countries
          showCountries={showCountries}
          setShowCountries={setShowCountries}
        />
      )}
      {showCountries.length === 1 ? (
        <CountryDetails country={showCountries[0]} />
      ) : null}
    </div>
  );
}

export default App;
