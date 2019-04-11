import axios from 'axios';

const api = axios.create({
  baseURL: 'https://omni-stack-back-end.herokuapp.com/',
});

export default api;