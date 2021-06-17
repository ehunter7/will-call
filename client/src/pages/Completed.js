import React, { useEffect, useState } from "react";
import Order from "../components/Order";
// import API from '../utils/api';
import Filter from "../components/Filter";
import Selection from "../components/Selection";
import { useStateContext } from "../utils/GlobalState";

const Completed = ({ completedPage, setCompletedPage }) => {
  const [state, dispatch] = useStateContext();

  // used to hold completed pickup list.
  const [completed, setCompleted] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const getCompleted = state.pickups.filter(
      (order) => order.status === "completed"
    );
    setCompleted(getCompleted);
    setFiltered(getCompleted);
  }, [state.pickups]);

  // handle input from filter component
  const handleFilterInput = (e) => {
    const { name, value } = e.target;

    const filteredList = completed.filter((order) => {
      if (name === "pickedupNumber") {
        return (order.pickedupNumber + "").indexOf(value) > -1;
      } else if (name === "pro") {
        return (order.pro + "").indexOf(value) > -1;
      } else if (name === "puDate") {
        const pu = new Date(order.puOn);
        const day = pu.getDate();
        const month = pu.getMonth() + 1;
        const year = pu.getFullYear();
        const dateString = `${month}/${day}/${year}`;
        console.log(month);
        return dateString.includes(value);
      }
      return null;
    });
    setFiltered(filteredList);
  };

  return (
    <div className="container mainContent">
      <Selection />

      <Filter handleFilterInput={handleFilterInput} />
      <div className="orderDiv">
        {filtered.map((order) => {
          return <Order key={order._id} order={order} />;
        })}
      </div>
    </div>
  );
};

export default Completed;
