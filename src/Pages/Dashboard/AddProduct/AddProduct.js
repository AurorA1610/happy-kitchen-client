import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        fetch('https://morning-basin-57336.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(data => {
            if(data.insertedId) {
                alert('Review Added Successfully');
                reset();
            }
        })
    };
    return (
        <>
            <h1 style={ { fontFamily: 'Lucida Console', margin: 35, color: '#7FB3D5' } }>Add A New Product</h1>
            <form onSubmit={handleSubmit(onSubmit)} style={ { backgroundColor: '#E9F7EF', textAlign: 'center', padding: 20 } }>
                <label for="name">Product's name: </label>
                <input style={ { width: '42%', height: 30, borderRadius: 5, marginRight: 10 } } {...register("name")} />
                <br /> <br />

                <label for="img">Product's image url: </label>
                <input style={ { width: '42%', height: 30, borderRadius: 5, marginRight: 10 } } {...register("img")} />
                <br /> <br />

                <label for="description">Product's description: </label>
                <input style={ { width: '42%', height: 30, borderRadius: 5, marginRight: 10 } } {...register("description")} />
                <br /> <br />

                <label for="price">Product's price: </label>
                <input style={ { width: '42%', height: 30, borderRadius: 5, marginRight: 10 } } {...register("price")} />
                <br /> <br />

                <label for="color">Product's color: </label>
                <input style={ { width: '42%', height: 30, borderRadius: 5, marginRight: 10 } } {...register("color")} />
                <br /> <br />

                <label for="material">Product's material: </label>
                <input style={ { width: '42%', height: 30, borderRadius: 5, marginRight: 10 } } {...register("material")} />
                <br /> <br />

                <label for="brand">Product's brand: </label>
                <input style={ { width: '42%', height: 30, borderRadius: 5, marginRight: 10 } } {...register("brand")} />
                <br /> <br />

                <label for="quantity">Product's quantity: </label>
                <input style={ { width: '42%', height: 30, borderRadius: 5, marginRight: 10 } } {...register("quantity")} />
                <br /> <br />

                <input style={ { width: '20%', backgroundColor: '#27AE60', padding: '5px 10px', borderRadius: '5px' } } type="submit" />
            </form>
        </>
    );
};

export default AddProduct;