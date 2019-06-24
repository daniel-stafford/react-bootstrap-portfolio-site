import React from 'react';
import { ProgressBar, Badge } from 'react-bootstrap';

function SkillBadge(props) {
  return (
    <div>
      <div className='badgeContainer'>
        <h3>
          <Badge variant={props.badgeColor}>{props.skillName}</Badge>
          <ProgressBar
            striped
            variant={props.progressColor}
            animated
            now={props.progress}
          />
        </h3>
      </div>
    </div>
  );
}

export default SkillBadge;
