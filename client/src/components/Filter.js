import React from 'react'

const Filter = ({handleFilterInput}) => {
    return (
        <div className="row orderNumbers">
            <div className="col-md-4">
                <label htmlFor="puNum" >Pickup Number</label>
                <input id="puNum" type="number" name="pickedupNumber" onChange={(e) => handleFilterInput(e)}></input>
            </div>
            <div className="col-md-4">
                <label htmlFor="pro" >Pro Number</label>
                <input id="pro" type="number" name="pro" onChange={(e) => handleFilterInput(e)}></input>
            </div>
            <div className="col-md-4">
                <label htmlFor="date" >Date</label>
                <input id="date" type="text"name="puDate" onChange={(e) => handleFilterInput(e)}></input>
            </div>
        </div>
    )
}

export default Filter;
