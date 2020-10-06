import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { AppBar, Toolbar } from '@material-ui/core';
import UserDropdown from './UserDropdown';
import SearchBar from './SearchBar';

const Grow = styled.div`
  flex-grow: 1;
`;

const useStyles = makeStyles(() =>
  createStyles({
    navbar: {
      backgroundColor: '#a83246',
    },
  })
);

const Navbar = () => {
  const classes = useStyles();

  return (
    <Grow>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <SearchBar />
          <Grow />
          <UserDropdown />
        </Toolbar>
      </AppBar>
    </Grow>
  );
};

export default Navbar;
