import React from 'react';
import { Breadcrumb, Container, Row } from 'react-bootstrap';
import SkillBadge from '../components/SkillBadge';
import '../style/style.css';

const Skills = () => {
  return (
    <>
      <Container fluid='true' className='container'>
        <h2>Skills</h2>
        <Row className='badgeRow'>
          <SkillBadge
            badgeColor='primary'
            skillName='HTML'
            progressColor='success'
            progress='90'
          />
          <SkillBadge
            badgeColor='success'
            skillName='CSS'
            progressColor='success'
            progress='70'
          />
          <SkillBadge
            badgeColor='danger'
            skillName='JavaScript'
            progressColor='success'
            progress='90'
          />
          <SkillBadge
            badgeColor='warning'
            skillName='React'
            progressColor='success'
            progress='60'
          />
          <SkillBadge
            badgeColor='info'
            skillName='Node'
            progressColor='success'
            progress='30'
          />
          <SkillBadge
            badgeColor='primary'
            skillName='Git'
            progressColor='success'
            progress='70'
          />
          <SkillBadge
            badgeColor='light'
            skillName='MongoDB'
            progressColor='success'
            progress='30'
          />
          <SkillBadge
            badgeColor='secondary'
            skillName='Scala'
            progressColor='success'
            progress='40'
          />
        </Row>
      </Container>

      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item href='/about'>About</Breadcrumb.Item>
        <Breadcrumb.Item active>Skills</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default Skills;

/**
|--------------------------------------------------
- Badge (for new skills during the last year you learned) Done
- Progress (for each skill show the progress and according to the progress choose a style according to it)

|--------------------------------------------------
*/
