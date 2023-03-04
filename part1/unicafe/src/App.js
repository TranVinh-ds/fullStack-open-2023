import { useState } from 'react';

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      {text === 'positive' ? (
        <td>
          {text} {value} %
        </td>
      ) : (
        <td>
          {text} {value}
        </td>
      )}
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const All = good + neutral + bad;
  const Average = All > 0 ? fixedToTwo((good - bad) / All) : 0;
  const Positive = All > 0 ? fixedToTwo((good / All) * 100) : 0;

  return All === 0 ? (
    'No feedback given'
  ) : (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={All} />
        <StatisticLine text="average" value={Average} />
        <StatisticLine text="positive" value={Positive} />
      </tbody>
    </table>
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
    <>
      <h1>give feedback</h1>
      <Button
        onClick={() => setGood((prevState) => prevState + 1)}
        text="Good"
      />{' '}
      <Button
        onClick={() => setNeutral((prevState) => prevState + 1)}
        text="Neutral"
      />{' '}
      <Button onClick={() => setBad((prevState) => prevState + 1)} text="Bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
