
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const skills = [
  { name: 'JavaScript'},
  { name: 'React' },
  { name: 'CSS' },
  { name: 'HTML' },
  { name: 'Node.js' },
  { name: 'Python'},
  { name: 'C++'},
  { name: 'PHP'},
  { name: 'Typscrip'},
  { name: 'SQL'},
];

const Skills = () => {
  return (
    <section id="skills" className="my-5">
      <Container>
        <h1 className="text-center mb-5">My Skills</h1>
        <Row>
          {skills.map((skill, index) => (
            <Col md={4} key={index} className="mb-4">
              <div className="skill">
                <h4>{skill.name}</h4>
                
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
