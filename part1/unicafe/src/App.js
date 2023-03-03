import { useState } from 'react';

const Statistics = ({ good, neutral, bad }) => {
  const All = good + neutral + bad;
  const Average = All > 0 ? fixedToTwo((good - bad) / All) : 0;
  const Positive = All > 0 ? fixedToTwo((good / All) * 100) : 0;

  return All === 0 ? (
    'No feedback given'
  ) : (
    <>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {All}</p>
      <p>average {Average}</p>
      <p>positive {Positive} %</p>
    </>
  );
};

const fixedToTwo = (num) => {
  return Math.round(num * 100 + Number.EPSILON) / 100;
};

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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
