import React from 'react';
import { useHistory, useLocation } from 'react-router';


const Product = (props) => {
    console.log(props)
    const { _id, name,imageUrl,price,brand } = props.product || {};
    const history = useHistory();
    const location = useLocation();
    
    const handleClick = (id) =>{
        const url = `checkout/${id}`;
        history.push(url);
        const { from } = location.state || { from: { pathname: `/${url}` } };
        history.replace(from);
    }
    return (
        <div className="col-md-3" >
            <div className="card m-5 shadow-lg rounded-lg custom"style={{width: "18rem"}}>
                <img src={imageUrl} className="card-img-top p-5" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Laptop Brand: {brand}</p>
                    <p className="card-text">Price: {price}$</p>
                   <button className="btn btn-primary" onClick={() => handleClick(_id)}>Buy Now</button>
                </div>
            </div>

        </div>
    );
};

export default Product;