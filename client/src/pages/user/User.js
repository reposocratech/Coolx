import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "../home/Footer";
import "./myprojects.scss";

export const User = () => {
  const [radioValue, setRadioValue] = useState("1");

  const navigate = useNavigate();

  const radios = [
    {
      name: "Mis proyectos",
      value: "1",
      url: "myprojects",
      img: "my_projects.svg",
    },
    { name: "Informes", value: "2", url: "reports", img: "reports.svg" },
    { name: "Mensajes", value: "3", url: "messages", img: "mail_solid.svg" },
    { name: "Mi cuenta", value: "4", url: "myaccount", img: "my_account.svg" },
  ];

  return (
    <div className="user-bg">
      <div className="wrapper">
        <Container fluid>
          <Row>
            <Col lg={2} className="left-bar p-0 ">
              <div className="left-bar-content d-flex flex-column">
                <Row className="w-100">
                  {radios.map((radio, idx) => (
                    <Col xs={6} sm={3} lg={12} className="btn-user-container">
                      <Button
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        className={
                          radioValue === radio.value ? "selected" : "unselected"
                        }
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onClick={(e) => {
                          setRadioValue(e.currentTarget.value);
                          navigate(radio.url);
                        }}
                      >
                        <img src={`/assets/icons/${radio.img}`} alt="icon" />
                        {radio.name}
                      </Button>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>

            <Col lg={10} className="sheet p-0 mb-4">
              <Outlet />
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
