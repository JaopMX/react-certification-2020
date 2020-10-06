import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Typography, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import YoutubeContext from '../../../providers/Youtube';
import { searchVideos } from '../../../services/youtubeService';
import useStyles from './SearchBar.styles';

const SearchBar = () => {
  const history = useHistory();
  const classes = useStyles();
  const { setVideos } = useContext(YoutubeContext);
  const [searchParam, setSearchParam] = useState('');

  const fetchData = async () => {
    try {
      const response = await searchVideos(searchParam);
      setVideos(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Link to="/">
        <Typography className={classes.title} variant="h6" noWrap>
          TochoTube
        </Typography>
      </Link>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          value={searchParam}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          onChange={(e) => {
            setSearchParam(e.currentTarget.value);
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              fetchData();
              history.push('/');
              e.preventDefault();
            }
          }}
        />
      </div>
    </>
  );
};

export default SearchBar;
