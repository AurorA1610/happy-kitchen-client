import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';

export default function Dashboard() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={ { display: 'inline' } }>
      <Button
        sx={ { color: 'white' } }
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
            <NavLink style={ { textDecoration: 'none', color: 'black' } } to="/myorders">
                <Button color="inherit">My Orders</Button>
            </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <NavLink style={ { textDecoration: 'none', color: 'black' } } to="/pay">
                <Button color="inherit">Payment</Button>
            </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <NavLink style={ { textDecoration: 'none', color: 'black' } } to="/review">
                <Button color="inherit">Review</Button>
            </NavLink>
        </MenuItem>
      </Menu>
    </div>
  );
}
