const NewPU = () => {
return(
<div>
    <label for="pro">PRO</label>
    <input id="pro" type="number" name="pro"></input>
    <label for="carrier">Carrier</label>
    <input id="carrier" type="text" name="carrier"></input>
    <label for="puDate">Pick-up Date</label>
    <input id="puDate" type="date" name="puDate"></input>
    <label for="puTime">Pick-up Time</label>
    <input id="puTime" type="text" name="puTime" defaultValue="0800 to 1300"></input>
</div>
);
};

export default NewPU;