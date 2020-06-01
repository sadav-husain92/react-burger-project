import axios from 'axios';

const instance = axios.create({
    baseURL:'https://burger-project-c2491.firebaseio.com/'
});

export default instance;