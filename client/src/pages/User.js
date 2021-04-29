import React from "react";
import Selection from "../components/Selection";
import Order from "../components/Order";

const User = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <Selection />
        </div>
        <div className="col-md-10">
          <Order />
        </div>
      </div>
    </div>
  );
};

export default User;
