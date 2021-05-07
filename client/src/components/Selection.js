import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

const Selection = ({newPU, showNewPU}) => {

let history = useHistory();

const handleClick = () => {

  console.log('complete!!!');

  history.push("/completed");
};

  return (
    <div className="selectionGroup">
<div className="selectionButtons">
        <button className="selcBTN" onClick={() => showNewPU(!newPU)}>Create New Pick-up</button>

        <button className="completedButton selcBTN" onClick={() => handleClick()}>Completed</button>
        </div>
    </div>
  );
};

export default Selection;