import axios from 'axios';

export default axios.create({
  baseURL: 'https://scouts-poll-api.vercel.app/api/',
});
