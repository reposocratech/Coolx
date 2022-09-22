import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import "./costProfit.scss";

export const CostProfit = () => {
  return (
    <>
      <div>
        <div className="wrapper">
          <Container>
            <Row className="justify-content-center">
              <Col md={12} className="cardCost">
                <div className="tituloCost">
                  <p>Coste del proyecto y Ganancias estimadas</p>
                  <img src="/assets/icons/info.svg" />
                </div>

                <div className="coste">
                  <div>
                    <img src="/assets/icons/pine_tree.svg" />
                  </div>

                  <div className="costeInfo">
                    <p>Coste del proyecto</p>
                    <h4>575.800 €</h4>
                  </div>
                </div>

                <div className="ganancias">
                  <div>
                    <img src="/assets/icons/money.svg" />
                  </div>

                  <div className="gananciasInfo">
                    <p>Ganancias Consultoría</p>
                    <h4>86.700 €</h4>
                  </div>
                </div>

                <div>
                  <Button>Acceder a todos los datos</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};
