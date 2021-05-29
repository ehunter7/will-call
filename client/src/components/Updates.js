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
        <button className="w-50" onClick={(e) => handleUpdate(e, order._id)}>
          update
        </button>
      </div>
      <hr />
      <div className="puInput">
        <div className="loaderInfo">
          <label className="mr-3" htmlFor="loader">
            Loader{" "}
          </label>
          <input
            type="text"
            id="loader"
            name="loader"
            onChange={(e) => handleInput(e)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="puDate" className="mr-3">
            Date Picked up
          </label>
          <input
            type="date"
            id="puDate"
            name="puOn"
            onChange={(e) => handleInput(e)}
            required
          ></input>
        </div>
      </div>
      <div className="puSubmit">
        <button
          className="w-50"
          onClick={(e) => handlePickedUp(e, order._id, order.pickupNumber)}
        >
          picked up
        </button>
      </div>
    </div>
  );
};

export default Updates;
