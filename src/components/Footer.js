import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Address: 29  CARRIAGE, BRISTOL, CT, USA</h3>
        </Col>
        <Col md="4" className="footer-body">
          <h3>Phone Number: +1 8132350588</h3>
        </Col>
        <Col md="4" className="footer-body">
          <h3>Email: orion.senior.dev@gmail.com</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
