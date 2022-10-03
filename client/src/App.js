import { AppRoutes } from "./routes/AppRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";

function App() {
  const [token, setToken] = useState();
  const [user, setUser] = useState();
  const [projects, setProjects] = useState([]);
  const [resetUser, setResetUser] = useState(false);

  useEffect(() => {
    const sessionToken = findToken();
    console.log("sessionToken: " + sessionToken);

    if (sessionToken !== null) {
      let id = jwtDecode(sessionToken).user.id;
      console.log("id: " + id);

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
  }, [resetUser]);

  // console.log("user: " + user);

  const findToken = () => {
    try {
      let sessionToken = localStorage.getItem("infocoolx");
      return sessionToken;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <AppRoutes
        user={user}
        setUser={setUser}
        projects={projects}
        setProjects={setProjects}
        resetUser={resetUser}
        setResetUser={setResetUser}
      />
    </div>
  );
}

export default App;
