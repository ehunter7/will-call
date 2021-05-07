import React from 'react'

const Filter = ({ handleFilterInput }) => {
    return (
        <div className="row orderNumbers ">
            <div className="inputFields col-md-12">

                <div className="col-md-4">
                    <label htmlFor="puNum" >Pickup Number: </label>
                    <input className="filter" id="puNum" type="number" name="pickedupNumber" onChange={(e) => handleFilterInput(e)}></input>
                </div>
                <div className="col-md-4">
                    <label htmlFor="pro" >Pro Number:</label>
                    <input className="filter" id="pro" type="number" name="pro" onChange={(e) => handleFilterInput(e)}></input>
                </div>
                <div className="col-md-4">
                    <label htmlFor="date" >Date:</label>
                    <input className="filter" id="date" type="text" name="puDate" onChange={(e) => handleFilterInput(e)}></input>
                </div>
            </div>

        </div>
    )
}

export default Filter;
