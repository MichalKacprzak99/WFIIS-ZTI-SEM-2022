import axios from 'axios';

// TODO update url
// TODO Add CORS
axios.defaults.baseURL = 'https://wfiis-cloud-project-backend.herokuapp.com/api_v1/';
axios.defaults.headers['Content-Type'] = 'application/json';

export default axios.create();