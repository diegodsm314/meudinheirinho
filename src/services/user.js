import axios from 'axios';

const user = axios.create({
    baseURL: "http://localhost:3000"
})

export default user;