import React from "react";
import Details from "./Details";
import Updates from "./Updates";
import "./style.css";

const Order = ({ order, handleInput, openDetails, openUpdates }) => {
  // Sets date to display
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
            <button className="orderBtn"  onClick={(e) => openUpdates(order._id)}>Update</button>
          </div>
          <div className="orderButtons">
            <button className="orderBtn" onClick={(e) => openDetails(order._id)}>
              Details
            </button>
          </div>
        </div>
      </div>

      {order.showDetails ? <Details handleInput={handleInput} order={order}/> : null}
      {order.showUpdates ? <Updates handleInput={handleInput} order={order}/> : null}
    </div>
  );
};

export default Order;
