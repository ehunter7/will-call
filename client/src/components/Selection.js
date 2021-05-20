import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import "./style.css";
import { useStateContext } from "../utils/GlobalState";

const Selection = () => {
  const { logout } = useAuth();
  let history = useHistory();
  const [newPU, showNewPU] = useState(false);
  const [state, dispatch] = useStateContext();


  
  const handleClick = (e) => {
 
    dispatch({type: "set-completed"})

    if (e.target.name === "completed") {

      history.push("/completed");
    } else {

      history.push("/pending");
    }
  };
  
// handles log out 
  const handleLogout = async () => {
    try {
      await logout();
      history.push("/login");
    } catch {
      console.log("Error loggin out");
    }
  };

  return (
    <>
    <div className="logout">
    <Button variant="link" onClick={handleLogout}>
      Log Out
    </Button>
  </div>
    <div className="selectionGroup">

      <div className="selectionButtons">
        {state.completedPage ? (
                    <button
                    className="completedButton selcBTN"
                    name="pending"
                    onClick={(e) => handleClick(e)}
                  >
                    Pending
                  </button>

        ) : (
          <>
            <button className="selcBTN" onClick={() => showNewPU(!newPU)}>
              Create New Pick-up
            </button>
            <button
              className="completedButton selcBTN"
              name="completed"
              onClick={(e) => handleClick(e)}
            >
              Completed
            </button>{" "}
          </>
        )}
      </div>
    </div>
    </>
  );
};

export default Selection;
