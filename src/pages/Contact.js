import React from 'react';
// import { Breadcrumb, Container, Form, Button, Col } from 'react-bootstrap';
import '../style/style.css';
import { Form, Container, Button, Breadcrumb } from 'react-bootstrap';
import axios from 'axios';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
    await axios('/api/form', {
      fruit: this.state.value
    });
  }

  render() {
    return (
      <>
        <Container fluid='true' className='container'>
          <h2>Contact</h2>
          <Form>
            <Form.Group controlId='formBasicName' style={{ width: '80%' }}>
              <Form.Label>Name</Form.Label>
              <Form.Control type='name' placeholder='Enter name' />
            </Form.Group>
            <Form.Group controlId='formBasicEmail' style={{ width: '80%' }}>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId='formBasicMessage' style={{ width: '80%' }}>
              <Form.Label>Message</Form.Label>
              <Form.Control type='message' placeholder='Message' />
            </Form.Group>
            <Form.Group controlId='formBasicChecbox'>
              <Form.Check type='checkbox' label='Check me out' />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Container>
        <Breadcrumb className='crumb'>
          <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
          <Breadcrumb.Item href='/about'>About</Breadcrumb.Item>
          <Breadcrumb.Item active>Who Am I?</Breadcrumb.Item>
        </Breadcrumb>
      </>
    );
  }
}

export default Contact;

/**
|--------------------------------------------------
- Form
- Input group (name, email) DONE
- Radio button (for gender)
- Dropdowns (in Finland or outside of Finland)
- Buttons (submit and refresh)
- Alert (after submission show success style, if fills were not filled, show danger style)
- Including your social pages and possibly GitHub account in your own style

|--------------------------------------------------
*/
