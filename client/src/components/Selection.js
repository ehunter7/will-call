import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button, DropdownButton, Dropdown } from "react-bootstrap";
// import { useAuth } from "../contexts/AuthContext";
import "./style.css";
import { useStateContext, authContext } from "../utils/GlobalState";
import API from "../utils/api";

const Selection = ({ showNewPU, newPU, pageTitle }) => {
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

  // handles log out
  const handleLogout = async () => {
    try {
      // await logout();
      API.logout();
      history.push("/login");
    } catch {
      console.log("Error loggin out");
    }
  };

  return (
    <>
      <div className=" ">
        <div className="logout">
          <DropdownButton
            id="user-dropdown"
            title={authData.user.fullname}
            id="dropdown-basic-button"
            style={{
              borderStyle: "none",
              borderRadius: "2px",
              backgroundColor: "transparent",
            }}
      
          >
            {authData.user.role === "Admin" ? (
              <Dropdown.Item
                eventKey="4.1"
                onClick={() => history.push("/userslist")}
              >
                Manage Users
              </Dropdown.Item>
            ) : null}
            {authData.user.role === "Admin" ? (
              <Dropdown.Item
                eventKey="4.2"
                onClick={() => history.push("/newuser")}
              >
                Create New User
              </Dropdown.Item>
            ) : null}
            {/* <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">
            Something else here
          </NavDropdown.Item> */}
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4.3" onClick={handleLogout}>
              Logout
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <div className="selectionGroup ">
        <button className=" selcBTN" onClick={() => showNewPU(!newPU)}>
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
