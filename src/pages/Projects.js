import React from 'react';
import { Breadcrumb, Container, Row } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';

import '../style/style.css';

const Projects = () => {
  return (
    <>
      <Container fluid='true' className='container'>
        <h2>Projects</h2>
        <Row>
          <ProjectCard
            imageCardPath={require('../images/projects/adoption.png')}
            cardTitle='Animal Adoption'
            modalBody='A simple React application developed in The Shortcut React Club with another developer. A good example of quick, collorbarative work.  To login = Username: user Password: password'
            sourceCode='https://github.com/daniel-stafford/Animal-Tinder'
            herokuCode="https://stafford-animal-adoption.herokuapp.com/"
          />

          <ProjectCard
            imageCardPath={require('../images/projects/numbers.png')}
            cardTitle='Number Facts Generator'
            modalBody='A simple React application that fetches facts about numbers from an external API.'
            sourceCode='https://github.com/daniel-stafford/Math-React'
          />
          <ProjectCard
            imageCardPath={require('../images/projects/lunch.png')}
            cardTitle='Student Lunch Finder'
            modalBody='A Scala text-based application that allows student to find a lunch at Aalto University.  Includes XML parsing, filtering, and OOP'
            sourceCode='https://github.com/daniel-stafford/Aalto-Lunch-Finder'
          />
          <ProjectCard
            imageCardPath={require('../images/projects/portfolio.png')}
            cardTitle='Portfolio Site'
            modalBody='A portfolio site developed from scratch using React and Raect-Bootstrap'
            sourceCode='https://github.com/daniel-stafford/react-boostrap-portfolio-site'
          />
        </Row>
        <Breadcrumb>
          <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Projects</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
    </>
  );
};

export default Projects;

/**
|--------------------------------------------------
- Cards (to show each item)
- Modal (fully describing each project, with header, title, body, footer, and close button)

|--------------------------------------------------
*/
