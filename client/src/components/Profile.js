import React, { useContext } from "react";

import { authContext } from "../utils/GlobalState";

const Profile = () => {
  const { authData } = useContext(authContext);

  return (
    <div className="profile-choices">
      <h1>{authData.user.fullname}</h1>
      <p className="close-newPickup">X</p>
      <div>
        <p>{authData.user.username}</p>
      </div>
      <div>
        <p>{authData.user.role}</p>
      </div>
    </div>
  );
};

export default Profile;
