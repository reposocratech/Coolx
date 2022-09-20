import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactForm } from "../components/forms/ContactForm";
import { NavBarMain } from "../components/navBar/NavBarMain";
import { Register } from "../pages/auth/Register";
import { Home } from "../pages/home/Home";

export const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBarMain />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/registrocoolx" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
