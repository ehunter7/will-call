import React, { useState } from "react";
import Details from "./Details";
import Updates from "./Updates";
import { FaPencilAlt } from "react-icons/fa";
import "./style.css";

const Order = ({
  order,
  handleInput,
  openDetails,
  openUpdates,
  handleUpdate,
  handlePickedUp
}) => {
  //state that shows note editor
  const [editor, showEditor] = useState(false);
console.log(order);
  // Sets date to display
  const pickupDate = new Date(order.puDate);
  let updated = null;
  if(order.status !== 'completed'){
   updated = new Date(order.updatedOn);
  } else {
    updated = new Date(order.puDate);
  }

  // function to either get notes or notes input field for updating.
  const getNotes = () => {
    return editor ? (
      <>
        <input
        className="notesEditor"
          type="text"
          name="notes"
          defaultValue={order.notes}
          onChange={(e) => handleInput(e)}
        ></input>
        <button onClick={(e) => {handleUpdate(e, order._id); showEditor(!editor);}}>
          Submit Notes
        </button>
      </>
    ) : (
      order.notes
    );
  };

  //function to not show buttons if pickup is completed


  return (
    <div className="orderCard">
      <div className="row">
        <div className="col-md-9">
          <div className="row orderNumbers">
            <p className="col-md-4">
              Pick-up #: <b className="info">{order.status !== "completed" ? order.pickupNumber : order.pickedupNumber}</b>
            </p>
            <p className="col-md-4">
              PRO: <b className="info">{order.pro}</b>
            </p>
            <p className="col-md-4">
              {order.status !== 'completed' ? 'Last Updated:': 'Picked Up On:'}
              <b className="info">
                {" "}
                {order.status !== "completed" ? <>{updated.getHours()}:{updated.getMinutes()} on {
                  updated.getMonth() + 1
                }/{updated.getDate()}</> : <>{
                  updated.getMonth() + 1
                }/{updated.getDate()}</>}
              </b>
            </p>
          </div>

    {order.status !== "completed" ? <div className="row quickDetails">
            <p className="col-md-4">
              Carrier: <b className="info">{order.carrier}</b>
            </p>

            <p className="col-md-4">
              Scheduled Pick-up date:{"  "}
              <b className="info">{`${
                pickupDate.getMonth() + 1
              }/${pickupDate.getDate() + 1}`}</b>
            </p>
            <p className="col-md-4">
              PU Time: <b className="info">{order.puTime}</b>
            </p>
          </div> : null}
        </div>
        <div className="col-md-3">
          <div className="orderButtons">
            {order.status !== "completed" ? <button
              className="orderBtn"
              onClick={(e) => openUpdates(order._id)}
            >
              Update
            </button> : null}
          </div>
          <div className="orderButtons">
            <button
              className="orderBtn"
              onClick={(e) => openDetails(order._id)}
            >
              Details
            </button>
          </div>
        </div>
      </div>

{order.status !== "completed" ? <p className="note">
        Notes: {getNotes()}
        {editor ? (
          <button onClick={() => showEditor(!editor)}>cancel</button>
        ) : (
          <sup className="notesEdit" onClick={() => showEditor(!editor)}>
            <FaPencilAlt />
          </sup>
        )}
      </p> : null}

      {order.showDetails ? (
        <Details handleInput={handleInput} order={order} />
      ) : null}
      {order.showUpdates ? (
        <Updates
          handleInput={handleInput}
          order={order}
          handleUpdate={handleUpdate}
          handlePickedUp={handlePickedUp}
        />
      ) : null}
    </div>
  );
};

export default Order;
