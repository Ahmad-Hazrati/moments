import axios from "axios";

axios.defaults.baseURL = 'https://drf-api-blog-e8bc679bb796.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;