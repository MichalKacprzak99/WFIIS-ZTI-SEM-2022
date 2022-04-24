import axios from 'axios';

// TODO update url
// TODO Add CORS

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.baseURL = 'http://localhost:8081/api/';
axios.defaults.headers['Content-Type'] = 'application/json';
// axios.defaults.headers.common['Access-Control-Allow-Methods']
// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
// header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

export default axios.create();