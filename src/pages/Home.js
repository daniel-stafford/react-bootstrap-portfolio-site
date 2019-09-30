import React from 'react'
import { Jumbotron, Breadcrumb, Container, Image } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons'
import profilePic from '../images/profile3.jpeg'

const Home = () => {
  return (
    <>
      <Jumbotron>
        <h2>Terve, I'm Daniel!</h2>
        <p>
          Looking for a web developer in Helsinki? Check out my projects and get
          in touch!
        </p>
        <Image src={profilePic} />
      </Jumbotron>
      <Container className='container'>
        <SocialIcon
          url='http://linkedin.com/in/danielrstafford'
          target='_blank'
        />
        <SocialIcon url='https://github.com/daniel-stafford' target='_blank' />
      </Container>

      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
      </Breadcrumb>
    </>
  )
}

export default Home

/**
|--------------------------------------------------
 (Be creative in this page)

|--------------------------------------------------
*/
