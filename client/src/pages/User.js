import React, { useState, useEffect } from "react";
import API from "../utils/api";
import Selection from "../components/Selection";
import Order from "../components/Order";
import NewPU from "../components/NewPU";

const User = ({pickups, setpickups, openDetails}) => {
  // Used to show components
  const [newPU, showNewPU] = useState(false);



  //Used for creating a new pickup
  const [pickup, setPickup] = useState({
    pro: Number,
    carrier: "",
    puDate: Date,
    puTime: "0800 to 1300",
    notes: "",
    comments: "",
    loader: "",
    puOn: Date,
  });

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
      setpickups(pickups.concat(res.data));
      setPickup({
        pro: Number,
        carrier: "",
        puDate: Date,
        puTime: "0800 to 1300",
        notes: "",
        comments: "",
        loader: "",
        puOn: Date,
      });
    });
  };

  //Handles updates to a pickup
  const handleUpdate = (e, id) => {
    e.preventDefault();
    API.updatePU(id, pickup).then((res) => {
      const updatedPickups = pickups.map((order) => {
        if (order._id === res.data._id) {
          return {
            ...order,
            comments: res.data.comments,
            loader: res.data.loader,
            updatedOn: res.data.updatedOn,
            notes: res.data.notes,
          };
        }
        return order;
      });
      openUpdates(id);
      setpickups(updatedPickups);

    });
  };

  // Handles pickup once picked up. 
  const handlePickedUp = (e, id, puNumber) => {
    e.preventDefault();
    API.pickedUp(id, pickup, puNumber).then((res) => {
      const puRemoved = pickups.filter(order => order._id !== res.data._id);
      setpickups(puRemoved);
    });
  };



  //Opens update form below order
  const openUpdates = (id) => {
    console.log();
    const updatepickups = pickups.map((order) => {
      if (order._id === id) {
        return { ...order, showUpdates: !order.showUpdates };
      }
      return order;
    });
    setpickups(updatepickups);
  };

  return (
    <div className="container mainContent">
      <Selection newPU={newPU} showNewPU={showNewPU} />
      {!newPU ? null : (
        <NewPU handleSubmit={handleSubmit} handleInput={handleInput} />
      )}
      <div className="orderDiv">
        {pickups.map((order) => {
          if(order.status === "pending"){
          return (
            <Order
              order={order}
              handleInput={handleInput}
              openDetails={openDetails}
              openUpdates={openUpdates}
              handleUpdate={handleUpdate}
              handlePickedUp={handlePickedUp}
            />
          );}
        })}

      </div>

    </div>
  );
};

export default User;
