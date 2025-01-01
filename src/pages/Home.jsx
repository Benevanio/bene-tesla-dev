// src/pages/Home.jsx
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

function Home() {
  return (
    <Container fluid className="home-container mt-5"> {/* Adicionada margem superior */}
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} className="home-col">
          <h2 className="home-title">Bem-vindo ao meu Portfólio</h2>
          <p className="home-description">
            Olá! Sou Benevanio, desenvolvedor de software com especialização em
            Mulesoft, Java e Frontend com React. Tenho experiência sólida em
            integração de sistemas e desenvolvimento full-stack.
          </p>
          <Button variant="warning" href="https://github.com/Benevanio" target="_blank">
            <FaGithub size={20} /> GitHub
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
