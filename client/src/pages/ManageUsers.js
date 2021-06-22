import React, { useState, useEffect } from "react";

import Selection from "../components/Selection";
import API from "../utils/api";
import UserCard from "../components/UserCard";

const ManageUsers = () => {
  //contains all users
  const [users, setUsers] = useState([]);

  //gets all users
  useEffect(() => {
    API.getUsers().then((res) => {
      setUsers(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <div className="header">
        <Selection pageTitle="User Managment" />
      </div>
      {users.map((user) => {
        return <UserCard user={user} />;
      })}
      <div className="user-key">
        {" "}
        <p>
          A bunch of text will go in this box describing the roles of each
          employee
        </p>
      </div>
    </div>
  );
};

export default ManageUsers;
