import React from "react";
import "./style.css";
const Selection = () => {
  return (
    <div className="selectionGroup">
      <div>
        <button>Create New Pick-up</button>
      </div>
      <div>
        <button>View Active Pick-ups</button>
      </div>
      <div>
        <button>Completed</button>
      </div>
    </div>
  );
};

export default Selection;
