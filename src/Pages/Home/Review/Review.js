import { Avatar, Card, CardContent, Grid, Rating, Typography } from '@mui/material';
import React from 'react';

const Review = ({ review }) => {
    const { name, img, detailedReview, reviewText, rating } = review;
    return (
        <Grid item xs={4}>
            <Card sx={{ maxWidth: 500, m: 2 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
                    <Grid item xs={12} sm={12} md={3}>
                        <Avatar alt="Remy Sharp" sx={{ m: 1 }} src={ img } />
                        <Typography sx={ { color: '#28B463', m: 1 } } gutterBottom variant="h6" component="div">
                            { name }
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={9} sx={ { borderLeft: 1 } }>
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                " { reviewText } "
                            </Typography>
                            <hr />
                            <Typography variant="body2" color="text.secondary">
                                { detailedReview }
                            </Typography>
                            <Rating name="read-only" value={ rating } precision={0.5} readOnly />
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    );
};

export default Review;