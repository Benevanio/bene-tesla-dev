// src/components/Footer.jsx
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white py-3 mt-auto">
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; 2025 @Bene_Tesla_DEV - Todos os direitos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
