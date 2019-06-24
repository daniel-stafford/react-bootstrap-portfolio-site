import React from 'react';
import { Breadcrumb, Container, Form, Button, Col } from 'react-bootstrap';
import '../style/style.css';

const Contact = () => {
  return (
    <>
      <Container fluid='true' className='container'>
        <h2>Contact</h2>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId='formGridAddress1'>
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder='1234 Main St' />
          </Form.Group>

          <Form.Group controlId='formGridAddress2'>
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder='Apartment, studio, or floor' />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId='formGridCity'>
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridState'>
              <Form.Label>State</Form.Label>
              <Form.Control as='select'>
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId='formGridZip'>
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Group id='formGridCheckbox'>
            <Form.Check type='checkbox' label='Check me out' />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Container>
      <Breadcrumb className='crumb'>
        <Breadcrumb.Item href='#'>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Contact</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default Contact;

/**
|--------------------------------------------------
- Form
- Input group (name, email)
- Radio button (for gender)
- Dropdowns (in Finland or outside of Finland)
- Buttons (submit and refresh)
- Alert (after submission show success style, if fills were not filled, show danger style)
- Including your social pages and possibly GitHub account in your own style

|--------------------------------------------------
*/
