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
    notes: "",
    comments: "",
    loader: "",
    puOn: Date,
  });

  //useEffect runs on mount and gets all pickups from DB
  useEffect(() => {
    API.getPickups().then((res) => {
      const sortedByPuDate = res.data.sort(
        (a, b) => new Date(a.puDate) - new Date(b.puDate)
      );
      setpickups(sortedByPuDate);
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
      setpickups(pickups.concat(res.data));
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

  const handlePickedUp = (e, id, puNumber) => {
    e.preventDefault();
    API.pickedUp(id, pickup, puNumber).then((res) => {
      const puRemoved = pickups.filter(order => order._id !== res.data._id);
      setpickups(puRemoved);
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
            openUpdates={openUpdates}
            handleUpdate={handleUpdate}
            handlePickedUp={handlePickedUp}
          />
        );
      })}
    </div>
  );
};

export default User;
