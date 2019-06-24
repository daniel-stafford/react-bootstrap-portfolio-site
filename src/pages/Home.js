import React from 'react';
import { Jumbotron, Breadcrumb, Container } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Container className='container'>
        <Jumbotron>
          <h2>Hey, I'm Daniel!</h2>
          <p>Looking for a web developer? Get in touch!</p>
        </Jumbotron>
      </Container>

      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default Home;

/**
|--------------------------------------------------
 (Be creative in this page)

|--------------------------------------------------
*/
