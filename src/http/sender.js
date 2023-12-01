import axios from "axios";

const serverAddress = "http://localhost:8081";

export const logIn = async (username, password) => {
    axios.post(`${serverAddress}/login`, {
        username: username,
        password: password
    }).then(result => {
        return result;
    }).catch(reason => {
        console.log(reason);
        return null;
    })
};

export const assignTasks = async (endpoint) => {
    axios.get(`${serverAddress}${endpoint}}`)
    .then(response => {
        return response;
    }).catch(reason => {
        return null;
    })
}

export const getData = async (endpoint, token) => {
    axios.get(`${serverAddress}${endpoint}}`, {
        params: { token: token }
    })
    .then(response => {
        return response;
    }).catch(reason => {
        return null;
    })
}
