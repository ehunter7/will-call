import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Selection from "../components/Selection";
import API from "../utils/api";
import UserCard from "../components/UserCard";
import Header from "../components/Header";
import Filter from "../components/Filter";
import "./style.css";

const ManageUsers = () => {
  //contains all users
  const [users, setUsers] = useState([]);
  const [puList, setPuList] = useState([]);
  const [filtered, setFiltered] = useState([]);

  let history = useHistory();

  const alternatingColor = ["#c5c3c6", "#dcdcdd"];
  let index = 0;

  //gets all users
  useEffect(() => {
    API.getUsers().then((res) => {
      setUsers(res.data);
      console.log(res.data);
    });
  }, []);

  // handle input from filter component
  const handlePendingFilter = (e) => {
    const { name, value } = e.target;

    const filteredList = puList.filter((order) => {
      if (name === "pickedupNumber") {
        return (order.pickedupNumber + "").indexOf(value) > -1;
      } else if (name === "pro") {
        return (order.pro + "").indexOf(value) > -1;
      } else if (name === "puDate") {
        const pu = new Date(order.puOn);
        const day = pu.getDate();
        const month = pu.getMonth() + 1;
        const year = pu.getFullYear();
        const dateString = `${month}/${day}/${year}`;
        console.log(month);
        return dateString.includes(value);
      }
      return null;
    });
    setFiltered(filteredList);
  };

  return (
    <div>
      <div className="content-buttons">
        <Selection />
        <Filter handleFilterInput={handlePendingFilter} />
      </div>
      <div className="header">
        <Header pageTitle="User Managment" />
      </div>
      <div className="mainContent user-profiles">
        <div className="Order-header">
          <div className="header-title">
            <p>Name</p>
          </div>
          <div className="header-title">
            <p>Role</p>
          </div>
          <div className="header-title">
            <p>Username</p>
          </div>
          <div className="header-title">
            <p>Update/ Delete</p>
          </div>
        </div>
        <div className="orderDiv">
          {users.map((user) => {
            return (
              <UserCard
                user={user}
                color={alternatingColor[index % alternatingColor.length]}
              />
            );
          })}
        </div>
      </div>
      <div className="user-key">
        {" "}
        <p>
          A bunch of text will go in this box describing the roles of each
          employee
        </p>
        <button onClick={() => history.push("/newuser")}>New user</button>
      </div>
    </div>
  );
};

export default ManageUsers;
