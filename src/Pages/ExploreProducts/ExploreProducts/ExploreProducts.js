import { Container, Grid } from '@mui/material';
import React from 'react';
import useProducts from '../../../Hooks/useProducts';
import SingleProduct from '../SingleProduct/SingleProduct';

const ExploreProducts = () => {
    const [products, setProducts] = useProducts();

    return (
        <Container sx={{ flexGrow: 1 }}>
            <h1 style={ { fontFamily: 'Lucida Console', m: 1, color: '#7FB3D5' } }>Explore Our Products</h1>
            <Grid container spacing={{ xs: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                {Array.from(products).map((singleProduct, index) => (
                    <Grid item xs={12} sm={6} md={6} key={index}>
                        <SingleProduct
                            key={ singleProduct._id }
                            singleProduct={ singleProduct }
                        ></SingleProduct>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ExploreProducts;