
const Updates = ({ handleInput, order, handleUpdate }) => {
  const getToday = () => {
    const todaysDate = new Date();
    return `${
      todaysDate.getMonth + 1
    }/${todaysDate.getDate()}/${todaysDate.getFullYear()}`;
  };
  return (
    <div className="updates">
      <div className="commentsArea">
        <label htmlFor="comments">Comments</label>
        <textarea id="comments" name="comments" defaultValue={order.comments} onChange={(e) => handleInput(e)}/>
      </div>
      <form className="puForm">
        <div>
          <table>
            <tr>
              <div className="loaderInfo">
                <td>
                  <label htmlFor="loader">Loader</label>
                </td>
                <td>
                  <input type="text" id="loader" name="loader" onChange={(e) => handleInput(e)} required></input>
                </td>
              </div>
            </tr>
            <tr>
              <div className="puInfo">
                <td>
                  <label htmlFor="puDate">Date Picked up</label>
                </td>
                <td>
                  <input type="date" id="puDate" name="puDate" onChange={() => handleInput} required></input>
                </td>
              </div>
            </tr>
          </table>
        </div>

        <div className="puSubmit">
          <button>picked up</button>
        </div>

      </form>
      <div className="updateSubmit">
          <button onClick={(e) => handleUpdate(e, order._id)}>update</button>
        </div>
    </div>
  );
};

export default Updates;
