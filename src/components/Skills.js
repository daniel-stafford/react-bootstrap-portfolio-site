import React from 'react';
import { Breadcrumb, Container, Badge, ProgressBar } from 'react-bootstrap';
import '../style/style.css';

const Skills = () => {
  return (
    <>
      <Container fluid='true' className='container'>
        <h2>Skills</h2>
        <div>
          <h1>
            Example heading <Badge variant='secondary'>New</Badge>
          </h1>
          <h2>
            Example heading <Badge variant='primary'>New</Badge>
          </h2>
          <h3>
            Example heading <Badge variant='info'>New</Badge>
          </h3>
          <h4>
            Example heading <Badge variant='danger'>New</Badge>
          </h4>
          <h5>
            Example heading <Badge variant='secondary'>New</Badge>
          </h5>
          <h6>
            Example heading <Badge variant='primary'>New</Badge>
          </h6>
        </div>
      </Container>
      <Container>
        <div>
          <ProgressBar striped variant='success' now={40} />
          <ProgressBar striped variant='info' now={20} />
          <ProgressBar striped variant='warning' now={60} />
          <ProgressBar striped variant='danger' now={80} />
        </div>
      </Container>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item href='/about'>About</Breadcrumb.Item>
        <Breadcrumb.Item active>Skills</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default Skills;

/**
|--------------------------------------------------
- Badge (for new skills during the last year you learned)
- Progress (for each skill show the progress and according to the progress choose a style according to it)

|--------------------------------------------------
*/
