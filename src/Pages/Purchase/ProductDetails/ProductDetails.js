import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const ProductDetails = ({ productDetails }) => {
    return (
        <Card sx={{ maxWidth: 700, backgroundColor: '#EBDEF0' }}>
            <CardContent>
                <Typography sx={ { m: 1, color: '#5B2C6F'} } gutterBottom variant="h3" component="div">
                    { productDetails?.name }
                </Typography>

                <hr />

                <Typography sx={ { m: 1 } } gutterBottom variant="h5" component="div">
                    Price: <span style={ { color: 'red' } }>$ { productDetails?.price }</span>
                </Typography>

                <Typography sx={ { m: 1 } } gutterBottom variant="p" component="div">
                    <span style={ { fontWeight: 'bold' } }>Color: </span>{ productDetails?.color }
                </Typography>

                <Typography sx={ { m: 1 } } gutterBottom variant="p" component="div">
                    <span style={ { fontWeight: 'bold' } }>Material: </span>{ productDetails?.material }
                </Typography>

                <Typography sx={ { m: 1 } } gutterBottom variant="p" component="div">
                    <span style={ { fontWeight: 'bold' } }>Brand: </span>{ productDetails?.brand }
                </Typography>

                <Typography sx={ { m: 1 } } gutterBottom variant="p" component="div">
                    <span style={ { fontWeight: 'bold' } }>Quantity: </span>{ productDetails?.quantity }
                </Typography>

                <Typography sx={ { m: 1 } } variant="body2" color="text.secondary">
                    <span style={ { fontWeight: 'bold', color: 'black'} }>About this item:</span> <br />
                    { productDetails?.description }
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                alt="green iguana"
                width="100%"
                image={ productDetails?.img }
            />
        </Card>
    );
};

export default ProductDetails;