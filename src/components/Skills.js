import React from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import '../style/style.css';

const Skills = () => {
  return (
    <>
      <Container fluid='true' className='container'>
        <h2>Skills</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
          sapiente pariatur, suscipit voluptatum odio tempora!
        </p>
      </Container>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item href='/about'>About</Breadcrumb.Item>
        <Breadcrumb.Item active>Skills</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default Skills;
