
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import dreamImage1 from '../assets/dream1.jpg';
import dreamImage2 from '../assets/dream2.jpg';


const dreams = [
  {
    title: 'Best job',
    description: 'I hope to get the greatest programming job .',
    image: dreamImage1,
  },
  {
    title: 'all Dreams ',
    description: '',
    image: dreamImage2,
  },

];

const Dreams = () => {
  return (
    <section id="dreams" className="my-5">
      <Container>
        <h1 className="text-center mb-5">My Dreams</h1>
        <Row>
          {dreams.map((dream, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                <Card.Img variant="top" src={dream.image} />
                <Card.Body>
                  <Card.Title>{dream.title}</Card.Title>
                  <Card.Text>{dream.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Dreams;
