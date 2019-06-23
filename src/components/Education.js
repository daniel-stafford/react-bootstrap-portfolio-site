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
            Toggle
          </Button>
          <UncontrolledCollapse toggler='#toggler'>
            <Card>
              <CardBody>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt magni, voluptas debitis similique porro a molestias
                consequuntur earum odio officiis natus, amet hic, iste sed
                dignissimos esse fuga! Minus, alias.
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
