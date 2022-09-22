import { Project } from "../pages/project/Project";
import React, {useEffect, useState} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { NavBarMain } from '../components/navBar/NavBarMain'
import { Login } from '../pages/auth/Login'
import { Home } from '../pages/home/Home'
import { Register } from "../pages/auth/Register";
import { Messages } from "../pages/user/Messages";
import { MyAccount } from "../pages/user/MyAccount";
import { MyProjects } from "../pages/user/MyProjects";
import { Reports } from "../pages/user/Reports";
import { User } from "../pages/user/User";
import { Admin } from '../pages/admin/Admin'
import { ErrorPage } from '../pages/home/ErrorPage'
import { Tarjeta } from '../components/card/Tarjeta'
import { Tarjetamas } from '../components/card/Tarjetamas'
import { Vegetation } from '../components/vegetation/Vegetation'
import {ContactForm} from '../components/forms/ContactForm'
import jwtDecode from 'jwt-decode'
import axios from 'axios'


export const AppRoutes = () => {

  const [isLogged, setIsLogged] = useState(false);

  const [user, setUser] = useState ();

  const [resetUser, setResetUser] = useState(false);

  const [project, setProject] = useState(false);


  // useEffect(()=> {
  //   const token = window.localStorage.getItem("token");

  //   if(token){
  //     setIsLogged(true)

  //     const {id} = jwtDecode(token).user;

  //     axios 
  //       .get(`http://localhost:4000/users/oneUser/${id}`)
  //       .then((res)=>{
  //         setUser(res.data.resultUser[0])
         
  //         console.log(res, "soyyyy reeeeesss")
  //       })
  //       .catch((err)=>{})

  //       console.log(id, "Este es el id desustrucutrado");

  //   }
  // }, [isLogged, resetUser])

  // console.log(project, "Esto es project");


  return (
    <div>
        <BrowserRouter>
            <NavBarMain/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element = {<Login/>} />
                <Route path='/admin' element = {<Admin/>} />
                <Route path='/error' element = {<ErrorPage/>} />
                <Route path='/tarjeta'  element = {<Tarjeta/>} />
                <Route path='/tarjetamas'  element = {<Tarjetamas/>} />
                <Route path='/vegetation'  element = {<Vegetation/>} />
                <Route path="/contact" element={<ContactForm />} />
                <Route path="/registrocoolx" element={<Register />} />
                <Route path="/project" element={<Project />} />
                <Route path="/user" element={<User />}>
                  <Route path="" element={<MyProjects />} />
                  <Route path="myprojects" element={<MyProjects />} />
                  <Route path="reports" element={<Reports />} />
                  <Route path="messages" element={<Messages />} />
                  <Route path="myaccount" element={<MyAccount />} />
                </Route>
            </Routes>
        </BrowserRouter>

    </div>
  );
};
