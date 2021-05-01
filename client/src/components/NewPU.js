
import React, { useState } from "react";
import API from "../utils/api";

const NewPU = ({handleInput, handleSubmit}) => {


  return (
    <div>
      <form>
        <label htmlFor="pro">PRO</label>
        <input
          id="pro"
          type="number"
          name="pro"
          required
          onChange={(e) => handleInput(e)}
        ></input>
        <label htmlFor="carrier">Carrier</label>
        <input
          id="carrier"
          type="text"
          name="carrier"
          required
          onChange={(e) => handleInput(e)}
        ></input>
        <label htmlFor="puDate">Pick-up Date</label>
        <input
          id="puDate"
          type="date"
          name="puDate"
          required
          onChange={(e) => handleInput(e)}
        ></input>
        <label htmlFor="puTime">Pick-up Time</label>
        <input
          id="puTime"
          type="text"
          name="puTime"
          defaultValue="0800 to 1300"
          onChange={(e) => handleInput(e)}
        ></input>
        <button onClick={(e) => handleSubmit(e)}>submit</button>
      </form>
    </div>
  );
};

export default NewPU;
