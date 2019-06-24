import React from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import '../style/style.css';

const NoMatch = () => {
  return (
    <>
      <Container fluid='true' className='container'>
        <h2>Page Not Found?</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
          sapiente pariatur, suscipit voluptatum odio tempora!
        </p>
      </Container>
      <Breadcrumb className='crumb'>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Page Not Found</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default NoMatch;
