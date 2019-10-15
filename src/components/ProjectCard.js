import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import Modal from 'react-responsive-modal'

import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'

export default class ProjectCard extends Component {
  state = {
    open: false
  }

  onOpenModal = () => {
    this.setState({ open: true })
  }

  onCloseModal = () => {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state
    return (
      <div>
        <div className='projectContainer'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={this.props.imageCardPath} />
            <Card.Body>
              <Card.Title>{this.props.cardTitle}</Card.Title>
              <button
                type='button'
                className='btn btn-primary'
                data-toggle='modal'
                data-target='#myModal'
                onClick={this.onOpenModal}
              >
                Learn More
              </button>
              <Modal open={open} center onClose={this.onCloseModal}>
                <h5 style={{ margin: '10px' }}>
                  <ModalHeader>{this.props.cardTitle}</ModalHeader>
                  <ModalBody>{this.props.modalBody}</ModalBody>
                  <ModalFooter>
                    <button
                      type='button'
                      className='btn btn-warning'
                      data-dismiss='modal'
                    >
                      <a
                        className='text-white'
                        href={this.props.sourceCode}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Live Demo
                      </a>
                    </button>
                    <button
                      id='viewCode'
                      type='button'
                      className='btn btn-success'
                      data-dismiss='modal'
                      href={this.props.herokuCode}

                    >
                      <a
                        className='text-white'
                        href={this.props.sourceCode}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        View the Code
                      </a>
                    </button>
                  </ModalFooter>
                </h5>
              </Modal>
            </Card.Body>
          </Card>
        </div>
      </div>
    )
  }
}
