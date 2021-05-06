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
        console.log(name);
        const filteredList = completed.filter(order => {
            switch (name) {
                case "pickedupNumber":
                    console.log(order);
                    if (order.pickedupNumber == value) {
                        return order;
                    };
                    break;
                case "pro":
                    if (order.pro == value) {
                        return order;
                    };
                    break;
                case "puDate":
                    if (order.puDate == value) {
                        return order;
                    };
                    break;
                default:
                    break;
            };
        });
        setFiltered(filteredList);
    }

    return (
        <div className="container">

            <Filter handleFilterInput={handleFilterInput} />
            {filtered.map(order => {
                console.log(order);
                return (<Order order={order} />)
            })}
        </div>
    )
}

export default Completed
