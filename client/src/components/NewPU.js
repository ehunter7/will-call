import React, {useState} from 'react';

const NewPU = () => {

    const [pickup, setPickup] = useState({
        pro: Number,
        carrier: "",
        puDate: Date,
        puTime: "0800 to 1300",
    });

    const handleInput = (event) => {
        const {name, value} = event.target;
            setPickup({ ...pickup,
                [name]: value
            });
     
    };

return(
<div>
    <form>
    <label htmlFor="pro">PRO</label>
    <input id="pro" type="number" name="pro" required onChange={(e) => handleInput(e)}></input>
    <label htmlFor="carrier">Carrier</label>
    <input id="carrier" type="text" name="carrier" required onChange={(e) => handleInput(e)}></input>
    <label htmlFor="puDate">Pick-up Date</label>
    <input id="puDate" type="date" name="puDate" required onChange={(e) => handleInput(e)}></input>
    <label htmlFor="puTime">Pick-up Time</label>
    <input id="puTime" type="text" name="puTime" defaultValue="0800 to 1300" onChange={(e) => handleInput(e)}></input>
    <button>submit</button>
    </form>
</div>
);
};

export default NewPU;