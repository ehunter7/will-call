import React, { useState, useContext } from "react";
import Details from "./Details";
import Updates from "./Updates";
import { FaPencilAlt } from "react-icons/fa";
import "./style.css";
import { useStateContext, authContext } from "../utils/GlobalState";

const Order = ({
  order,
  handleInput,
  setPuList,

  handleUpdate,
  handlePickedUp,
}) => {
  //global state
  const [state, dispatch] = useStateContext();

  //get user info
  const { authData } = useContext(authContext);

  //state that shows note editor
  const [editor, showEditor] = useState(false);

  // Sets date to display
  const pickupDate = new Date(order.puDate);
  let updated = null;

  if (order.status !== "completed") {
    updated = new Date(order.updatedOn);
  } else {
    updated = new Date(order.puOn);
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
        <button
          onClick={(e) => {
            handleUpdate(e, order._id);
            showEditor(!editor);
          }}
        >
          Submit Notes
        </button>
      </>
    ) : (
      order.notes
    );
  };

  const handleDetails = () => {
    dispatch({ type: "open-details", id: order._id });
  };

  const isEditor = () => {
    if (authData.user.role !== "Receiver") {
      return (
        <sup
          className="notesEdit"
          onClick={() => {
            handleDetails();
            showEditor(!editor);
          }}
        >
          <FaPencilAlt />
        </sup>
      );
    }
  };

  return (
    <div
      className="orderCard"
      onClick={() => (order.status === "completed" ? handleDetails() : null)}
    >
      <div
        onClick={() =>
          order.status === "pending" ? (editor ? null : handleDetails()) : null
        }
      >
        <div className="row">
          <div className="col-md-12">
            <div className="row orderNumbers">
              <p className="col-md-4">
                Pick-up #: <b className="info">{order.pickupNumber}</b>
              </p>
              <p className="col-md-4">
                PRO: <b className="info">{order.pro}</b>
              </p>
              <p className="col-md-4">
                {order.status !== "completed"
                  ? "Last Updated:"
                  : "Picked Up On:"}
                <b className="info">
                  {" "}
                  {order.status !== "completed" ? (
                    <>
                      {updated.getHours()}:{updated.getMinutes()} on{" "}
                      {updated.getMonth() + 1}/{updated.getDate()}
                    </>
                  ) : (
                    <>
                      {updated.getMonth() + 1}/{updated.getDate() + 1}
                    </>
                  )}
                </b>
              </p>
            </div>

            {/* {order.status !== "completed" ? (
              <div className="row quickDetails">
                <p className="col-md-4">
                  Carrier: <b className="info">{order.carrier}</b>
                </p>

                <p className="col-md-4">
                  Scheduled Pick-up date:{"  "}
                  <b className="info">{`${pickupDate.getMonth() + 1}/${
                    pickupDate.getDate() + 1
                  }`}</b>
                </p>
                <p className="col-md-4">
                  PU Time: <b className="info">{order.puTime}</b>
                </p>
              </div>
            ) : null} */}
          </div>

        </div>

        {order.status !== "completed" ? (
          <p className="note">
            Notes: {getNotes()}
            {editor ? (
              <button onClick={() => showEditor(!editor)}>cancel</button>
            ) : (
              isEditor()
            )}
          </p>
        ) : null}
      </div>
      <div className="row">
        {order.showDetails ? (
          <div className="col-md-3">
            <Details handleInput={handleInput} order={order} />
          </div>
        ) : null}
        {order.showDetails && order.status === "pending" ? (
          <div className="col-md-9">
            <Updates
              handleInput={handleInput}
              order={order}
              handleUpdate={handleUpdate}
              handlePickedUp={handlePickedUp}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Order;
