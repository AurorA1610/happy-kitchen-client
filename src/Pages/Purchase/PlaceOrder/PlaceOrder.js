import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';

const PlaceOrder = ({ productDetails, user }) => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.order = {
            name: productDetails?.name,
            img: productDetails?.img,
            price: productDetails?.price,
            color: productDetails?.color,
            material: productDetails?.material,
            brand: productDetails?.brand,
            quantity: productDetails?.quantity
        };
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(data => {
            if(data.insertedId) {
                alert('Order processed successfully');
                reset();
            }
        })
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={ { backgroundColor: 'wheat', textAlign: 'center', padding: 20 } }>

        <label for="name">Your Name: </label>
        <input style={ { width: '50%', height: 30, borderRadius: 5, marginRight: 10 } } placeholder="Enter your name" defaultValue={ user.displayName } {...register("name", { required: true })} />
        {errors.name && <span style={ { display: 'block', color: 'red' } }>This field is required</span>}
        <br /> <br />

        <label for="email">Email: </label>
        <input style={ { width: '50%', height: 30, borderRadius: 5, marginRight: 10 } } placeholder="Enter your email" defaultValue={ user.email } {...register("email", { required: true })} />
        {errors.email && <span style={ { display: 'block', color: 'red' } }>This field is required</span>}
        <br /> <br />

        <label for="phone">Phone: </label>
        <input style={ { width: '50%', height: 30, borderRadius: 5, marginRight: 10 } } placeholder="Enter your phone number" {...register("phone", { required: true })} />
        {errors.phone && <span style={ { display: 'block', color: 'red' } }>This field is required</span>}
        <br /> <br />

        <label for="address">Address: </label>
        <input style={ { width: '50%', height: 30, borderRadius: 5, marginRight: 10 } } placeholder="Enter your address" {...register("address", { required: true })} />
        {errors.address && <span style={ { display: 'block', color: 'red' } }>This field is required</span>}
        <br /> <br />
        
        <input style={ { width: '30%', backgroundColor: '#27AE60', padding: '5px 10px', borderRadius: '5px' } } type="submit" />
        </form>
    );
};

export default PlaceOrder;