import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const AddReview = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        data.name = user.displayName;
        data.img = user.photoURL || null;
        fetch('https://morning-basin-57336.herokuapp.com/reviews', {
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
            <h1 style={ { fontFamily: 'Lucida Console', margin: 35, color: '#7FB3D5' } }>Add A Review</h1>
            <form onSubmit={handleSubmit(onSubmit)} style={ { backgroundColor: '#E9F7EF', textAlign: 'center', padding: 20 } }>
                <label for="name">Your name: </label>
                <input disabled style={ { width: '42%', height: 30, borderRadius: 5, marginRight: 10 } } defaultValue={ user.displayName } {...register("name")} />
                <br /> <br />

                <label for="reviewText">Enter your review: </label>
                <input style={ { width: '42%', height: 30, borderRadius: 5, marginRight: 10 } } placeholder="Write your experience" {...register("reviewText", { required: true })} />
                {errors.reviewText && <span style={ { display: 'block', color: 'red' } }>This field is required</span>}
                <br /> <br />

                <label for="detailedReview">Describe the review: </label>
                <input style={ { width: '42%', height: 30, borderRadius: 5, marginRight: 10 } } placeholder="Describe your experience" {...register("detailedReview")} />
                <br /> <br />

                <label for="rating">Rate us: </label>
                <input style={ { width: '42%', height: 30, borderRadius: 5, marginRight: 10 } } placeholder="Rate us (out of 5)" {...register("rating")} />
                <br /> <br />

                <input style={ { width: '20%', backgroundColor: '#27AE60', padding: '5px 10px', borderRadius: '5px' } } type="submit" />
            </form>
        </>
    );
};

export default AddReview;