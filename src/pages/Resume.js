import React from 'react';
import { Breadcrumb, Container, Row, Table } from 'react-bootstrap';
import '../style/style.css';
import Pdf from '../docs/Profile.pdf';
import Doc from '../docs/Resume.docx';
const Resume = () => {
  return (
    <>
      <Container fluid='true' className='container'>
        <h2>Resume</h2>
        <Row>
          <iframe
            title='My resume'
            allowFullScreen
            allowTransparency
            src={require('../docs/Profile.pdf')}
            style={{ height: '400px' }}
          />
        </Row>
        <Row>
          <a href={Pdf} target='_blank' rel='noopener noreferrer'>
            Download as PDF
          </a>
        </Row>
        <Row>
          <a href={Doc} target='_blank' rel='noopener noreferrer'>
            Download as Word Doc
          </a>
        </Row>
      </Container>
      <Container>
        <Table striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan='2'>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item href='/about'>About</Breadcrumb.Item>
        <Breadcrumb.Item active>Resume</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default Resume;

/**
|--------------------------------------------------
- Button Group (for downloading your CV in two Word and PDF formats) DONE
- Tables (transcript information)

|--------------------------------------------------
*/
