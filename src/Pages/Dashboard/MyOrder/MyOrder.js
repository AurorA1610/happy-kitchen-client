import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import React from 'react';

const MyOrder = ({ singleOrder, handleDelete }) => {
    return (
        <Container>
            <Card sx={{ maxWidth: 700, m: 5 }}>
                <CardMedia
                    component="img"
                    alt=""
                    height="500"
                    width="100%"
                    image={ singleOrder?.order.img }
                />
                <CardContent>
                    <Typography sx={ { m: 1, color: '#5B2C6F'} } gutterBottom variant="h3" component="div">
                        { singleOrder?.order.name }
                    </Typography>

                    <hr />

                    <Typography sx={ { m: 1 } } gutterBottom variant="h5" component="div">
                        Price: <span style={ { color: 'red' } }>$ { singleOrder?.order.price }</span>
                    </Typography>

                    <Typography sx={ { m: 1 } } gutterBottom variant="p" component="div">
                        <span style={ { fontWeight: 'bold' } }>Color: </span>{ singleOrder?.order.color }
                    </Typography>

                    <Typography sx={ { m: 1 } } gutterBottom variant="p" component="div">
                        <span style={ { fontWeight: 'bold' } }>Material: </span>{ singleOrder?.order.material }
                    </Typography>

                    <Typography sx={ { m: 1 } } gutterBottom variant="p" component="div">
                        <span style={ { fontWeight: 'bold' } }>Brand: </span>{ singleOrder?.order.brand }
                    </Typography>

                    <Typography sx={ { m: 1 } } gutterBottom variant="p" component="div">
                        <span style={ { fontWeight: 'bold' } }>Quantity: </span>{ singleOrder?.order.quantity }
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button sx={ { color: '#F39C12', textDecoration: 'underline' } } onClick={ handleDelete(singleOrder?._id) }>Delete Order</Button>
                </CardActions>
            </Card>
        </Container>
    );
};

export default MyOrder;