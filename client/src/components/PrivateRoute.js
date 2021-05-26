import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext"
import { authContext, useStateContext } from "../utils/GlobalState";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const { currentUser } = useAuth();
  const { authData, setAuthor } = useContext(authContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        return authData.user ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
};

export default PrivateRoute;
