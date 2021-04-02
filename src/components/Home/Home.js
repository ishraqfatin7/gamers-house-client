import React, { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../App';
import Product from '../Product/Product';
import * as ReactBootstrap from 'react-bootstrap'
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        fetch('https://secret-eyrie-89475.herokuapp.com/products')
        .then(res=>res.json())
        .then(data => setProducts(data))
        setLoading(true);
    },[])
    return (
        <div className="row d-flex justify-content-center custom" >
            {
             products.length > 0 ? products.map(eachProduct => <Product product={eachProduct} key ={eachProduct._id}></Product>): <div className="spinner-border"  role="status">
            
           </div>
            }
        </div>
    );
};

export default Home;