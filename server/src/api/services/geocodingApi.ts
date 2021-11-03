import axios from 'axios';

// https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY

// token= AIzaSyCBA4Lm2POl7b0LEF1n2H9-wH4uFC8Xo2Y

const geocodingApi = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/geocode/json',
});

export default geocodingApi;
