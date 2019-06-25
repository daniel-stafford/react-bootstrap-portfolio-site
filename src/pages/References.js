import React from 'react';
import { Breadcrumb, Container, Card } from 'react-bootstrap';
import '../style/style.css';

const References = () => {
  return (
    <>
      <Container fluid='true' className='container'>
        <h2>References</h2>
        <Card>
          <Card.Header />
          <Card.Body>
            <blockquote className='blockquote mb-0'>
              <p>He's pretty tolerable, I guess.</p>
              <footer className='blockquote-footer'>My girlfriend</footer>
            </blockquote>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header />
          <Card.Body>
            <blockquote className='blockquote mb-0'>
              <p>He makes good coffee.</p>
              <footer className='blockquote-footer'>Former roommate</footer>
            </blockquote>
          </Card.Body>
        </Card>
      </Container>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item href='/about'>About</Breadcrumb.Item>
        <Breadcrumb.Item active>References</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default References;

/**
|--------------------------------------------------
(Be creative in this page)

|--------------------------------------------------
*/
