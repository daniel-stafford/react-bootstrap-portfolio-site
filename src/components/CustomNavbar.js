import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const CustomNavbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/'>
              <i className='material-icons md-18'>home</i>
            </Nav.Link>
            <NavDropdown title='About' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/about'>Who am I?</NavDropdown.Item>
              <NavDropdown.Item href='/resume'>Resume</NavDropdown.Item>
              <NavDropdown.Item href='/education'>Education</NavDropdown.Item>
              <NavDropdown.Item href='/skills'>Skills</NavDropdown.Item>
              <NavDropdown.Item href='/references'>References</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/projects'>Projects</Nav.Link>
            <Nav.Link href='/contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default CustomNavbar
