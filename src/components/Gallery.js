import React from 'react';
import { Breadcrumb, Container, Carousel } from 'react-bootstrap';
import '../style/style.css';

const Gallery = () => {
  return (
    <>
      <Container fluid='true' className='container'>
        <h2>Gallery</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
          sapiente pariatur, suscipit voluptatum odio tempora!
        </p>

        <Carousel>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://cdn.pixabay.com/photo/2019/06/19/22/47/thundercloud-4285782_960_720.jpg'
              alt='First slide'
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://cdn.pixabay.com/photo/2019/06/20/05/51/squirrel-4286247_960_720.jpg'
              alt='Second slide'
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://cdn.pixabay.com/photo/2019/06/19/19/52/magpie-4285551_960_720.jpg'
              alt='Third slide'
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className='embed-responsive embed-responsive-16by9'>
          <iframe
            className='embed-responsive-item'
            src='//www.youtube.com/embed/zpOULjyy-n8?rel=0'
          />
        </div>
        <div className='embed-responsive embed-responsive-16by9'>
          <iframe
            className='embed-responsive-item'
            src='//www.youtube.com/embed/zpOULjyy-n8?rel=0'
          />
        </div>
        <div className='embed-responsive embed-responsive-16by9'>
          <iframe
            className='embed-responsive-item'
            src='//www.youtube.com/embed/zpOULjyy-n8?rel=0'
          />
        </div>
      </Container>

      <Breadcrumb className='crumb'>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item href='/about'>About</Breadcrumb.Item>
        <Breadcrumb.Item active>Gallery</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default Gallery;

/**
|--------------------------------------------------
- Carousel (photo gallery of some photos you took) (with controls, indicators, and captions)
- Embeds (few of your favorite music videos from YouTube)

|--------------------------------------------------
*/
