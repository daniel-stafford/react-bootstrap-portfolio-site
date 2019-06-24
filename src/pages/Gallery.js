import React from 'react';
import { Breadcrumb, Container, Carousel } from 'react-bootstrap';
import '../style/style.css';

const Gallery = () => {
  return (
    <>
      <Container fluid='true' className='container'>
        <h2>Gallery</h2>
        <p>Somewhat random photos and music videos.</p>
        <Carousel>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={require('../images/carousel/hanko.JPG')}
              alt='First slide'
            />
            <Carousel.Caption>
              <h3>Hanko</h3>
              <p>Southernmost point of Finland</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={require('../images/carousel/dogs2.jpg')}
              alt='Second slide'
            />

            <Carousel.Caption>
              <h3>Dogs</h3>
              <p>A couple of dogs I know</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={require('../images/carousel/lunch.jpg')}
              alt='Third slide'
            />

            <Carousel.Caption>
              <h3>Student Lunch</h3>
              <p>My favorite thing about Finland</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className='embed-responsive embed-responsive-4by3'>
          <iframe
            title='music video'
            className='embed-responsive-item'
            src='//www.youtube.com/embed/IMyqasy2Lco'
          />
        </div>
        <div className='embed-responsive embed-responsive-4by3'>
          <iframe
            title='music video'
            className='embed-responsive-item'
            src='//www.youtube.com/embed/FqJdzYY_Fas'
          />
        </div>
        <div className='embed-responsive embed-responsive-4by3'>
          <iframe
            title='music video'
            className='embed-responsive-item'
            src='//www.youtube.com/embed/YbsvFMEvPo4'
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
- Carousel (photo gallery of some photos you took) (with controls, indicators, and captions) DONE
- Embeds (few of your favorite music videos from YouTube) DONE

|--------------------------------------------------
*/
