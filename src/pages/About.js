import React from 'react';
import { Breadcrumb, Container, Jumbotron, Image } from 'react-bootstrap';
import '../style/style.css';

const About = () => {
  return (
    <>
      <Container fluid='true' className='container'>
        <Jumbotron>
          <h2>Who am I?</h2>
          <ul>
            <li>I'm an American living and studying in Helsinki, Finland.</li>
            <li>
              Having lived in Finland for over five years, I consider sauna an
              essential part of life.
            </li>
            <li>
              I'm currently studying data science at Aalto University but have
              been learning web development for the past few years - love
              constant need to learn something new.
            </li>
            <li>
              When I'm not coding, you can find me playing Abba covers on the
              piano, popping endos on my mountain bike, or trying to learn the
              latest Finnish slang.
            </li>
          </ul>
          <Image src={require('../images/profile2.jpg')} />
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
