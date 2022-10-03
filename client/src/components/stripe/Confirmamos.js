import React from 'react'
import axios from "axios"

export const Confirmamos = ({exito, buyProject, user}) => {

    console.log(user.user_id);
    console.log(buyProject.project_id);


  return (
    <div>

        <h1>Probando</h1>
        <p>Jalea real </p>
        <p>Jalea real </p>
        <p>Jalea real </p>
        <p>Jalea real </p>
        <p>Jalea real </p>
        <p>Jalea real </p>
        <p>Jalea real </p>

        {exito &&
        axios
            .put(`http://localhost:4000/project/changeUser/${buyProject.project_id}/${user.user_id}`)
            .then((res)=>{
                console.log(res)
            })
            .catch((err)=>{
                console.log(err)
            })
            
          }


    </div>
  )
}
