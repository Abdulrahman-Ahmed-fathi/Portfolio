
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import projectImage1 from '../assets/project1.jpg';
import projectImage2 from '../assets/project2.jpg';
import projectImage3 from '../assets/project3.jpg';

const projects = [
  {
    title: 'Portfolio',
    description: 'React Website using latest version of React,Bootstrap,Es6.',
    image: projectImage1,
    link: '#',
  },
  {
    title: 'To Do List',
    description: 'Dynamic To Do List using html,Css,Javascrpt.',
    image: projectImage2,
    link: 'https://abdulrahman-ahmed-fathi.github.io/To_Do_List/',
  },
  {
    title: 'static wibsite ',
    description: 'simple static website using html & CSS .',
    image: projectImage3,
    link: '',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="my-5">
      <Container>
        <h1 className="text-center mb-5">My Projects</h1>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <a href={project.link} className="btn btn-primary">View Project</a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
