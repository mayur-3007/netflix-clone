import axios from 'axios';
import React from 'react';

// base url to make request to the movie database
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default instance;
