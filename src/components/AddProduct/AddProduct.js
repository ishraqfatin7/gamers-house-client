import React, { useState } from 'react';
import axios from 'axios';
import AdminNav from '../Admin/AdminNav';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageUrl, setImageUrl] = useState(null)
    const onSubmit = data =>{
        console.log(data);
        const productData = {
            name: data.name,
            imageUrl: imageUrl,
            quantity:data.quantity,
            brand:data.brand,
            price:data.price
    }
    const url = `https://secret-eyrie-89475.herokuapp.com/addProduct`
        console.log(productData);
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(response => console.log('From Server Side',response))

    };


    const handleImageUpload = (event) => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '2c691c64fdddb95af8e2a4459d385dbd');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);

            });
    }
    return (
        <div className="row" >
            <div className="col-sm-2">
                <AdminNav></AdminNav>
            </div>
            
            <div className="col-sm-8 mt-5 p-5 card shadow-lg rounded-lg custom" >
            <h3>Add A Product</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body py-5 d-flex">
                <div className ="row row-cols-4">
                    <div className="col-sm-3">
                        <label htmlFor="">Product Name</label>
                        <input type="text" className="form-control" name="name"  ref={register}/>
                    </div>
                    <div className="col-sm-3">
                    <label htmlFor="">Product Quantity</label>
                        <input type="text" className="form-control" name="quantity"  ref={register({ required: true })}/>
                    </div>
                    <div className="col-sm-3">
                        <label htmlFor="">Product Brand</label>
                        <input type="text" className="form-control" name="brand"  ref={register({ required: true })}/>
                    </div>
                    <div className="col-sm-3">
                        <label htmlFor="">Product Price</label>
                        <input type="text" className="form-control" name="price"  ref={register({ required: true })}/>
                    </div>
                    <div className="col-sm mt-5">
                    <input type="file" onChange={handleImageUpload} name="" id=""/>
                    <input type="submit" className="mt-5"/>
                    </div>
                </div>
               
            </form>
            </div>
        </div>
    );
};

export default AddProduct;