import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {Container, Row, Col, Button} from 'react-bootstrap'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import './login.scss'


export const Login = () => {

  const [login,setLogin] = useState({
    email:"",
    password:"",
  })


  const navigate = useNavigate();

  const handleChange = (e) => {
    const {value, name} = e.target;
    setLogin({...login, [name]:value})
  }

  const handleSubmit = () => {
    if(login.email === "" || login.password === ""){
     
    }else
    {

      axios
      .post("//localhost:4000/users/login", login)

      .then((res)=>{
        console.log(res);
      

      const token = res.data.token;
      window.localStorage.setItem("token", token)

      console.log("Esto es la decoficacion del token", jwtDecode(token));

      const type = jwtDecode(token).user.type;
      //console.log("Este es el tipo del usuario: ",type);

      type === 0
        ? navigate('/allusers', {replace:true})
        : type === 1
        ? navigate('/admin', {replace:true})
        : navigate('/')


      //redireccionar a home
      //evitar login y registro
      //mostrar el button de logout
      //guardarlo en localstore
    })
      .catch((err)=>{
        console.log(err)
        
      })
  }
}


  return (
    <Container fluid className='fondo'>
      
      <Row className='contAuth'>

        <div>
          <div className='titulo'>
            <p >Bienvenido de vuelta</p>
          </div>
          <div className='subtitulo'>
            <p>Para iniciar sesion introduce tus credenciales a continuación</p>
          </div>
          
        </div>

        
        <div className='formAuth'>
                
                <label>Dirección de correo electronico</label>
                <input
                    className='pt-2'
                    autoComplete='off'
                    name='email'
                    value={login.email}
                    onChange={handleChange}
                />
                <br/>

                <label>Contraseña</label>
                <input
                    className='pt-2'
                    autoComplete='off'
                    name='password'
                    value={login.password}
                    onChange={handleChange}
                />

                <p>¿Has olvidado tu contraseña?</p>
          </div> 

          <div>
            <input type="checkbox" name="remember" id="remember" class="form-check-input"/>
            <label for="remember">Recordar contraseña</label>
          </div>
      
          <div className='final'>
            <button className='boton' onClick={handleSubmit}>Iniciar sesión</button>
            <p>¿No tienes cuenta?¿Contactanos?</p>
          </div>

      </Row>
  </Container>
  )
}
