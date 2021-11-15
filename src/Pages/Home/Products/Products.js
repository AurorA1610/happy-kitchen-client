import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import useProducts from '../../../Hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useProducts();
    return (
        <Container sx={{ flexGrow: 1 }}>
            <h1 style={ { fontFamily: 'Lucida Console', m: 1, color: '#7FB3D5' } }>Featured Products</h1>
            <Grid container spacing={{ xs: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {Array.from(products.slice(0, 6)).map((product, index) => (
                    <Grid item xs={12} sm={12} md={4} key={index}>
                        <Product
                            key={ product._id }
                            product={ product }
                        ></Product>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Products;