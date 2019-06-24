import React from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import Collapse from '../components/Collapse';
import '../style/style.css';

const Education = () => {
  return (
    <>
      <Container fluid='true' className='container'>
        <h2>Education</h2>
        <Collapse
          buttonColor='danger'
          toggleID='one'
          school='Westview High School'
          degree='Diploma, 2003'
          location='Portland, Oregon, USA'
        />
        <Collapse
          buttonColor='primary'
          toggleID='two'
          school='University of Oregon'
          degree='Bachelor of Arts in Latin, 2008'
          location='Eugene, Oregon, USA'
        />
        <Collapse
          buttonColor='secondary'
          toggleID='three'
          school='Jyväskylä University of Applied Sciences'
          degree='Bachelor of Healthcare in Nursing, 2017'
          location='Jyväskylä, Finland'
        />
        <Collapse
          buttonColor='info'
          toggleID='four'
          school='Aalto University'
          degree='Bachelor of Technology in Data Science, Expected 2021'
          location='Helsinki, Finland'
        />
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
- Collapse (describing each school you graduated from starting from your high school. Provide brief information about your degree, the location, and etc.) DONE!
|--------------------------------------------------
*/
