import React from "react";
import "./style.css";
const Selection = ({newPU, showNewPU}) => {
  return (
    <div className="selectionGroup">
<div className="selectionButtons">
        <button onClick={() => showNewPU(!newPU)}>Create New Pick-up</button>

        <button className="completedButton">Completed</button>
        </div>
    </div>
  );
};

export default Selection;
