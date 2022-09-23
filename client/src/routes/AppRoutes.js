import { Project } from "../pages/project/Project";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBarMain } from "../components/navBar/NavBarMain";
import { Login } from "../pages/auth/Login";
import { Home } from "../pages/home/Home";
import { Register } from "../pages/auth/Register";
import { Messages } from "../pages/user/Messages";
import { MyAccount } from "../pages/user/MyAccount";
import { MyProjects } from "../pages/user/MyProjects";
import { Reports } from "../pages/user/Reports";
import { User } from "../pages/user/User";
import { Admin } from "../pages/admin/Admin";
import { ErrorPage } from "../pages/home/ErrorPage";
import { Tarjeta } from "../components/card/Tarjeta";
import { Tarjetamas } from "../components/card/Tarjetamas";
import { Vegetation } from "../components/vegetation/Vegetation";
import { ContactForm } from "../components/forms/ContactForm";

import jwtDecode from "jwt-decode";
import axios from "axios";
import { ProjectForm } from "../components/forms/ProjectForm";
import { Succes1 } from "../pages/home/Succes1";
import { Succes2 } from "../pages/home/Sucess2";
import { AllUsers } from "../pages/user/AllUsers";
import { EditUser } from "../pages/user/EditUser";

export const AppRoutes = () => {
  const [isLogged, setIsLogged] = useState(false);

  const [user, setUser] = useState();

  const [resetUser, setResetUser] = useState(false);

  const [project, setProject] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <NavBarMain
          setIsLogged={setIsLogged}
          isLogged={isLogged}
          setUser={setUser}
          user={user}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/tarjeta" element={<Tarjeta />} />
          <Route path="/tarjetamas" element={<Tarjetamas />} />
          <Route path="/vegetation" element={<Vegetation />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/registrocoolx" element={<Register />} />
          <Route path="/projectform" element={<ProjectForm />} />
          <Route path="/project" element={<Project />} />
          <Route path="/succes1" element={<Succes1 />} />
          <Route path="/succes2" element={<Succes2 />} />
          <Route path="/allusers" element={<AllUsers />} />
          <Route path="/user" element={<User />}>
            <Route path="" element={<MyProjects />} />
            <Route path="myprojects" element={<MyProjects />} />
            <Route path="reports" element={<Reports />} />
            <Route path="messages" element={<Messages />} />
            <Route path="myaccount" element={<MyAccount />} />
          </Route>
          <Route path="/edituser" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
