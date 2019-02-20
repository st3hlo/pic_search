import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 18a0377aa974eb18656576552e69ea5d048dd9cec8b7b4611ac4b72fec15e74f'
    }
});