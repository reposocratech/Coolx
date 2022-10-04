import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Tarjeta } from "../../components/card/Tarjeta";
import "./user.scss";
import "./myprojects.scss";
import { BuyModal } from "../../components/modal/BuyModal";

export const MyProjects = ({
  projects,
  setBuyProject,
  buyProject,
  setResetUser,
  resetUser,
  setImages,
  images,
}) => {
  useEffect(() => {}, [projects, images]);

  const [modalBuy, setModalBuy] = useState(false);

  useEffect(() => {
    setResetUser(!resetUser);
  }, []);

  const handleCheck = () => {
    setModalBuy(true);
  };

  return (
    <>
      <Container className="h-100">
        <Row className="h-100">
          <Col md={8} className="card-container">
            <div>
              <Tarjeta
                projects={projects}
                buyProject={buyProject}
                setBuyProject={setBuyProject}
                setImages={setImages}
                images={images}
              />
            </div>
          </Col>

          <Col md={4} className="add-container">
            <Button
              className="add-button m-0"
              type="button"
              onClick={handleCheck}
            >
              <div className="d-flex flex-column justify-content-center">
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
