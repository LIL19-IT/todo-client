import axios from 'axios';

const axiosIntance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    // baseURL: 'https://express-todo-list-mongodb.vercel.app/api/',
    headers: {
        'Content-Type': 'application/json',
    },
})

axiosIntance.interceptors.request.use(config => {
    let token = localStorage.getItem('token');

    if (!token) {
        token = sessionStorage.getItem('token');
    }

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default axiosIntance;