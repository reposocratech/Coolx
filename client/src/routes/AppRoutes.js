import React from 'react'

import {BrowserRouter, Routes, Route} from "react-router-dom"
import { NavBarMain } from '../components/navBar/NavBarMain'
import { Home } from '../pages/home/Home'

export const AppRoutes = () => {
  return (
    <div>
        <BrowserRouter>
            <NavBarMain/>
            <Routes>
                <Route path='/' element={<Home/>}/>

               
            </Routes>
        </BrowserRouter>
    </div>
  )
}
