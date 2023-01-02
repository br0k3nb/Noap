import axios from 'axios';

const config =  {
    host: 'localhost',
    port: 3001,
    baseUrl: '/',
};

const {host, port} = config;

const api = axios.create({baseURL: `http://${host}:${port}/`});

// api.interceptors.response.use(
//     response => response,
//     error => {
//         if (!error.response)
//             return Promise.reject({error: 'Não foi possível concluir a operação, tente novamente'});

//         return Promise.reject(error.response.data);
//     },
// );

export default api;