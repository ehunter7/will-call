import React from "react";

const Details = ({ order, handleInput }) => {
  const created = new Date(order.createdOn);
  return (
    <div>
      <div className="row">
        <div className="col-md-9">
          <div className="row orderNumbers">
            <p className="col-md-4">
              Created by: <b className="info">{order.csr}</b>
            </p>
            <p className="col-md-4">
              Created on:{" "}
              <b className="info">
                {" "}
                {`${created.getHours()}:${created.getMinutes()} on ${
                  created.getMonth() + 1
                }/${created.getDate()}`}
              </b>
            </p>
            <p className="col-md-4">
              Reciever:
              <b className="info">{order.receiver}</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
