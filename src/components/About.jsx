
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profilePic from '../assets/profile.jpg'; // Import your profile picture

const About = () => {
  return (
    <section id="about" className="my-5">
      <Container>
        <Row className="align-items-center">
          <Col md={4}>
            <Image src={profilePic} roundedCircle fluid />
          </Col>
          <Col md={8}>
          <h1>About Me</h1>
            <p>
              Hi, I'm Abdulrahman Ahmed, a passionate computer science student with a strong interest in programming and technology. Currently, I am exploring various areas of computer science, including software development, data structures, and algorithms. My journey in this field has been driven by a desire to solve complex problems and create innovative solutions.
            </p>
            <p>
              Throughout my studies, I have gained experience in different programming languages and frameworks, and I am excited to continue expanding my knowledge and skills. I am eager to take on new challenges and contribute to impactful projects in the tech industry.
            </p>
            <p>
             <b>Feel free to connect with me or reach out if you have any questions or opportunities!</b> 
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
