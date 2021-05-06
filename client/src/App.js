import React from 'react';
import {
  BrowserRouter as Router,

  Route,

} from "react-router-dom";
import './App.css';
import User from "./pages/User";
import Completed from "./pages/Completed";

function App() {

  return (
    <div >
      <Router>

        <Route exact path={"/"}>
          <User />
        </Route>
        <Route exact path={'/completed'}>
          <Completed />
        </Route>

      </Router>


    </div>
  );
}

export default App;
