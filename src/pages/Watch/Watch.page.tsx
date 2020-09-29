import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { relatedVideos } from '../../services/youtubeService';
import SmallCard from '../../components/SmallCard';

interface ParamTypes {
  videoId: string;
}

const WatchPage = () => {
  const { videoId } = useParams<ParamTypes>();
  const [related, setRelated] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await relatedVideos(videoId);
      setRelated(response);
    };
    fetchData();
  }, [videoId]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={9}>
        <iframe
          width="1100"
          height="700"
          allowFullScreen
          frameBorder="0"
          title="rick roll"
          src={`https://www.youtube.com/embed/${videoId}?controls=0&autoplay=1}`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
      </Grid>
      <Grid item xs={3}>
        {related !== [] &&
          related?.map((video) => {
            return (
              <SmallCard
                key={video.id.videoId}
                title={video.snippet.title}
                subtitle={video.snippet.channelTitle}
                thumbnailSrc={video.snippet.thumbnails.medium.url}
                idVideo={video.id.videoId}
              />
            );
          })}
      </Grid>
    </Grid>
  );
};

export default WatchPage;
