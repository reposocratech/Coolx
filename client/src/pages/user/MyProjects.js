import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Tarjeta } from "../../components/card/Tarjeta";
import "./user.scss";
import "./myprojects.scss";
import { BuyModal } from "../../components/modal/BuyModal";

export const MyProjects = ({ projects, user, setBuyProject, buyProject, setResetUser, resetUser }) => {

  useEffect(() => {

  }, [projects]);
  const [modalBuy, setModalBuy] = useState(false);

  useEffect(() => {
    setResetUser(!resetUser);
  }, []);

  const handleCheck = () => {
    setModalBuy(true);
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={8} className="card-container">
            <div>
              <Tarjeta projects={projects} buyProject={buyProject} setBuyProject={setBuyProject} />
            </div>
          </Col>

          <Col md={4} className="add-container">
            <Button className="add-button" type="button" onClick={handleCheck}>
              <div>
                <div className="add-circle">
                  <h2>+</h2>
                </div>
                <p>Añadir proyecto</p>
              </div>
            </Button>
          </Col>
        </Row>
      </Container>

      <BuyModal onHide={() => setModalBuy(false)} show={modalBuy} />
    </>
  );
};
