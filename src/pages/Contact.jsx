// src/pages/Contact.jsx
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <Container fluid className="contact-container">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} className="contact-col">
          <h2 className="contact-title">Entre em Contato</h2>
          <p className="contact-description">
            Estou sempre disponível para bater um papo sobre oportunidades ou tirar suas dúvidas. Sinta-se à vontade para me contatar através das redes sociais abaixo!
          </p>
          <div className="social-links">
            <a 
              href="https://www.linkedin.com/in/bene-tesla/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <FaLinkedin size={50} />
            </a>
            <a 
              href="https://wa.me/5519998283835?text=Ol%C3%A1!%20Por%20gentileza,%20envie%20sua%20mensagem%20com%20o%20contexto%20do%20assunto.%20Assim,%20poderei%20ajud%C3%A1-lo(a)%20de%20forma%20mais%20r%C3%A1pida%20e%20eficiente.%20Obrigado!" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <FaWhatsapp size={50} />
            </a>
            <a 
              href="https://www.instagram.com/bene_tesla_dev/?next=%2Fpondsidehk%2Ffeed%2Ffeed%2F" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <FaInstagram size={50} />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
