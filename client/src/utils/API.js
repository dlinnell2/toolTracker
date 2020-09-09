import axios from 'axios';

export default {
    getTools: () => {
        return axios.get('api/getTools')
    },
    checkExpress: () => {
        return axios.get('api/hello')
    }
}