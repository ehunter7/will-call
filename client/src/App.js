import React, { useState, useEffect } from "react";
// import {Container} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import User from "./pages/User";
import Completed from "./pages/Completed";
import Signup from "./pages/Signup";
import API from "./utils/api";
import AuthProvider from "./contexts/AuthContext";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import { authContext, StateProvider } from "./utils/GlobalState";
import NewUser from "./components/NewUser";
import ManageUsers from "./pages/ManageUsers";
import Cancelled from "./pages/Cancelled";

function App() {
  const [authState, setAuthState] = useState({
    isAuthenticated: null,
    loading: true,
    user: null,
  });

  return (
    <>
      <StateProvider>
        <authContext.Provider
          value={{ authData: authState, setAuth: setAuthState }}
        >
          <Router>
            <Switch>
              <Route exact path={"/signup"} component={Signup} />
              <Route exact path={"/login"} component={Login} />
              <PrivateRoute exact path={"/newuser"} component={NewUser} />
              <PrivateRoute component={User} exact path={["/", "/pending"]} />
              <PrivateRoute exact path={"/completed"} component={Completed} />
              <PrivateRoute exact path={"/cancelled"} component={Cancelled} />
              <PrivateRoute exact path={"/userslist"} component={ManageUsers} />
            </Switch>
          </Router>
        </authContext.Provider>
      </StateProvider>
    </>
  );
}

export default App;
