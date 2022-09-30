import React from "react";
import { Row, Col, Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <Container fluid className="p-0">
      <Row className="footer ">
        <Col md={4} className="footer_logo">
          <img src="/assets/branding/logo_white.svg" />
          <p>Enviromental Services</p>
        </Col>

        <Col md={4} className="footer_contacto">
          <h4>Contacta con nosotros</h4>

          <div className="mail">
            <img src="/assets/icons/mail.svg" />
            <p>coolx.earth@gmail.com</p>
          </div>

          <div className="mail">
            <img src="/assets/icons/call.svg" />
            <p>+ 34 3478543874</p>
          </div>
        </Col>

        <Col md={4} className="footer_rrss">
          <div>
            <img src="/assets/social/instagram.svg" />
            <img src="/assets/social/linkedIn.svg" />
          </div>
        </Col>
        <Row className="legacy">
          <div className="legal">
            <p>© COPYRIGHT 2022 COOLX </p>
            <p>|</p>
            <p>TERMS AND CONDITIONS</p>
            <p>|</p>
            <p>PRIVACYPOLICY</p>
          </div>
        </Row>
      </Row>
    </Container>
  );
};
