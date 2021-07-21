import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import { useStateContext, authContext } from "../utils/GlobalState";

import "./style.css";
import API from "../utils/api";

const Header = ({ pageTitle, profile }) => {
  const [state, dispatch] = useStateContext();
  const { authData } = useContext(authContext);

  let history = useHistory();

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
      <div className="d-flex page-header">
        <div className="page-title">
          <h1>{pageTitle}</h1>
        </div>
        <div className="header-icons">
          <FiUsers
            title="View Users"
            className="user-icon"
            onClick={() => history.push("/userslist")}
          />
          <CgProfile
            title="View Proifile"
            className="user-icon"
            onClick={() => dispatch({ type: "open-profile" })}
          />
          <IoMdLogOut
            title="Logout"
            className="user-icon"
            onClick={handleLogout}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
