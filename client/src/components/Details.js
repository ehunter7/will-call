import React from "react";

const Details = ({ order, handleInput }) => {
  const created = new Date(order.createdOn);

  // Sets date to display
  const pickupDate = new Date(order.puDate);

  return (
    <>
      <div className="">
        <div className=" orderNumbers">
          <p className="">
            Created by: <b className="info">{order.createdBy}</b>
          </p>
        </div>
        <div>
          <p className="">
            Created on:{" "}
            <b className="info">
              {" "}
              {`${created.getHours()}:${created.getMinutes()} on ${
                created.getMonth() + 1
              }/${created.getDate()}`}
            </b>
          </p>
        </div>
        <div>
          <p className="">
            Reciever:
            <b className="info">{order.receiver}</b>
          </p>
        </div>
      </div>
      <div>
        {order.status !== "pending" ? (
          <>
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <p className="col-md-4">
                    Loader: <b className="info"> {order.loader}</b>
                  </p>
                  <p className="col-md-4">
                    Carrier: <b className="info"> {order.carrier}</b>
                  </p>
                  <p className="col-md-4">
                    Scheduled Pickup Date:
                    {"  "}
                    <b className="info">{`${pickupDate.getMonth() + 1}/${
                      pickupDate.getDate() + 1
                    }`}</b>
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p className="note">Notes: {order.notes}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p className="note">Comments: {order.comments}</p>
              </div>
            </div>{" "}
          </>
        ) : null}
      </div>
    </>
  );
};

export default Details;
