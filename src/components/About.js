import React from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import '../style/style.css';

const About = () => {
  return (
    <>
      <Container fluid='true' className='container'>
        <h2>About</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
          sapiente pariatur, suscipit voluptatum odio tempora!
        </p>
      </Container>
      <Breadcrumb className='crumb'>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item href='/about'>About</Breadcrumb.Item>
        <Breadcrumb.Item active>Who Am I?</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default About;
