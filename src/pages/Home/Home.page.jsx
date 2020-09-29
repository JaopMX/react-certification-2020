import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { searchVideos } from '../../services/youtubeService.tsx';
import CustomCard from '../../components/Card';
import './Home.styles.css';

function HomePage() {
  const [ytVideos, setYtVideos] = useState([]);
  const [searchParam] = useState('ibai ciego');

  useEffect(() => {
    const fetchData = async () => {
      const response = await searchVideos(searchParam);
      setYtVideos(response);
    };
    fetchData();
  }, [searchParam]);
  return (
    <>
      <Grid container direction="row" justify="space-evenly" alignItems="flex-start">
        {ytVideos &&
          ytVideos.map((video) => {
            return (
              <CustomCard
                key={video.id.videoId}
                idVideo={video.id.videoId}
                title={video.snippet.title}
                content={video.snippet.description}
                thumbnailSrc={video.snippet.thumbnails.high.url}
              />
            );
          })}
      </Grid>
    </>
  );
}

export default HomePage;
