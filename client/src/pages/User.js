import React, { useState, useEffect } from "react";
import API from "../utils/api";
import Selection from "../components/Selection";
import Order from "../components/Order";
import NewPU from "../components/NewPU";

const User = () => {
  // Used to show components
  const [newPU, showNewPU] = useState(false);

  //Contains all the pickups in an array
  const [pickups, setpickups] = useState([]);

  //Used for creating a new pickup
  const [pickup, setPickup] = useState({
    pro: Number,
    carrier: "",
    puDate: Date,
    puTime: "0800 to 1300",
  });

  //useEffect runs on mount and gets all pickups from DB
  useEffect(() => {
    API.getPickups().then((res) => {
      setpickups(res.data);
    });
  }, []);

  //Handles input from new pickup form
  const handleInput = (event) => {
    const { name, value } = event.target;
    setPickup({ ...pickup, [name]: value });

  };

  //Handles new pickup submit
  const handleSubmit = (e) => {
    e.preventDefault();
    API.newPickup(pickup).then((res) => {
      showNewPU(!newPU);
      //! Do something to update state
      setpickups(pickups.concat(res.data));
    });
  };

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
    <div className="container">
      <Selection newPU={newPU} showNewPU={showNewPU} />
      {!newPU ? null : (
        <NewPU handleSubmit={handleSubmit} handleInput={handleInput} />
      )}

      {pickups.map((order) => {
        return (
          <Order
            order={order}
            handleInput={handleInput}
            openDetails={openDetails}
          />
        );
      })}
    </div>
  );
};

export default User;
