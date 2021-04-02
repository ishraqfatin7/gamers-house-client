import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    const {email} = orders[0] || {};
    useEffect(() => {
        fetch('https://secret-eyrie-89475.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className ="custom h-100">
            <h1>Total Orders: {orders.length}</h1>
            {orders.map(data => (
                   <ul> <li>Name: {data.name}
                   <br></br>
                   </li>
                   <li>{data.order.name}</li></ul>
                ))}
        </div>
    );
};

export default Order;