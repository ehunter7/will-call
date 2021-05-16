import React, { useState, useEffect } from "react";
// import {Container} from 'react-bootstrap'
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import User from "./pages/User";
import Completed from "./pages/Completed";
import Signup from "./pages/Signup";
import API from "./utils/api";
import AuthProvider from './contexts/AuthContext'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRoute'

function App() {
  //Contains all the pickups in an array
  const [pickups, setpickups] = useState([]);
  // Used to show components
  const [newPU, showNewPU] = useState(false);
  // indicates if user is on completed list
  const [completedPage, setCompletedPage] = useState(false);

  //useEffect runs on mount and gets all pickups from DB
  useEffect(() => {
    API.getPickups().then((res) => {
      const sortedByPuDate = res.data.sort(
        (a, b) => new Date(a.puDate) - new Date(b.puDate)
      );
      setpickups(sortedByPuDate);
    });

  }, []);
  
  //shows the pickups details
  const openDetails = (id) => {
    console.log();
    const updatepickups = pickups.map((order) => {
      if (order._id === id) {
        return { ...order, showDetails: !order.showDetails };
      }
      return order;
    });
    setpickups(updatepickups);
  };

  return (
    <div>
      
      <AuthProvider>
      <Router>
        <Route exact path={"/signup"} component={Signup}/>
        <Route exact path={"/login"} component={Login}/>
        <Route exact path={["/", '/pending']} component={() => <User pickups={pickups}
            setpickups={setpickups}
            openDetails={openDetails}
            newPU={newPU}
            showNewPU={showNewPU}
            setCompletedPage={setCompletedPage}/>}/>

     

        <Route exact path={"/completed"} component={() =>    <Completed
            pickups={pickups}
            openDetails={openDetails}
            newPU={newPU}
            showNewPU={showNewPU}
            completedPage={completedPage}
            setCompletedPage={setCompletedPage}
          />}/>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
