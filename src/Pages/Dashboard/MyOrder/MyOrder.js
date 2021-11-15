import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import React from 'react';

const MyOrder = ({ singleOrder, handleDelete }) => {

    return (
        <Container>
            <Card sx={{ maxWidth: 900, m: 5, backgroundColor: '#D4E6F1', border: '1px solid gray' }}>
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
                <Button variant="contained" sx={ { mb: 3 } } onClick={ () => handleDelete(singleOrder?._id) }>Delete Order</Button>
            </Card>
        </Container>
    );
};

export default MyOrder;