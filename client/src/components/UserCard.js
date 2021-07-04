import React from "react";
import { Container } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";

const UserCard = ({ user, color }) => {
  return (
    <>
      <div style={{ backgroundColor: color }} className="orderCard">
        <div className="orderNumbers">
          <div className="order-info">
            <p>
              <b className="info">{user.fullname}</b>
            </p>
          </div>
          <div className="order-info">
            <p>
              <b className="info">{user.role}</b>
            </p>
          </div>
          <div className="order-info">
            <p>
              <b className="info">{user.username}</b>
            </p>
          </div>
          <div className="order-info icon">
            <FaPencilAlt className="edit-icon" />

            <MdDeleteForever className="edit-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
