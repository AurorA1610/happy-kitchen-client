import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://morning-basin-57336.herokuapp.com/reviews")
        .then(res => res.json())
        .then(data => setReviews(data))
    }, []);

    return (
        <div id="reviews">
            <h1 style={ { fontFamily: 'Lucida Console', marginTop: 60, color: '#7FB3D5' } }>Customer Reviews</h1>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
                {
                    reviews.map(review => <Review
                        key={ review._id }
                        review={ review }
                    ></Review>)
                }
            </Grid>
        </div>
        
    );
};

export default Reviews;