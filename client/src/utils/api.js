import axios from 'axios';

export default {
    newPickup: (data) => {
        return axios.post('/api/pu/newPickup', data);
    }
};