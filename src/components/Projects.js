import React from 'react';
import { Breadcrumb, Container, Card, Button } from 'react-bootstrap';
import '../style/style.css';

const Projects = () => {
  return (
    <>
      <Container fluid='true' className='container'>
        <h2>Projects</h2>
        <Card className='text-center'>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant='primary'>Go somewhere</Button>
          </Card.Body>
          <Card.Footer className='text-muted'>2 days ago</Card.Footer>
        </Card>
      </Container>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Projects</Breadcrumb.Item>
      </Breadcrumb>
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
