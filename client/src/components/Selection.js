import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, DropdownButton, Dropdown } from "react-bootstrap";
// import { useAuth } from "../contexts/AuthContext";
import "./style.css";
import { useStateContext, authContext } from "../utils/GlobalState";
import API from "../utils/api";

const Selection = () => {
  const [state, dispatch] = useStateContext();
  const { authData } = useContext(authContext);

  // const { logout } = useAuth();
  let history = useHistory();

  const handleClick = (e) => {
    dispatch({ type: "set-completed" });

    if (e.target.name === "completed") {
      history.push("/completed");
    } else {
      history.push("/pending");
    }
  };

  return (
    <>
      <div className="selectionGroup ">
        <button
          className=" selcBTN"
          onClick={() => dispatch({ type: "open-new-pickup" })}
        >
          New Pick-up
        </button>
        <button
          className=" selcBTN"
          name="pending"
          onClick={(e) => handleClick(e)}
        >
          View Pending
        </button>
        <button
          className=" selcBTN"
          name="completed"
          onClick={(e) => handleClick(e)}
        >
          View Completed
        </button>{" "}
      </div>
    </>
  );
};

export default Selection;
