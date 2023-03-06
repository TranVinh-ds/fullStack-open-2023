import React from 'react';
import Header from './Header';
import Content from './Content';

const Course = ({ course }) => {
  const { id, name, parts } = course;
  return (
    <>
      <Header title={name} />
      <Content id={id} parts={parts} />
    </>
  );
};

export default Course;
