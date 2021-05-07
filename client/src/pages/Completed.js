import React, { useEffect, useState } from 'react'
import Order from '../components/Order';
import API from '../utils/api';
import Filter from '../components/Filter';

const Completed = () => {

    // used to hold completed pickup list. 
    const [completed, setCompleted] = useState([]);
    const [filtered, setFiltered] = useState([]);

    //sets completed state
    useEffect(() => {
        API.getCompleted().then((res) => {

            setCompleted(res.data);
            setFiltered(res.data);
        })

    }, []);

    // handle input from filter component
    const handleFilterInput = (e) => {

        const { name, value } = e.target;
   
        const filteredList = completed.filter(order => {
            if(name === "pickedupNumber"){
                return ((order.pickedupNumber + '').indexOf(value) > -1);
            } else if(name === "pro"){
                return ((order.pro + '').indexOf(value) > -1);
            } else if(name === "puDate") {
                const pu = new Date(order.puOn);
                const day = pu.getDate();
                const month = pu.getMonth() +1;
                const year = pu.getFullYear();
                const dateString = `${month}/${day}/${year}`;
console.log(month);
                return dateString.includes(value);
            };
        });
        setFiltered(filteredList);
    }

    return (
        <div className="container mainContent">

            <Filter handleFilterInput={handleFilterInput} />
            {filtered.map(order => {
                console.log(order);
                return (<Order order={order} />)
            })}
        </div>
    )
}

export default Completed
