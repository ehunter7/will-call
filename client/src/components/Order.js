import React from 'react'
import './style.css';

const Order = ({order}) => {
console.log(order);

const pickupDate = new Date(order.puDate);


    return (
        <div className="orderCard">
            <p>Pick-up #: {order.pickupNumber}</p>

            <p>PRO: {order.pro}</p>
            <p>Carrier: {order.carrier}</p>

            <p>Scheduled Pick-up date: {`${pickupDate.getMonth() + 1}/${pickupDate.getDate()}`}</p>
            <p>Pick-up Time: {order.puTime}</p>
            {/* <p>Date Picked up</p>
            <p>Loader</p>
            <p>CSR Confirmed</p>
            <p>Notes</p>
            <p>CSR</p>
            <p>Receiver</p> */}
        </div>
    )
}

export default Order
