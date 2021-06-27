import Axios from 'axios';

const hulutaniClient = Axios.create({
    // baseURL: "http://localhost:4444"
    baseURL: "https://hulutani.herokuapp.com"
});

export default hulutaniClient;