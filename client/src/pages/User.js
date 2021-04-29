import React, { useState } from "react";
import Selection from "../components/Selection";
import Order from "../components/Order";
import NewPU from "../components/NewPU";

const User = () => {
  const [newPU, showNewPU] = useState(false);

  return (
    <div className="container">


      <Selection newPU={newPU} showNewPU={showNewPU} />
      {!newPU ? null : <NewPU />}

      <Order />


    </div>
  );
};

export default User;
