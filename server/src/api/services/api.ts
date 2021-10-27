import axios from 'axios';

// https://api.waqi.info/feed/beijing/?token=c6088ab502ee35bdc85e921e2c5fe019cfc5b15a

const api = axios.create({
  baseURL: 'https://api.waqi.info',
});

export default api;
