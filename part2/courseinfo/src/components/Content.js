import React from 'react';
import Header from './Header';
import Part from './Part';
import Total from './Total';

const Content = ({ course }) => {
  return (
    <div>
      <Header title={course.name} />
      {course.parts.map((part) => (
        <div>
          <Part key={part.id} part={part} />
        </div>
      ))}
      <Total course={course} />
    </div>
  );
};

export default Content;
