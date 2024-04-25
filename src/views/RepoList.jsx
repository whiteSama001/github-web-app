import React, { useEffect, useState } from "react";
import fetchRepos from "../services/api";
import { Link } from "react-router-dom";
import Buttons from "../components/Buttons";
import Avatar from "../components/Avatar";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";
import Card from "../components/Cards";

const repoList = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const username = "whiteSama001";
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRepos(username);
        setRepositories(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching repositories:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  //To change the page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div>Loading...</div>;
  }

  //calculate index of 1st and last card on current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard  - cardsPerPage;
  const currentRepo = repositories.slice(indexOfFirstCard, indexOfLastCard);


  return (
    <div className="mb-0 flex flex-col h-screen">
      <div className="flex h-18 m-auto w-full justify-between shadow-xl">
        <div>
          <h2 className="text-purple-500 text-xl font-mono py-6 font-bold mx-2">
            Repository List
          </h2>
        </div>
        <div className=" mr-6 flex flex-row py-4 gap-8 ">
          <Buttons variant="outlined" label="Create a repository" />
          <Buttons variant="regular" label="My Account" />
          <Avatar />
        </div>
      </div>
      <div className="bg-slate-100 h-full flex justify-between p-8 gap-4">
        <Filter />
        <div className="flex flex-col w-full">
          <div className="gap-8"> 
          <SearchBar />
          </div>
          <div className="grid grid-cols-3 h-screen">
            {currentRepo.map((repo) => (
              <Link key={repo.id} to={`/repositories/${repo.name}`}>
                <Card title={repo.name} />
              </Link>
            ))}
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default repoList;
