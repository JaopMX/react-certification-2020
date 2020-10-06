import React, { useEffect, useContext } from 'react';
import { Grid } from '@material-ui/core';
import YoutubeContext from '../../providers/Youtube';
import { searchVideos } from '../../services/youtubeService.tsx';
import CustomCard from '../../components/Card';
import './Home.styles.css';

function HomePage() {
  const { videos, setVideos } = useContext(YoutubeContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await searchVideos('');
        setVideos(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [setVideos]);
  return (
    <>
      <Grid container direction="row" justify="space-evenly" alignItems="flex-start">
        {videos &&
          videos.map((video) => {
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
