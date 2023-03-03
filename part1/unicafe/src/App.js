import { useState } from 'react';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood((prevState) => prevState + 1)}>
        Good
      </button>{' '}
      <button onClick={() => setNeutral((prevState) => prevState + 1)}>
        Neutral
      </button>{' '}
      <button onClick={() => setBad((prevState) => prevState + 1)}>Bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  );
};

export default App;
