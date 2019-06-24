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
      <div class='container'>
        <button
          type='button'
          class='btn btn-primary'
          data-toggle='modal'
          data-target='#myModal'
        >
          Open modal
        </button>
        <div class='modal' id='myModal'>
          <div class='modal-dialog'>
            <div class='modal-content'>
              <div class='modal-header bg-primary'>
                <h4 class='modal-title text-white'>Custom sized Modal</h4>
                <button type='button' class='close' data-dismiss='modal'>
                  &times;
                </button>
              </div>

              <div class='modal-body'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem corrupti tenetur consequuntur autem quos laudantium.
              </div>

              <div class='modal-footer'>
                <button
                  type='button'
                  class='btn btn-primary'
                  data-dismiss='modal'
                >
                  OK
                </button>
                <button
                  type='button'
                  class='btn btn-success'
                  data-dismiss='modal'
                >
                  Save
                </button>
                <button
                  type='button'
                  class='btn btn-secondary'
                  data-dismiss='modal'
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
