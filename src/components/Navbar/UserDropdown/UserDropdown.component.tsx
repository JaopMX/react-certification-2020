import React, { useState } from 'react';
import { IconButton, Typography, Menu, MenuItem } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../../providers/Auth';
import useStyles from './UserDropdown.styles';

const UserDropdown = () => {
  const { authenticated, user, logout } = useAuth();
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuId = 'primary-search-account-menu';
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  function deAuthenticate(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to="/" className={classes.menuLink}>
          Home
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/favorites" className={classes.menuLink}>
          Favorites
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/" className={classes.menuLink} onClick={deAuthenticate}>
          Logout
        </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <div className={classes.sectionDesktop}>
        {authenticated ? (
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
            {user && (
              <Typography className={classes.username} variant="h6" noWrap>
                {user.name}
              </Typography>
            )}
          </IconButton>
        ) : (
          <Link to="/login">Log in</Link>
        )}
      </div>
      {renderMenu}
    </>
  );
};

export default UserDropdown;
