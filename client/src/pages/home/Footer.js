import React, { useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BuyModal } from "../../components/modal/BuyModal";

export const Footer = () => {
  const [modalBuy, setModalBuy] = useState(false);

  const navigate = useNavigate();

  const handleCheck = () => {
    setModalBuy(true);
  };

  return (
    <>
      <Container fluid>
        {/* FOOTER TABLET Y PORTATIL */}
        <Row className="footer ">
          <Col>
            <Row>
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
                  <a
                    href="https://www.instagram.com/coolx.earth/"
                    target="_blank"
                    alt="Instagram icon"
                  >
                    <img src="/assets/social/instagram.svg" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/coolx/"
                    target="_blank"
                    alt="LinkedIn icon"
                  >
                    <img src="/assets/social/linkedIn.svg" />
                  </a>
                </div>
              </Col>
            </Row>

            <Row>
              <Col className="legal">
                <p>© COPYRIGHT 2022 COOLX </p>
                <p>|</p>
                <p>TERMS AND CONDITIONS</p>
                <p>|</p>
                <p>PRIVACYPOLICY</p>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* FOOTER MOBILE */}
        <Row className="footer-mobile">
          <Col className="pw-0">
            <Row className="f-mobile-bar">
              <Col xs={2} className="p-0 text-center">
                <Button type="button" onClick={() => navigate(-1)}>
                  <img src="/assets/icons/undo.svg" alt="undo icon" />
                </Button>
              </Col>
              <Col xs={3} className="pl-0 pr-3 text-end">
                <a
                  href="https://www.instagram.com/coolx.earth/"
                  target="_blank"
                >
                  <img
                    src="/assets/social/instagram.svg"
                    alt="Instagram icon"
                  />
                </a>
              </Col>
              <Col xs={3} className="p-0 text-center">
                <a
                  href="https://www.linkedin.com/company/coolx/"
                  target="_blank"
                >
                  <img src="/assets/social/linkedIn.svg" alt="LinkedIn icon" />
                </a>
              </Col>
              <Col
                xs={4}
                className="p-0 text-center d-flex justify-content-center"
              >
                <Button onClick={handleCheck}>Agregar</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <BuyModal onHide={() => setModalBuy(false)} show={modalBuy} />
    </>
  );
};
