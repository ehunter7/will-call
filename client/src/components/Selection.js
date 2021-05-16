import React from "react";
import { useHistory } from "react-router-dom";
import {Button} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import "./style.css";

const Selection = ({ newPU, showNewPU, setCompletedPage, completedPage }) => {
  const { logout } = useAuth()
  let history = useHistory();

  const handleClick = (e) => {
    setCompletedPage(!completedPage);

    if (e.target.name === "completed") {
      history.push("/completed");
    } else {
      history.push("/pending");
    }
  };

  const handleLogout = async ()  => {
try{
  await logout()
  history.push('/login')
} catch {
  console.log("Error loggin out");
}
  }

  return (
    <div className="selectionGroup">
      <div>
        <Button variant='link' onClick={handleLogout}>Log Out</Button>
      </div>
      <div className="selectionButtons">
        {!completedPage ? (
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
        ) : (
          <button
            className="completedButton selcBTN"
            name="pending"
            onClick={(e) => handleClick(e)}
          >
            Pending
          </button>
        )}
      </div>
    </div>
  );
};

export default Selection;
