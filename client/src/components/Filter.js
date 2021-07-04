import React from "react";

const Filter = ({ handleFilterInput }) => {
  return (
    <div className=" orderNumbers filter-text">
      <div className="inputFields">
        <div className="">
          <label htmlFor="puNum">Pickup Number: </label>
          <div>
            <input
              className="filter"
              id="puNum"
              type="number"
              name="pickedupNumber"
              onChange={(e) => handleFilterInput(e)}
            ></input>
          </div>
        </div>
        <div className="">
          <label htmlFor="pro">Pro Number:</label>
          <div>
            <input
              className="filter"
              id="pro"
              type="number"
              name="pro"
              onChange={(e) => handleFilterInput(e)}
            ></input>
          </div>
        </div>
        <div className="">
          <label htmlFor="date">Date:</label>
          <div>
            <input
              className="filter"
              id="date"
              type="text"
              name="puDate"
              onChange={(e) => handleFilterInput(e)}
            ></input>
          </div>
        </div>
        <div className="calendar"></div>
      </div>
    </div>
  );
};

export default Filter;
