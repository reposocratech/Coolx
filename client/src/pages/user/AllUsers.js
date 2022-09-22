import axios from "axios";
import React, { useEffect, useState } from "react";
import {Card, Button} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export const AllUsers = () => {
  const navigate = useNavigate();
  const [allUsers, setAllUsers] = useState();

  
  // useEffect(() => {
  //   const AUTH_TOKEN = window.localStorage.getItem("token");
  //   axios.defaults.headers.common["authorization"] = `Bearer ${AUTH_TOKEN}`;
  //   axios
  //     .get("http://localhost:4000/users/allUser")
  //     .then((res) => {
  //       console.log(res);
  //       setAllUsers(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);


  return (
    <>
      <h1>Todos los usuarios registrados en Coolx</h1>
      {allUsers && 
      allUsers.map((user, ind)=> {
        return (
          <Card style={{ width: "18rem" }}>
          {/* <Card.Img variant="top" src={`/images/travel/${user.photo_name}`} /> */}
          <Card.Body>
            <Card.Title>Compañia {user.company}</Card.Title>
            <Card.Text>
              <p>Nombre del empleado {user.name}</p>
            </Card.Text>
            {/* <Button variant="primary" onClick={()=>navigate(`/travel/${user.travel_id}`)}>Ver Proyectos</Button> */}
            {/* <Button variant="primary" onClick={()=>navigate(`/travel/${user.travel_id}`)}>Eliminar usuario</Button> */}
          </Card.Body>
        </Card>
        )
      })}
    </>
  )
}
