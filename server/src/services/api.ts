import axios from 'axios';

// https://api.waqi.info/feed/shanghai/?token=demo

const api = axios.create({
  baseURL: 'https://api.waqi.info',
});

export default api;
