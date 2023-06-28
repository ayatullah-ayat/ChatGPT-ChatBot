import axios from "axios";

const baseUrl = 'http://localhost:3001'

const login = async (credential) => {
    const response = await axios.post(baseUrl + '/login', credential);

    return response.data;
}

const createUser = async (user) => {
    const response = await axios.post(baseUrl + '/users', user);

    return response.data;
}

export default { login, createUser };