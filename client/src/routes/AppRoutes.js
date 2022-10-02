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
import { EditUser } from "../pages/user/EditUser";
import { AdminUsers } from "../pages/admin/AdminUsers";
import { AdminTree } from "../pages/admin/AdminTree";
import { TreeForm } from "../pages/admin/TreeForm";
import { AdminProjectState } from "../pages/admin/AdminProjectState";
import { SuccesPayment } from "../pages/home/SuccesPayment";

// /*import { Tarjeta } from "../components/card/Tarjeta";*/
import { BuyProject } from "../pages/user/BuyProject";
// import { ProjectCompleted } from "../pages/project/ProjectCompleted";

import { AdminUsersInfo } from "../components/modal/AdminUsersInfo";
import { Stripe } from "../components/stripe/Stripe";
import { Succes3 } from "../pages/home/Succes3";

export const AppRoutes = () => {
  const [isLogged, setIsLogged] = useState(false);

  //información del usuario que se loguea
  const [user, setUser] = useState();

  const [resetUser, setResetUser] = useState(false);

  //información de todos los proyectos del usuario que se ha logueado
  const [projects, setProjects] = useState(false);

  //esto es para modificar usuarios
  const [userModificate, setUserModificate] = useState();

  //esto es para la obtener la información de un proyecto
  const [oneProject, setOneProject] = useState();

  // esto es para cuando compramos un proyecto
  const [buyProject, setBuyProject] = useState();

  


  useEffect(() => {
    const token = window.localStorage.getItem("infocoolx");

    if (token) {
      setIsLogged(true);

      const { id } = jwtDecode(token).user;
      // console.log(id);

      axios
        .get(`http://localhost:4000/users/oneUser/${id}`)

        .then((res) => {
          setUser(res.data.resultUser[0]);
          setProjects(res.data.resultProject);

          // console.log(res, "soyyyy reeeeesss");
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
          userModificate={userModificate}
          setUserModificate={setUserModificate}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login isLogged={isLogged} setIsLogged={setIsLogged} />}
          />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/admintree"
            element={<AdminTree setIsLogged={setIsLogged} />}
          />
          <Route
            path="/adminusers"
            element={
              <AdminUsers
                user={user}
                resetUser={resetUser}
                setResetUser={setResetUser}
                userModificate={userModificate}
                setUserModificate={setUserModificate}
              />
            }
          />
          <Route path="/*" element={<ErrorPage />} />
          <Route
            path="/adminprojectstate"
            element={
              <AdminProjectState user={user} setIsLogged={setIsLogged} />
            }
          />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/admintree"
            element={<AdminTree setIsLogged={setIsLogged} />}
          />
          <Route path="/treeform" element={<TreeForm />} />
          <Route path="/*" element={<ErrorPage />} />

          {/* <Route path="/tarjeta" element={<Tarjeta oneProject={oneProject} setOneProject={setOneProject}/>} /> */}

          <Route
            path="/tarjetamas"
            element={<Tarjetamas projects={projects} />}
          />
          <Route
            path="/buyproject"
            element={<BuyProject user={user} buyProject={buyProject} setBuyProject={setBuyProject}/>}
          />
          <Route path="/vegetation" element={<Vegetation />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/registrocoolx" element={<Register />} />
          <Route
            path="/projectform"
            element={
              <ProjectForm
                user={user}
                projects={projects}
                setProjects={setProjects}
              />
            }
          />
          <Route
            path={`/project/:id`}
            element={<Project projects={projects} />}
          />
          {/* <Route
            path={`/projectcompleted/:id/info`}
            element={<ProjectCompleted />}
          /> */}

          <Route path="/succes1" element={<Succes1 />} />
          <Route path="/succes2" element={<Succes2 projects={projects} />} />
          <Route
            path="/succespayment"
            element={<SuccesPayment projects={projects} />}
          />
          <Route path="/succes3" element={<Succes3/> } />

          <Route path="/stripe" element={<Stripe buyProject={buyProject} user={user}/>} />


       

          <Route path="/user" element={<User />}>
            <Route
              path=""
              element={<MyProjects projects={projects} user={user} buyProject={buyProject} setBuyProject={setBuyProject} setResetUser={setResetUser} resetUser={resetUser} />} />
            <Route
              path="myprojects"
              element={<MyProjects projects={projects} user={user} buyProject={buyProject} setBuyProject={setBuyProject} setResetUser={setResetUser} resetUser={resetUser}/>} />


            <Route path="reports" element={<Reports />} />
            <Route path="messages" element={<Messages />} />
            <Route path="myaccount" element={<MyAccount />} />
          </Route>

          <Route
            path="/getEditUser"
            element={
              <EditUser
                user={user}
                setUser={setUser}
                setIsLogged={setIsLogged}
                userModificate={userModificate}
                setUserModificate={setUserModificate}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
