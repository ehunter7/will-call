const NewPU = ({ handleInput, handleSubmit }) => {
  return (
    <div className="newPUForm">
      <h1 className="text-center">New Pick-up</h1>
      <p className="close-newPickup">X</p>
      <div className="pickup-info">
        <div>
          <div className="puInput">
            <label htmlFor="pro">PRO</label>
            <input
              className="newPUInput"
              id="pro"
              type="number"
              name="pro"
              required
              onChange={(e) => handleInput(e)}
            ></input>
          </div>

          <div className="puInput">
            <label htmlFor="carrier">Carrier</label>
            <input
              className="newPUInput"
              id="carrier"
              type="text"
              name="carrier"
              required
              onChange={(e) => handleInput(e)}
            ></input>
          </div>
        </div>
        <div>
          <div className="puInput">
            <label htmlFor="puDate">pickup Date</label>
            <input
              className="newPUInput"
              id="puDate"
              type="date"
              name="puDate"
              required
              onChange={(e) => handleInput(e)}
            ></input>
          </div>

          <div className="puInput">
            <label htmlFor="puTime">pickup Time</label>
            <input
              className="newPUInput"
              id="puTime"
              type="text"
              name="puTime"
              defaultValue="0800 to 1300"
              onChange={(e) => handleInput(e)}
            ></input>
          </div>
        </div>
      </div>

      <div className="puInput">
        <div className="">
          <label htmlFor="notes">Notes</label>
          <textarea
            id="notes"
            className="notesTextArea"
            name="notes"
            onChange={(e) => handleInput(e)}
          ></textarea>
        </div>
        <div className="puButton">
          <button className="newPUButton " onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPU;
