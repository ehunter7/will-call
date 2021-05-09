import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

const Selection = ({ newPU, showNewPU, setCompletedPage, completedPage }) => {
  let history = useHistory();

  const handleClick = (e) => {

    setCompletedPage(!completedPage);

    if(e.target.name === "completed"){
      history.push("/completed");      
    } else {
      history.push("/pending");
    };
  };

  return (
    <div className="selectionGroup">
      <div className="selectionButtons">
{ !completedPage ? <><button className="selcBTN" onClick={() => showNewPU(!newPU)}>
          Create New Pick-up
        </button>

        <button
          className="completedButton selcBTN"
          name='completed'
          onClick={(e) => handleClick(e)}
        >
          Completed
        </button> </>:         <button
          className="completedButton selcBTN"
          name="pending"
          onClick={(e) => handleClick(e)}
        >
          Pending
        </button>}
      </div>
    </div>
  );
};

export default Selection;
