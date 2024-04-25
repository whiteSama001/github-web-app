import {React, useState, useEffect, Suspense} from 'react'
import {useParams} from 'react-router-dom'
import fetchRepos from '../services/api';

// const Other = React.Lazy(() =>
// import ('./Other'));


const repoDetail = () => {

    const { repoName } = useParams();
    const [repository, setRepository] = useState(null);
    const [loading, setLoading] = useState(true);
    
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetchRepos('whiteSama001');
          setRepository(data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching repository:", error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, [repoName]);
  
    if (loading) {
      return <div>Loading...</div>;
    }

    if(!repository){
        return <div>Repository not found.</div>
    }

    const repoToShow = repository.find(repo => repo.name === repoName);

    return (
      <div className="">
      <h2>{repoToShow.name}</h2>
      <p> Description: {repoToShow.description} </p>
      <p> Stars: {repoToShow.stargazers_count}</p>
  </div>
    );
    
}

export default repoDetail;