import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
        .then(res => res.json())
        .then(data => setReviews(data))
    }, []);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <h1 style={ { fontFamily: 'Lucida Console', m: 1, color: '#7FB3D5' } }>Customer Reviews</h1>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    reviews.map(review => <Review
                        key={ review._id }
                        review={ review }
                    ></Review>)
                }
            </Grid>
        </Box>
        
    );
};

export default Reviews;