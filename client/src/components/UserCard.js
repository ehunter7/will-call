import React from "react";
import { Container, Card, Button, Form } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";

const UserCard = ({ user }) => {
  return (
    <>
      <Container className="user-card ">
        <div className="col-md-5">
          <h2>{user.fullname}</h2>
          <h2>Role: {user.role}</h2>
        </div>
        <div className="col-md-5">
          <h2>{user.username}</h2>
        </div>
        <div className="col-md-1 icon">
          <FaPencilAlt className="edit-icon" />
        </div>
        <div className="col-md-1 icon">
          <MdDeleteForever className="edit-icon" />
        </div>
      </Container>
    </>
  );
};

export default UserCard;
