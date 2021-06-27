import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

// import { useAuth } from "../contexts/AuthContext";
import "./style.css";
import { useStateContext, authContext } from "../utils/GlobalState";


const Header = ({ pageTitle }) => {
  const [state, dispatch] = useStateContext();
  const { authData } = useContext(authContext);

  // const { logout } = useAuth();
  let history = useHistory();


  return (
    <>
      <div className="d-flex page-header">
        <h1 className="page-title">{pageTitle}</h1>

      </div>

    </>
  );
};

export default Header;
