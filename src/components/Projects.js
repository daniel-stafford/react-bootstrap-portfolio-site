import React from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import '../style/style.css';

const Projects = () => {
  return (
    <>
      <Container fluid='true' className='container'>
        <h2>Projects</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
          sapiente pariatur, suscipit voluptatum odio tempora!
        </p>
      </Container>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Projects?</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default Projects;
