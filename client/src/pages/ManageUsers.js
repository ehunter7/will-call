import React, { useState, useEffect } from "react";
import { Container, Card, Button, Form } from "react-bootstrap";

import API from "../utils/api";

const ManageUsers = () => {
  //contains all users
  const [users, setUsers] = useState();
  console.log("made it");
  //gets all users
  useEffect(() => {
    API.getUsers().then((res) => {
      setUsers(res.data);
      console.log(res.data);
      console.log(users);
      console.log("BOOM!");
    });
  }, []);

  return (
    <>
      <Container className="d-flex justify-content-center align-items mt-5">
        {users.map((user) => {
          return <h1>{user.fullname}</h1>;
        })}
      </Container>
    </>
  );
};

export default ManageUsers;
