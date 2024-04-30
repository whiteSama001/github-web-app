import axios from 'axios';

//const axios = require ('axios');

const baseUrl = 'https://api.github.com';
const  authToken = "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";

const createRepo = async (accessToken, repoName)=>{
    try {
        const response = await axios.post(`${baseUrl}/user/repos`, {
            name : repoName,
        },{
            headers:{
                Authorization : `token ${accessToken}`
            }
        });
        return response.data;
}
    catch (error){
        console.error ('Error creating repository:', error.response.data)
        throw error;

    }
};

const deleteRepo =  async(accessToken,owner,repositoryName)=>{
    try{
        const response = await axios.delete
    }
    catch (error){
        console.error ('Error deleting repository:', error.response.data)
        throw error;

    }
}


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