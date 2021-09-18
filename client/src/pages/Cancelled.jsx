import React, {useContext, useState, useEffect} from 'react'
import { useStateContext, authContext } from '../utils/GlobalState';
import API from '../utils/api'

import NewPU from "../components/NewPU";
import Profile from "../components/Profile";
import Selection from "../components/Selection";
import Filter from "../components/Filter";
import Header from "../components/Header";
import Order from "../components/Order";


const Cancelled = () => {
const [state, dispatch] = useStateContext();
const [cancelled, setCancelled] = useState([]);
const [filtered, setFiltered] = useState([]);
const { authData } = useContext(authContext);
const [newPU, showNewPU] = useState();
const [puList, setPuList] = useState([]);




const alternatingColor = ["#c5c3c6", "#dcdcdd"]
let index = 0;

useEffect(() => {
    const getCancelled = state.pickups.filter(
      (order) => order.status === "cancelled"
    );
    setCancelled(getCancelled);
    setFiltered(getCancelled);
  }, [state.pickups]);

    // handle input from filter component
    const handleFilterInput = (e) => {
        const { name, value } = e.target;
    
        const filteredList = cancelled.filter((order) => {
          if (name === "pickupNumber") {
            return (order.pickupNumber + "").indexOf(value) > -1;
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

  //Used for creating a new pickup
  const [pickup, setPickup] = useState({
    pro: Number,
    carrier: "",
    puDate: Date,
    puTime: "0800 to 1300",
    notes: "",
    comments: "",
    loader: "",
    puOn: Date,
    user: authData.user.username,
  });

  //Handles input from new pickup form
  const handleInput = (event) => {
    const { name, value } = event.target;

    setPickup({ ...pickup, [name]: value });
  };

  //Handles new pickup submit
  const handleSubmit = (e) => {
    e.preventDefault();
    API.newPickup(pickup).then((res) => {
      showNewPU(!newPU);
      // setpickups(pickups.concat(res.data));
      dispatch({ type: "new-pickup", payload: res.data });
      setPuList(state.pickups);
      setPickup({
        pro: Number,
        carrier: "",
        puDate: Date,
        puTime: "0800 to 1300",
        notes: "",
        comments: "",
        loader: "",
        puOn: Date,
      });
      dispatch({ type: "open-new-pickup" });
    });
  };

    return (
        <>
        {!state.openNewPickup ? null : (
          <NewPU handleSubmit={handleSubmit} handleInput={handleInput} />
        )}
        {state.openProfile ? <Profile /> : null}
  
        <div className="content">
          <div className="content-buttons">
            <Selection />
            <Filter handleFilterInput={handleFilterInput} />
          </div>
          <div className="header">
            <Header pageTitle="Cancelled Pickups" />
          </div>
          <div className=" mainContent">
            <div className="Order-header">
              <div className="header-title">
                <p>Pick-up number</p>
              </div>
              <div className="header-title">
                <p>PRO number</p>
              </div>
              <div className="header-title">
                <p>Carrier</p>
              </div>
              <div className="header-title">
                <p>Last Updated</p>
              </div>
            </div>
            <div className="orderDiv">
              {filtered.map((order) => {
                index++;
                return (
                  <Order
                    key={order._id}
                    order={order}
                    color={alternatingColor[index % alternatingColor.length]}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </>
    )
}

export default Cancelled
