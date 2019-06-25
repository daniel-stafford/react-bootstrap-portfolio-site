import React from 'react';
import { Jumbotron, Breadcrumb, Container } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

const Home = () => {
  return (
    <>
      <Container className='container'>
        <Jumbotron>
          <h2>Hey, I'm Daniel!</h2>
          <p>Looking for a web developer? Get in touch!</p>
          <SocialIcon
            url='http://linkedin.com/in/danielrstafford'
            target='_blank'
          />
          <SocialIcon
            url='https://github.com/daniel-stafford'
            target='_blank'
          />
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
