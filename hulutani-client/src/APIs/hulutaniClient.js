import Axios from 'axios';

const hulutaniClient = Axios.create({
    baseURL: "http://localhost:4444"
});

export default hulutaniClient;