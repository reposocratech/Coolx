
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavBarMain } from '../components/navBar/NavBarMain'
import { Login } from '../pages/auth/Login'
import { Home } from '../pages/home/Home'
import { Register } from "../pages/auth/Register";
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import { Admin } from '../pages/admin/Admin'
import { ErrorPage } from '../pages/home/ErrorPage'

export const AppRoutes = () => {

  const [isLogged, setIsLogged] = useState(false);




  return (
    <div>

        <BrowserRouter>
            <NavBarMain/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element = {<Login/>} />
                <Route path='/admin' element = {<Admin/>} />
                <Route path='/error' element = {<ErrorPage/>} />
                <Route path="/contact" element={<ContactForm />} />
                <Route path="/registrocoolx" element={<Register />} />
            </Routes>
        </BrowserRouter>

    </div>
  );
};
