import React, { useState, useEffect } from "react";
// import {Container} from 'react-bootstrap'
import { BrowserRouter as Router, Route } from "react-router-dom";
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
            <Route exact path={"/signup"} component={Signup} />
            <Route exact path={"/login"} component={Login} />
            <Route exact path={["/", "/pending"]} component={User} />

            <Route exact path={"/completed"} component={Completed} />
          </Router>
        </AuthProvider>
      </StateProvider>
    </>
  );
}

export default App;
