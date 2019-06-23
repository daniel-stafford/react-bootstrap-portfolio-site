import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button, Breadcrumb, Container } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Container className='container'>
        <Jumbotron>
          <h2>Moi! I'm Daniel</h2>
          <p>I'm a web developer living in Helsinki, Finland.</p>
        </Jumbotron>
        <Link to='/about'>
          <Button variant='primary'>About</Button>
        </Link>
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
