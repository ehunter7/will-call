import { Form } from "react-bootstrap";

const Updates = ({ handleInput, order, handleUpdate, handlePickedUp }) => {
  return (
    <div className="updates">
      <div className="d-flex justify-content-center">
        <div className="commentsArea">
          <label htmlFor="comments">Comments</label>
          <textarea
            id="comments"
            name="comments"
            defaultValue={order.comments}
            onChange={(e) => handleInput(e)}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button
          className="w-50 mt-2"
          onClick={(e) => handleUpdate(e, order._id)}
        >
          update
        </button>
      </div>
      <hr />
      <Form onSubmit={(e) => handlePickedUp(e, order._id, order.pickupNumber)}>
        <div className="puInput">
          <Form.Group id="loader" className="loaderInfo">
            <Form.Label className="mr-3" htmlFor="loader">
              Loader{" "}
            </Form.Label>
            <Form.Control
              type="text"
              id="loader"
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
              id="puDate"
              name="puOn"
              onChange={(e) => handleInput(e)}
              required
            ></Form.Control>
          </Form.Group>
        </div>
        <div className="puSubmit">
          <button className="w-50 mb-3">picked up</button>
        </div>
      </Form>
    </div>
  );
};

export default Updates;
