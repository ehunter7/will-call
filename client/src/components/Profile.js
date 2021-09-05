import React, { useContext, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";

import { useStateContext, authContext } from "../utils/GlobalState";
import ProfileField from "./ProfileField";

const Profile = () => {
  const { authData } = useContext(authContext);
  const [state, dispatch] = useStateContext();
  const [editor, setEditor] = useState({
    username: false,
    role: false,
  });

  return (
    <div className="profile-choices">
      <h1>{authData.user.fullname}</h1>
      <hr />

      <p
        className="close-newPickup"
        onClick={() => dispatch({ type: "open-profile" })}
      >
        X
      </p>

      <ProfileField
        field={"Username"}
        user={authData.user}
        data={authData.user.username}
        setEditor={setEditor}
        editor={editor.username}
      />
      <hr />
      <ProfileField
        field={"Role"}
        user={authData.user}
        data={authData.user.role}
        setEditor={setEditor}
        editor={editor.role}
      />
    </div>
  );
};

export default Profile;
