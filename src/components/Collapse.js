import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

function Collapse(props) {
  return (
    <div>
      <Button
        color={props.buttonColor}
        id={props.toggleID}
        style={{ marginBottom: '1rem' }}
      >
        {props.school}
      </Button>
      <UncontrolledCollapse toggler={props.toggleID}>
        <Card>
          <CardBody>
            <p>{props.degree}</p>
            <p>{props.location}</p>
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
  );
}

export default Collapse;
