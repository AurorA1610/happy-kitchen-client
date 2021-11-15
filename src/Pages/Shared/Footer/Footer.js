import { Grid, Typography } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react';

const Footer = () => {
    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }} sx={ { backgroundColor: '#F1948A', mt: 4 } }>
                <Grid item xs={12} sm={12} md={4}>
                    <Typography variant="h4" component="div" sx={ { fontStyle: 'italic', color: '#FAD7A0', fontFamily: 'Cursive', mb: 4 } }>
                        Happy Kitchen
                    </Typography>
                    <Typography variant="h4" component="div" sx={ { mb: 3 } }>
                        <LocalPhoneIcon sx={ { color: '#7E5109', fontSize: 50, mr: 2  } } />
                        +88-01272-282662
                    </Typography>
                    <FacebookIcon fontSize="large" sx={ { color: '#7E5109'  } } /> 
                    <TwitterIcon fontSize="large" sx={ { color: '#7E5109'  } } /> 
                    <InstagramIcon fontSize="large" sx={ { color: '#7E5109'  } } />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Typography variant="h5" component="div" sx={ { color: '#7E5109', fontWeight: 'bold', mb: 2 } }>
                        Quick Links
                    </Typography>
                    <Typography variant="p" component="div" sx={ { mb: 2 } }>
                        Home
                    </Typography>
                    <Typography variant="p" component="div" sx={ { mb: 2 } }>
                        Products
                    </Typography>
                    <Typography variant="p" component="div" sx={ { mb: 2 } }>
                        Reviews
                    </Typography>
                    <Typography variant="p" component="div" sx={ { mb: 2 } }>
                        Why Choose Us?
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Typography variant="h5" component="div" sx={ { color: '#7E5109', fontWeight: 'bold', mb: 2 } }>
                        Help
                    </Typography>
                    <Typography variant="p" component="div" sx={ { mb: 2 } }>
                        Privacy Policy
                    </Typography>
                    <Typography variant="p" component="div" sx={ { mb: 2 } }>
                        Shipping Details
                    </Typography>
                    <Typography variant="p" component="div" sx={ { mb: 2 } }>
                        Information
                    </Typography>
                </Grid>
            </Grid>
            <Typography variant="p" component="div" sx={ { p: 2, color: 'white', backgroundColor: '#7F8C8D '} }>
                © 2021 Happy Kitchen – All rights reserved.
            </Typography>
        </>
    );
};

export default Footer;