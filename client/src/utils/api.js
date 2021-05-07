import axios from 'axios';

export default {
    newPickup: (data) => {
        return axios.post('/api/pu/newPickup', data);
    },
    getPickups: () => {
        return axios.get('/api/pu/getPickups');
    },
    updatePU: (id, data) => {
        return axios.put('/api/pu/updatePU', {id, data});
    },
    pickedUp: (id, data, puNumber) => {
        return axios.put('/api/pu/pickedUp', {id, data, puNumber});
    },
    getCompleted: () => {
        return axios.get('/api/pu/getCompleted');
    }

};