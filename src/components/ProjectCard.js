import React from 'react';
import { Card } from 'react-bootstrap';

function ProjectCard(props) {
  return (
    <div className='projectContainer'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={props.imageCardPath} />
        <Card.Body>
          <Card.Title>{props.cardTitle}</Card.Title>
          <button
            type='button'
            className='btn btn-primary'
            data-toggle='modal'
            data-target='#myModal'
          >
            Learn more{' '}
          </button>
          <div className='modal' id='myModal'>
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header bg-primary'>
                  <h4 className='modal-title text-white'>Custom sized Modal</h4>
                  <button type='button' className='close' data-dismiss='modal'>
                    &times;
                  </button>
                </div>

                <div className='modal-body'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorem corrupti tenetur consequuntur autem quos laudantium.
                </div>

                <div className='modal-footer'>
                  <button
                    type='button'
                    className='btn btn-secondary'
                    data-dismiss='modal'
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProjectCard;
