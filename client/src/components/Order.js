import React from 'react'
import './style.css';

const Order = ({order}) => {

    return (
        <div className="orderCard">
            <p>Pick-up #: {order.pickupNumber}</p>
            <p>CSR</p>
            <p>PRO: {order.pro}</p>
            <p>Carrier</p>
            <p>Receiver</p>
            <p>Scheduled Pick-up date</p>
            <p>Pick-up Time</p>
            <p>Date Picked up</p>
            <p>Loader</p>
            <p>CSR Confirmed</p>
            <p>Notes</p>
        </div>
    )
}

export default Order
