import React, { useContext } from "react";

import API from "../utils/api";
import { Form } from "react-bootstrap";
import { authContext } from "../utils/GlobalState";

const Updates = ({ handleInput, order, handleUpdate, handlePickedUp, handleSetToCancel }) => {
  const { authData } = useContext(authContext);


  return (
    <div className="updates">
      <div className="d-flex justify-content-center">
        <div className="commentsArea">
          <label htmlFor="comments">Comments</label>
          {authData.user.role !== "Customer Service Rep" ? (
            <textarea
              className="comment-area"
              id="comments"
              name="comments"
              defaultValue={order.comments}
              onChange={(e) => handleInput(e)}
            />
          ) : (
            <p>{order.comments}</p>
          )}
        </div>
      </div>
      {authData.user.role !== "Customer Service Rep" ? (
        <>
          <div className="d-flex justify-content-center">
            <button
              className="w-50 mt-2 selcBTN"
              onClick={(e) => handleUpdate(e, order._id)}
            >
              update
            </button>
          </div>
          <hr />
          <Form
            onSubmit={(e) => handlePickedUp(e, order._id, order.pickupNumber)}
          >
            <div className="puInput">
              <Form.Group id="loader" className="loaderInfo">
                <Form.Label className="mr-3" htmlFor="loader">
                  Loader{" "}
                </Form.Label>
                <Form.Control
                  type="text"
                  id="loader update-label"
                  name="loader"
                  required
                  onChange={(e) => handleInput(e)}
                ></Form.Control>
              </Form.Group>
              <Form.Group id="date">
                <Form.Label htmlFor="puDate" className="mr-3">
                  Date Picked up
                </Form.Label>
                <Form.Control
                  type="date"
                  id="puDate update-label"
                  name="puOn"
                  onChange={(e) => handleInput(e)}
                  required
                ></Form.Control>
              </Form.Group>
            </div>
            <div className="puSubmit">
              <button className="w-50 mb-3 selcBTN">picked up</button>
            </div>
          </Form>
        </>
      ) : (
        <div className="puSubmit">
          <button
            className="w-50 mt-5 selcBTN"
            onClick={() => handleSetToCancel(order)}
          >
            Cancel Pick-up
          </button>
        </div>
      )}
    </div>
  );
};

export default Updates;
