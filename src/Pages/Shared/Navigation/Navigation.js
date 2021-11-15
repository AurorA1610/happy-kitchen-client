import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={ { backgroundColor: '#F39C12 ' } }>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ShoppingCartIcon />
          </IconButton>
          <Typography variant="h4" component="div" sx={ { fontStyle: 'italic', color: '#FAD7A0', fontFamily: 'Cursive'} }>
            Happy Kitchen
          </Typography>
          
          <Box sx={{ flexGrow: 1 }}>
            <NavLink style={ { textDecoration: 'none', color: 'white' } } to="/products">
              <Button color="inherit">Products</Button>
            </NavLink>
            {
              user?.displayName ? <p style={ { borderRadius: 10, marginLeft: 70, backgroundColor: '#1ABC9C', padding: 5, display: 'inline', textDecoration: 'underlined' } }>{ user.displayName }</p> : <> </>
            }
            {
                    user?.email ? 
                    <Button color="inherit" onClick={ logout }>Log out</Button>
                    : <NavLink style={ { textDecoration: 'none', color: 'white' } } to="/login"><Button color="inherit">Login</Button></NavLink>
            }
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navigation;