import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Awards = () => {
    return (
        <Container sx={ { border: 1, pt: 2, pb: 2, borderRadius: 5 }}  id="awards">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
                <Grid item xs={12} sm={12} md={5}>
                    <img style={ { borderRadius: 15, width: '100%', height: 400 } } src="https://i.ibb.co/7YktYjT/shop.jpg" alt="" /> 
                </Grid>
                <Grid item xs={12} sm={12} md={7}>
                    <h1 style={ { fontFamily: 'Lucida Console', marginBottom: 10, color: '#7FB3D5' } }>Why Choose Us?</h1>
                    <Typography variant="p" component="div" sx={ { mb: 5 } }>
                        Happy Kitchen is the ultimate online shopping destination offering completely hassle-free shopping experience through secure and trusted gateways. We offer you trendy and reliable shopping with all your favorite brands and more. Now shopping is easier, faster and always joyous. We help you make the right choice here. Our products are exclusively selected for you.
                    </Typography>
                    <h1 style={ { fontFamily: 'Lucida Console', margin: 1, color: '#7FB3D5' } }>Awards & Honors</h1>
                    <hr />
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }} sx={ { mt: 4 } }>
                        <Grid item xs={12} sm={12} md={4}>
                            <Typography variant="h6" component="div" sx={ { color: '#E59866 ' } }>
                                2017
                            </Typography>
                            <Typography variant="h6" component="div">
                                Top Companies by LinkedIn
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Typography variant="h6" component="div" sx={ { color: '#E59866 ' } }>
                                2019
                            </Typography>
                            <Typography variant="h6" component="div">
                                Most Trustworthy Company by Fortune   
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Typography variant="h6" component="div" sx={ { color: '#E59866 ' } }>
                                2020
                            </Typography>
                            <Typography variant="h6" component="div">
                                Community Impact Awards by Seattle Business Magazine
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Awards;