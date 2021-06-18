import Axios from 'axios';

const hulutaniClient = Axios.create({
    baseURL: "http://localhost:5555"
});

export default hulutaniClient;