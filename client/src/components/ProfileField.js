import React, { useState, useContext } from "react";
import { FaPencilAlt } from "react-icons/fa";
import api from "../utils/api";
import { authContext, useStateContext } from "../utils/GlobalState";

const ProfileField = ({ setEditor, editor, field, data, user }) => {
  const [update, setUpdate] = useState(data);
  const { authData, setAuth } = useContext(authContext);

  function updateUser() {
    if (update === data) {
      setEditor({ ...editor, [field.toLowerCase()]: !editor });
    } else {
      api.updateUser(user, field, update).then((res) => {
        console.log(res.data);
        setAuth({
          ...authData,
          isAuthenticated: true,
          loading: false,
          user: res.data,
        });
        setEditor({ ...editor, [field.toLowerCase()]: !editor });
      });
    }
  }

  function handleInput(event) {
    const { value } = event.target;
    setUpdate(value);
  }

  return (
    <div>
        
      <div className="profile-info">
        <p className="mr-2">
          <b>{field}:</b>
        </p>
        {!editor ? (
          <>
            <p className="mr-3">{data}</p>
            <a
              className="profile-edit-button"
              onClick={() => {
                setEditor({ ...editor, [field.toLowerCase()]: !editor });
              }}
            >
              <FaPencilAlt />
            </a>
          </>
        ) : (
          <>
            {field === "Username" ? (
              <input
                type="text"
                defaultValue={data}
                onChange={(e) => handleInput(e)}
              />
            ) : (
              <>
                <select defaultValue={data} onChange={(e) => handleInput(e)}>
                  <option value="Admin">Admin</option>
                  <option value="Customer Service Rep">
                    Customer Service Rep
                  </option>
                  <option value="Receiver">Receiver</option>
                </select>
              </>
            )}
            <button onClick={() => updateUser()}>submit</button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileField;
