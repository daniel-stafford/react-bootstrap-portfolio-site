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
            cardTitle='Animal Adaoption'
          />
          <ProjectCard
            imageCardPath={require('../images/projects/numbers.png')}
            cardTitle='Number Facts Generator'
          />
          <ProjectCard
            imageCardPath={require('../images/projects/lunch.png')}
            cardTitle='Student Lunch Finder'
          />
          <ProjectCard
            imageCardPath={require('../images/projects/portfolio.png')}
            cardTitle='Portfolio Site'
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
