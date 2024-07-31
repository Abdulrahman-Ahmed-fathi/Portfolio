import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <section id="contact" className="my-5">
      <Container>
        <h1 className="text-center mb-5">Contact Me</h1>
        <Row>
          <Col md={8} className="mx-auto">
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Your message"
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
        <div className="text-center mt-4">
          <h5>Connect with me:</h5>
          <a
            href="www.linkedin.com/in/abdulraman-ahmed-27b186255"
            className="mx-3"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <i className="fab fa-2x">01009107864</i>
          <a href="mailto:abdelramanahmed715@gmail.com" className="mx-3">
            <i className="fas fa-envelope fa-2x"></i>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
