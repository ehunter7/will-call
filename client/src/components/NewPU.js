import { useStateContext } from "../utils/GlobalState";

const NewPU = ({ handleInput, handleSubmit, showNewPU }) => {
  const [state, dispatch] = useStateContext();

  return (
    <div className="newPUForm">
      <h1 className="text-center">New Pick-up</h1>
      <p
        className="close-newPickup"
        onClick={() => dispatch({ type: "open-new-pickup" })}
      >
        X
      </p>
      <div className="pickup-info">
        <div className="d-flex">
          <div className=" mr-1">
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
        <div className="d-flex">
          <div className=" mr-1">
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
      </div>

      <div className="">
        <div className="w-100">
          <label htmlFor="notes">Notes</label>
          <textarea
            id="notes"
            className="notesTextArea"
            name="notes"
            onChange={(e) => handleInput(e)}
          ></textarea>
        </div>
        <div className="puButton">
          <button
            className="newPUButton selcBTN"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPU;
