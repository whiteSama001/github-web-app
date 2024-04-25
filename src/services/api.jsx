import axios from 'axios';

//const axios = require ('axios');

const baseUrl = 'https://api.github.com';
const fetchRepos = async (username) => {
    try{
        const response = await 
        axios.get(`${baseUrl}/users/${username}/repos`);
        return response.data;
    } catch (error){
        console.error('Error fetching repositories:', error);
        throw error;
    }
};

export default fetchRepos;