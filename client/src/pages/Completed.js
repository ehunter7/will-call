import React, { useEffect, useState } from 'react'
import Order from '../components/Order';

const Completed = () => {

    // used to hold completed pickup list. 
    const [completed, setcompleted] = useState([]);

    useEffect(() => {
        
        API.getCompleted().then((res) => setCompleted(res.data))
    }, [])

    return (
        <div>
            {completed.map(order => {
                return (<Order order={order}/>)
            })}
        </div>
    )
}

export default Completed