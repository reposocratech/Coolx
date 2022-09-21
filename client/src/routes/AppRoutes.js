import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactForm } from "../components/forms/ContactForm";
import { NavBarMain } from "../components/navBar/NavBarMain";
import { Register } from "../pages/auth/Register";
import { Home } from "../pages/home/Home";
import { Messages } from "../pages/user/Messages";
import { MyAccount } from "../pages/user/MyAccount";
import { MyProjects } from "../pages/user/MyProjects";
import { Reports } from "../pages/user/Reports";
import { User } from "../pages/user/User";

export const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBarMain />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/registrocoolx" element={<Register />} />
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
