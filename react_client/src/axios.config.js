import axios from 'axios';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.baseURL = 'http://localhost:8081/api/';
axios.defaults.headers['Content-Type'] = 'application/json';

export default axios.create();