import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import PlaceOrder from '../PlaceOrder/PlaceOrder';
import ProductDetails from '../ProductDetails/ProductDetails';

const Purchase = () => {
    const { user } = useAuth();
    const { productId } = useParams(); 
    const [productDetails, setProductDetails] = useState({});
    useEffect(() => {
        fetch(`https://morning-basin-57336.herokuapp.com/products/${ productId }`).then(res => res.json()).then(data => setProductDetails(data));
    }, []);
    return (
        <Container sx={{ flexGrow: 1 }}>
            <h1 style={ { fontFamily: 'Lucida Console' } }>Hello <span style={ { color: '#7B241C' } }>{ user.displayName }</span>!</h1>
            <h5 style={ { fontFamily: 'Lucida Console' } }>({ user.email })</h5>
            <h1 style={ { fontFamily: 'Lucida Console' } }>
                Want to Order This Product?
            </h1>

            <Grid container spacing={{ xs: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
                <Grid item xs={12} sm={12} md={8}>
                    <ProductDetails
                        productDetails={ productDetails }
                    ></ProductDetails>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <PlaceOrder
                        user={ user }
                        productDetails={ productDetails }
                    ></PlaceOrder>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Purchase;