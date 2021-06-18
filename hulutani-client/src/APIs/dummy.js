import Axios from 'axios';

const dummyClient= Axios.create({
    baseURL: "https://60cc10e171b73400171f6f51.mockapi.io/hulutani-mock/v1"
});

export default dummyClient;
