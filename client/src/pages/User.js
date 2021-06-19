import React, { useState, useEffect, useContext } from "react";
import API from "../utils/api";
import Selection from "../components/Selection";
import Order from "../components/Order";
import NewPU from "../components/NewPU";
import { useStateContext, authContext } from "../utils/GlobalState";

import "./style.css";
const User = ({ setCompletedPage }) => {
  const [state, dispatch] = useStateContext();
  const [puList, setPuList] = useState([]);
  const [pickedup, setPickedup] = useState(false);
  const [newPU, showNewPU] = useState();
  const { authData, setAuthor } = useContext(authContext);

  useEffect(() => {
    API.getPickups().then((res) => {
      const sortedByPuDate = res.data.sort(
        (a, b) => new Date(a.puDate) - new Date(b.puDate)
      );
      //sets global state pickups
      dispatch({ type: "set-pickups", payload: sortedByPuDate });
      setPuList(sortedByPuDate);
    });
  }, [pickedup]);
  useEffect(() => {
    setPuList(state.pickups);
  }, [state]);

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
    user: authData.user.username,
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
      // setpickups(pickups.concat(res.data));
      dispatch({ type: "new-pickup", payload: res.data });
      setPuList(state.pickups);
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
      const updatedPickups = state.pickups.map((order) => {
        if (order._id === res.data._id) {
          return {
            ...order,
            comments: res.data.comments,
            loader: res.data.loader,
            puDate: res.data.puDate,
            updatedOn: res.data.updatedOn,
            notes: res.data.notes,
            lastUpdatedBy: res.data.lastUpdatedBy,
          };
        }
        return order;
      });
      openUpdates(id);
      // setpickups(updatedPickups);
      dispatch({ type: "set-pickups", payload: updatedPickups });
    });
  };

  // Handles pickup once picked up.
  const handlePickedUp = (e, id, puNumber) => {
    e.preventDefault();
    API.pickedUp(id, pickup, puNumber).then((res) => {
      // const puRemoved = state.pickups.filter(
      //   (order) => order._id !== res.data._id
      // );
      // dispatch({ type: "set-pickups", payload: puRemoved });

      const puUpdated = state.pickups.filter((order) => {
        if (order._id !== res.data._id) {
          return { ...order, status: "completed" };
        }
        return order;
      });
      dispatch({ type: "set-pickups", payload: puUpdated });
      setPuList(puUpdated);
      //line is used to refresh the page once a pickup is made.
      setPickedup(!pickedup);
    });
  };

  //Opens update form below order
  const openUpdates = (id) => {
    const updatepickups = state.pickups.map((order) => {
      if (order._id === id) {
        return { ...order, showUpdates: !order.showUpdates };
      }
      return order;
    });
    // setpickups(updatepickups);
    dispatch({ type: "set-pickups", payload: updatepickups });
  };

  return (
    <>
      <div className="header">
        <Selection
          pageTitle="Pending Pick-ups"
          setCompletedPage={setCompletedPage}
          showNewPU={showNewPU}
          newPU={newPU}
        />
      </div>
      <div className="container mainContent">
        {!newPU ? null : (
          <NewPU handleSubmit={handleSubmit} handleInput={handleInput} />
        )}
        <div className="orderDiv">
          {puList.map((order) => {
            if (order.status === "pending") {
              return (
                <Order
                  key={order._id}
                  order={order}
                  handleInput={handleInput}
                  setPuList={setPuList}
                  openUpdates={openUpdates}
                  handleUpdate={handleUpdate}
                  handlePickedUp={handlePickedUp}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
};

export default User;
