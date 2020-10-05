import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = 'https://www.googleapis.com/youtube/v3';
const SEARCH_PATH = '/search';
const VIDEOS_PATH = '/videos';
const KEY = `${process.env.REACT_APP_GOOGLE_API_KEY}`;
const HEADERS = { Accept: 'application/json' };

interface AxiosConfig extends AxiosRequestConfig {
  resposeEncoding: string;
}

const instanceConfig: AxiosConfig = {
  baseURL: BASE_URL,
  responseType: 'json',
  resposeEncoding: 'utf8',
  params: {
    key: KEY,
  },
  headers: HEADERS,
};

const instance = axios.create(instanceConfig);

export const searchVideos = (searchParam: string) => {
  return instance
    .get(SEARCH_PATH, {
      params: { part: 'snippet', maxResults: 20, q: searchParam },
    })
    .then((res) => res.data.items);
};

export const getVideobyId = (videoId: string) => {
  return instance
    .get(VIDEOS_PATH, {
      params: { part: 'snippet', id: videoId },
    })
    .then((res) => res.data.items[0]);
};

export const relatedVideos = async (videoId: string) => {
  return instance
    .get(SEARCH_PATH, {
      params: {
        part: 'snippet',
        type: 'video',
        maxResults: 20,
        relatedToVideoId: videoId,
      },
    })
    .then((res) => {
      if (res !== null) return res.data.items;
    });
};
