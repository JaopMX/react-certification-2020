import React, { useState, useEffect } from 'react';
import { Paper, Grid, Typography, IconButton } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import AuthCheck from '../AuthCheck';
import { getVideobyId } from '../../services/youtubeService';
import { isFavorite, addFavorite, removeFavorite } from '../../services/favoriteService';
import { truncateStr } from '../../utils/fns';

const VideoInfo = ({ videoId }: any) => {
  const [video, setVideo] = useState<any>(null);
  const [isMyFavorite, setIsMyFavorite] = useState(0);

  const handleMarkFavorite = () => {
    setIsMyFavorite(1);
    addFavorite(video?.snippet.title, videoId, video.snippet.thumbnails.standard.url);
  };

  const handleUnmarkFavorite = () => {
    setIsMyFavorite(0);
    removeFavorite(videoId);
  };

  useEffect(() => {
    setIsMyFavorite(isFavorite(videoId));
  }, [videoId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoResponse = await getVideobyId(videoId);
        setVideo(videoResponse);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [videoId]);

  return (
    <Paper elevation={1} style={{ height: '20vh', width: 1100, padding: '1rem' }}>
      <Grid container spacing={1}>
        <Grid item xs={10}>
          <Typography variant="h6" component="p">
            {video?.snippet.title}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            {truncateStr(video?.snippet.description)}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <AuthCheck>
            {isMyFavorite ? (
              <IconButton aria-label="Mark favorite" onClick={handleUnmarkFavorite}>
                <StarIcon color="primary" />
              </IconButton>
            ) : (
              <IconButton aria-label="Unmark favorite" onClick={handleMarkFavorite}>
                <StarBorderIcon color="primary" />
              </IconButton>
            )}
          </AuthCheck>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default VideoInfo;
