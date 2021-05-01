import React from "react";
import "./style.css";

const Order = ({ order }) => {
  console.log(order);

  const pickupDate = new Date(order.puDate);
  const updated = new Date(order.updatedOn);

  return (
    <div className="orderCard">
      <div className="row">
        <div className="col-md-9">
          <div className="row orderNumbers">
            <p className="col-md-4">
              Pick-up #: <b className="info">{order.pickupNumber}</b>
            </p>
            <p className="col-md-4">
              PRO: <b className="info">{order.pro}</b>
            </p>
            <p className="col-md-4">
              Last Updated:
              <b className="info">
                {" "}
                {`${updated.getHours()}:${updated.getMinutes()} on ${
                  updated.getMonth() + 1
                }/${updated.getDate()}`}
              </b>
            </p>
          </div>

          <div className="row quickDetails">
            <p className="col-md-4">
              Carrier: <b className="info">{order.carrier}</b>
            </p>

            <p className="col-md-4">
              Scheduled Pick-up date:{"  "}
              <b className="info">{`${
                pickupDate.getMonth() + 1
              }/${pickupDate.getDate()}`}</b>
            </p>
            <p className="col-md-4">
              PU Time: <b className="info">{order.puTime}</b>
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="orderButtons">
            <button className="orderBtn">Update</button>
          </div>
          <div className="orderButtons">
            <button className="orderBtn">Details</button>
          </div>
        </div>
      </div>

      {/* <p>Date Picked up</p>
            <p>Loader</p>
            <p>CSR Confirmed</p>
            <p>Notes</p>
            <p>CSR</p>
            <p>Receiver</p> */}
    </div>
  );
};

export default Order;
