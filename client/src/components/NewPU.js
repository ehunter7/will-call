const NewPU = ({ handleInput, handleSubmit }) => {
  return (
    <div className="newPUForm">
      <form>
        <div className="pickup-info">
          <div>
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

          <div className="">
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
        <div className="pickup-info">
          <div className="">
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

          <div className="">
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

        <div className="row">
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
      </form>
    </div>
  );
};

export default NewPU;
