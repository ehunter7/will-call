import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";
import "./style.css";
import { useStateContext, authContext } from "../utils/GlobalState";

const Selection = () => {
  const [state, dispatch] = useStateContext();

  let history = useHistory();

  const handleClick = (e) => {
    dispatch({ type: "set-completed" });
    history.push(`/${e.target.name}`);
    // if (e.target.name === "completed") {
    //   history.push("/completed");
    // } else {
    //   history.push("/pending");
    // }
  };
  //TODO: button should be a component
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
        </button>
        <button
          className=" selcBTN"
          name="cancelled"
          onClick={(e) => handleClick(e)}
        >
          View Cancelled
        </button>
      </div>
    </>
  );
};

export default Selection;
