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
  color,
  handleUpdate,
  handlePickedUp,
  handleSetToCancel,
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
      style={{ backgroundColor: color }}
      className="orderCard"
      onClick={() =>
        order.status === "cancelled" || order.status === "completed"
          ? handleDetails()
          : null
      }
    >
      <div
        onClick={() =>
          order.status === "pending" ? (editor ? null : handleDetails()) : null
        }
      >
        <div className="orderNumbers">
          <div className="order-info">
            {" "}
            <p>
              <b className="info">{order.pickupNumber}</b>
            </p>
          </div>

          <div className="order-info">
            {" "}
            <p>
              <b className="info">{order.pro}</b>
            </p>
          </div>

          <div className="order-info">
            <p>
              <b className="info">{order.carrier}</b>
            </p>
          </div>

          <div className="order-info">
            {" "}
            <p>
              <b className="info">
                {`${pickupDate.getMonth() + 1}/${pickupDate.getDate() + 1}`}
              </b>
            </p>
          </div>
        </div>

        {order.status !== "completed" ? (
          <p className="note ml-5">
            Notes: {getNotes()}
            {editor ? (
              <button onClick={() => showEditor(!editor)}>cancel</button>
            ) : (
              isEditor()
            )}
          </p>
        ) : null}
      </div>

      <div className="detail-container">
        <div className="">
          {order.showDetails ? (
            <div className="detail-info">
              <Details
                handleInput={handleInput}
                order={order}
                updated={updated}
              />
            </div>
          ) : null}
        </div>
        {order.status !== "pending" ? null : (
          <div className="Update-fields">
            {order.showDetails && order.status === "pending" ? (
              <div>
                <Updates
                  handleInput={handleInput}
                  order={order}
                  handleUpdate={handleUpdate}
                  handlePickedUp={handlePickedUp}
                  handleSetToCancel={handleSetToCancel}
                />
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
