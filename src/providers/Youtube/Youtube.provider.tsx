import React from 'react';

const YoutubeContext = React.createContext({
  videos: [],
  setVideos: (values: any) => {},
});

export default YoutubeContext;
