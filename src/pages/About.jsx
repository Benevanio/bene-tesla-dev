// src/pages/About.jsx
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaBook, FaLaptopCode, FaUserAlt } from "react-icons/fa";

function About() {
  return (
    <Container fluid className="about-container mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} className="about-col">
          <h2 className="about-title">Sobre Mim</h2>
          <p className="about-description">
            Olá! Eu sou o Benevanio, desenvolvedor de software com experiência em
            Mulesoft e Java, especializado em integração e sustentação de sistemas.
            Sou graduado em Engenharia de Software e adoro desafios técnicos.
          </p>
          <div className="about-icons">
            <div className="about-item">
              <FaUserAlt size={50} />
              <h5>Experiência</h5>
              <p>2+ anos de experiência em desenvolvimento de software</p>
            </div>
            <div className="about-item">
              <FaBook size={50} />
              <h5>Educação</h5>
              <p>Graduado em Engenharia de Software</p>
            </div>
            <div className="about-item">
              <FaLaptopCode size={50} />
              <h5>Tecnologias</h5>
              <p>Experiência em Mulesoft, Java, React, Node.js, e mais</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
