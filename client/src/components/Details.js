import React from "react";

import "./style.css";
const Details = ({ order, handleInput }) => {
  const created = new Date(order.createdOn);

  // Sets date to display
  const pickupDate = new Date(order.puDate);

  return (
    <div className="detail-container">
      <div className="">
        <div className="">
          <p className="">
            Created by: <b className="info"> {order.createdBy}</b>
          </p>
        </div>
        <div>
          <p className="">
            Created on:{" "}
            <b className="info">
              {" "}
              {` ${
                created.getMonth() + 1
              }/${created.getDate()} at ${created.getHours()}:${created.getMinutes()}`}
            </b>
          </p>
        </div>

        <div>
          <p className="">
            Last Updated By:
            <b className="info"> {order.lastUpdatedBy}</b>
          </p>
        </div>
        <div>
          <p className="">
            Last Updated at:{" "}
            <b className="info">
              {`${pickupDate.getHours()}:${pickupDate.getMinutes()} on
              ${pickupDate.getMonth() + 1}/${pickupDate.getDate()}`}
            </b>
          </p>
        </div>
        <div>
          <p className="">
            Receiver:
            <b className="info">{order.receiver}</b>
          </p>
        </div>
      </div>
      <div>
        {order.status !== "pending" ? (
          <>
            <div className="">
              <p className="">
                Loader: <b className="info"> {order.loader}</b>
              </p>
              <p className="">
                Carrier: <b className="info"> {order.carrier}</b>
              </p>
              <p className="">
                Scheduled Pickup Date:
                {"  "}
                <b className="info">{`${pickupDate.getMonth() + 1}/${
                  pickupDate.getDate() + 1
                }`}</b>
              </p>
            </div>
            <div className="">
              <p className="note">Notes: {order.notes}</p>
            </div>
            <div className="">
              <p className="note">Comments: {order.comments}</p>
            </div>{" "}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Details;
