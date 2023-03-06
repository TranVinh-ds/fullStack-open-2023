import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total';

const Course = ({ course }) => {
  const { id, name, parts } = course;
  return (
    <>
      <Header title={name} />
      <Content id={id} parts={parts} />
      <Total parts={parts} />
    </>
  );
};

export default Course;
