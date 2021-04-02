import React, { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../App';

const ManageProduct = () => {

    const [products, setProducts] = useState([]);
    const [ isDeleted, setIsDeleted] = useState(false);
    console.log(products);
    useEffect(() => {
        fetch('https://secret-eyrie-89475.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [isDeleted])
    const handleDelete = (id) =>{
        fetch(`https://secret-eyrie-89475.herokuapp.com/deleteProduct/${id}`,{
        method: 'DELETE',
        headers : { 
            'Content-Type': 'application/json'
           }
        })
        .then(res => console.log(res))
        .then(data => setIsDeleted(data));
    }
    return (
        <div>
            <div class="jumbotron">
                <h1 className="display-4">Manage Your Products Here</h1>
                <p className="lead">From Inventory</p>
                <hr className="my-4" />
                <p>Total Products : </p>
                {products.map(data => (
                   <ul key ={data._id}> <li>{data.name}
                   <br></br>
                    <button onClick={()=> handleDelete(data._id)} className="btn btn-danger">Delete Item</button>
                   </li></ul>
                ))}

                <p className="lead">
                    
                </p>
            </div>
        </div>
    );
};

export default ManageProduct;