import React from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

import '../style/style.css';

const Education = () => {
  return (
    <>
      <Container fluid='true' className='container'>
        <h2>Education</h2>
        <div>
          <Button color='primary' id='toggler' style={{ marginBottom: '1rem' }}>
            WestView High School
          </Button>
          <UncontrolledCollapse toggler='#toggler'>
            <Card>
              <CardBody>
                <p>Diploma, 2003</p>
                <p>Portland, Oregon, USA</p>
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </div>
      </Container>
      <Container fluid='true' className='container'>
        <div>
          <Button
            color='primary'
            id='toggler1'
            style={{ marginBottom: '1rem' }}
          >
            University of Oregon
          </Button>
          <UncontrolledCollapse toggler='#toggler1'>
            <Card>
              <CardBody>
                <p>Bachelor of Arts in Latin, 2008</p>
                <p>Eugene, Oregon, USA</p>
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </div>
      </Container>
      <Container fluid='true' className='container'>
        <div>
          <Button
            color='primary'
            id='toggler2'
            style={{ marginBottom: '1rem' }}
          >
            JAMK{' '}
          </Button>
          <UncontrolledCollapse toggler='#toggler2'>
            <Card>
              <CardBody>
                <p>Bachelor of Healthcare in Nursing, 2017</p>
                <p>Jyväskylä, Finland</p>
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </div>
      </Container>
      <Container fluid='true' className='container'>
        <div>
          <Button
            color='primary'
            id='toggler3'
            style={{ marginBottom: '1rem' }}
          >
            Aalto University
          </Button>
          <UncontrolledCollapse toggler='#toggler3'>
            <Card>
              <CardBody>
                <p>Bachelor of Technology in Data Science, Expected 2020</p>
                <p>Helsinki, Finland</p>
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </div>
      </Container>
      <Breadcrumb className='crumb'>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item href='/about'>About</Breadcrumb.Item>
        <Breadcrumb.Item active>Education</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default Education;

/**
|--------------------------------------------------
- Collapse (describing each school you graduated from starting from your high school. Provide brief information about your degree, the location, and etc.)
|--------------------------------------------------
*/
