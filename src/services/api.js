import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dev-radar-ws.herokuapp.com'
});

export default api;
