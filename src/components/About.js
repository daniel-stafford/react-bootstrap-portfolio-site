import React from 'react';
import { Breadcrumb, Container, Jumbotron, Image } from 'react-bootstrap';
import '../style/style.css';

const About = () => {
  return (
    <>
      <Container fluid='true' className='container'>
        <Jumbotron>
          <h2>Moi! I'm Daniel</h2>
          <p>I'm a web developer living in Helsinki, Finland.</p>
          <Image src={require('../images/profile2.jpg')} thumbnail />
        </Jumbotron>
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

/**
|--------------------------------------------------
- Jumbotron (introducing yourself) DONE
- Images (proper style for your photo) DONE

|--------------------------------------------------
*/
