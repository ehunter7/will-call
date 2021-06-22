import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button, NavDropdown } from "react-bootstrap";
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
      <div className="d-flex ">
        <h1 className="page-title">{pageTitle}</h1>
        <div className="logout">
          <NavDropdown
            className="link-light"
            title={authData.user.fullname}
            id="nav-dropdown"
          >
            {authData.user.role === "Admin" ? (
              <NavDropdown.Item
                eventKey="4.1"
                onClick={() => history.push("/userslist")}
              >
                Manage Users
              </NavDropdown.Item>
            ) : null}
            {authData.user.role === "Admin" ? (
              <NavDropdown.Item
                eventKey="4.2"
                onClick={() => history.push("/newuser")}
              >
                Create New User
              </NavDropdown.Item>
            ) : null}
            {/* <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">
            Something else here
          </NavDropdown.Item> */}
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.3" onClick={handleLogout}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
      <div className="selectionGroup container">
        <div className="selectionButtons">
          {state.completedPage ? (
            <button
              className="completedButton selcBTN"
              name="pending"
              onClick={(e) => handleClick(e)}
            >
              View Pending
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
                View Completed
              </button>{" "}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Selection;
