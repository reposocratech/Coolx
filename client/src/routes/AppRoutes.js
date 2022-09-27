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
import { AdminTree } from "../pages/admin/AdminTree";

export const AppRoutes = () => {
  const [isLogged, setIsLogged] = useState(false);

  const [user, setUser] = useState();

  const [resetUser, setResetUser] = useState(false);

  const [projects, setProjects] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem("infocoolx");

    if (token) {
      setIsLogged(true);

      const { id } = jwtDecode(token).user;
      console.log(id);

      axios
        .get(`http://localhost:4000/users/oneUser/${id}`)
        .then((res) => {
          setUser(res.data.resultUser[0]);
          setProjects(res.data.resultProject);

          console.log(res, "soyyyy reeeeesss");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLogged, resetUser]);

  return (
    <div>
      <BrowserRouter>
        <NavBarMain
          isLogged={isLogged}
          setIsLogged={setIsLogged}
          user={user}
          setUser={setUser}
          setResetUser={setResetUser}
          resetUser={resetUser}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login isLogged={isLogged} setIsLogged={setIsLogged} />}
          />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admintree" element={<AdminTree />}/>
          <Route path="/*" element={<ErrorPage />} />
          {/* <Route path="/tarjeta" element={<Tarjeta />} /> */}
          <Route
            path="/tarjetamas"
            element={<Tarjetamas projects={projects} />}
          />
          <Route path="/vegetation" element={<Vegetation />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/registrocoolx" element={<Register />} />
          <Route path="/projectform" element={<ProjectForm user={user} />} />
          <Route path={`/project/:id`} element={<Project />} />
          <Route path="/succes1" element={<Succes1 />} />
          <Route path="/succes2" element={<Succes2 />} />
          <Route path="/allusers" element={<AllUsers />} />

          <Route path="/user" element={<User user={user} />}>
            <Route path="" element={<MyProjects projects={projects} />} />
            <Route
              path="myprojects"
              element={<MyProjects projects={projects} />}
            />
            <Route path="reports" element={<Reports />} />
            <Route path="messages" element={<Messages />} />
            <Route path="myaccount" element={<MyAccount />} />
          </Route>

          <Route path="/edituser" element={<EditUser user={user} setUser={setUser} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
