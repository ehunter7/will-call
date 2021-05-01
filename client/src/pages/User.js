import React, { useState, useEffect } from "react";
import API from '../utils/api';
import Selection from "../components/Selection";
import Order from "../components/Order";
import NewPU from "../components/NewPU";

const User = () => {
  const [newPU, showNewPU] = useState(false);
  const [pickups, setpickups] = useState([]);


  //useEffect runs on mount and gets all pickups from DB
  useEffect(() => {
    API.getPickups().then((res) => {
      setpickups(res.data);
    });
  }, []);

  return (
    <div className="container">


      <Selection newPU={newPU} showNewPU={showNewPU} />
      {!newPU ? null : <NewPU />}


      {pickups.map((order) => {
        return(<Order order={order} />)
        
      })}



    </div>
  );
};

export default User;
