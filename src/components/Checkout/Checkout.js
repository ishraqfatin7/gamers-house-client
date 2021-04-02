import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = () => {
    const { id } = useParams();

    // push to local storage: a temporary place for database

    const [cart, setCart] = useState([])
    const newCart = {...cart[0]};
    console.log(newCart)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(newCart);
    useEffect(() => {
        fetch(`https://secret-eyrie-89475.herokuapp.com/checkout/${id}`)
            .then(res => res.json())
            .then(data => setCart(data))
    }, [id]);
    
    const placeOrder = (data) => {
        const orderDetails = {...loggedInUser,order: newCart}
        fetch('https://secret-eyrie-89475.herokuapp.com/addOrder',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then( res => res.json())
        .then(data =>{
            if(data){
                alert('Your Order Placed Successfully')
            }
        })
    }
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h1>Items:</h1>
                {cart.map(data => (
                   <ul> <li>{data.name}
                   <br></br>
                   </li>
                   <li>Price: {data.price}$</li></ul>
                ))}
                <button className="btn btn-success" onClick ={placeOrder}>Place Order</button>
            </div>
            </div>
        </div>
    );
};

export default Checkout;