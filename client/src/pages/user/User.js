import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
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
          {
            <Row>
              <Col md={2} className="p-0">
                <div className="left-bar d-flex flex-column">
                  {radios.map((radio, idx) => (
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
                  ))}
                </div>
              </Col>

              <Col md={10} className="sheet p-0">
                <Outlet />
              </Col>
            </Row>
          }
        </Container>
      </div>
    </div>
  );
};
