import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBarMain } from "../components/navBar/NavBarMain";
import { Home } from "../pages/home/Home";
import { Project } from "../pages/project/Project";

export const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBarMain />
        <Routes>
          {/* <Route path='/' element={<Home/>}/> */}
          <Route path="/project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
