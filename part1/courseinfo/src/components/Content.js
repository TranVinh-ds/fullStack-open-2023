import React from 'react';
import Part from './Part';

const Content = ({ course }) => {
  return (
    <div>
      <Part part={course[0].name} exercises={course[0].exercises} />
      <Part part={course[1].name} exercises={course[1].exercises} />
      <Part part={course[2].name} exercises={course[2].exercises} />
    </div>
  );
};

export default Content;
