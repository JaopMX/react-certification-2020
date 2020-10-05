import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { relatedVideos } from '../../services/youtubeService';
import SmallCard from '../../components/SmallCard';
import VideoInfo from '../../components/VideoInfo';

interface ParamTypes {
  videoId: string;
}

const WatchPage = () => {
  const { videoId } = useParams<ParamTypes>();
  const [related, setRelated] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const relatedResponse = await relatedVideos(videoId);
      setRelated(relatedResponse);
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
        <VideoInfo videoId={videoId} />
      </Grid>
      <Grid item xs={3}>
        {related !== [] &&
          related?.map((item) => {
            return (
              <SmallCard
                key={item.id.videoId}
                title={item.snippet.title}
                subtitle={item.snippet.channelTitle}
                thumbnailSrc={item.snippet.thumbnails.medium.url}
                idVideo={item.id.videoId}
              />
            );
          })}
      </Grid>
    </Grid>
  );
};

export default WatchPage;
