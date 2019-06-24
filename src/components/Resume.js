import React from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import '../style/style.css';

const Resume = () => {
  return (
    <>
      <Container fluid='true' className='container'>
        <h2>Resume</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
          sapiente pariatur, suscipit voluptatum odio tempora!
        </p>
      </Container>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item href='/about'>About</Breadcrumb.Item>
        <Breadcrumb.Item active>Resume</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default Resume;

/**
|--------------------------------------------------
- Button Group (for downloading your CV in two Word and PDF formats)
- Tables (transcript information)

|--------------------------------------------------
*/