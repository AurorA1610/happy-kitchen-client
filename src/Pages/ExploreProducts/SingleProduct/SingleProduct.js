import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({ singleProduct }) => {
    const { _id, img, name, description, price } = singleProduct;
    return (
        <Card sx={{ maxWidth: 500, border: '1px solid gray', m: 1, backgroundColor: '#D4EFDF' }}>
            <CardMedia
                component="img"
                alt=""
                height="400"
                image={ img }
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={ { fontWeight: 'bold' } }>
                    { name }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    { description }
                </Typography>
                <Typography sx={ { m: 1 } } gutterBottom variant="h5" component="div">
                    Price: <span style={ { color: 'red' } }>$ { price }</span>
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/purchase/${_id}`}>
                    <Button sx={ { color: '#F39C12', textDecoration: 'underline' } }>Buy now</Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default SingleProduct;