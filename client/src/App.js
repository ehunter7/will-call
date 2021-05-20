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
import { StateProvider } from "./utils/GlobalState";

function App() {
  return (
    <>
      <StateProvider>
        <AuthProvider>
          <Router>
            <Switch>
              <Route exact path={"/signup"} component={Signup} />
              <Route exact path={"/login"} component={Login} />
              <PrivateRoute component={User} exact path={["/", "/pending"]} />
              <Route exact path={"/completed"} component={Completed} />
            </Switch>
          </Router>
        </AuthProvider>
      </StateProvider>
    </>
  );
}

export default App;
