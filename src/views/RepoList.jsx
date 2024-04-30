import React, { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import fetchRepos from "../services/api";
import { Link } from "react-router-dom";
import Buttons from "../components/Buttons";
import Avatar from "../components/Avatar";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";
import Card from "../components/Cards";
import Pagination from "../components/Pagination";

const repoList = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const username = "whiteSama001";
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filterRepo = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div>Loading...</div>;
  }

  //calculate index of 1st and last card on current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentRepo = filterRepo.slice(indexOfFirstCard, indexOfLastCard);
  const timeDiff = (fetchedTime) =>
    formatDistanceToNow(new Date(fetchedTime), { addSuffix: true });

  return (
    <div className="mb-0 flex flex-col h-screen">
      <div className="flex h-18 m-auto w-full justify-between shadow-xl">
        <div>
          <h2 className="text-custom-purple text-xl font-mono py-6 font-bold ml-8">
            Repository List
          </h2>
        </div>
        <div className=" mr-6 flex flex-row py-4 gap-8 ">
       
          <Buttons variant="outlined" label="Create a repository" />
          <a  href="https://github.com/whiteSama001" target="_blank">
          <Buttons variant="regular" label="View Account" /></a>
          <Avatar />
        </div>
      </div>
      <div className="bg-slate-100 h-full flex justify-between p-8 gap-4">
        <div className="w-1/6 gap-y-9">
          <Filter />
        </div>
        <div className="flex flex-col w-full">
          <div className="gap-8">
            <SearchBar onSearch={handleSearch} />
          </div>
          <div className="grid grid-cols-3">
            {currentRepo.map((repo) => (
              <Link key={repo.id} to={`/repositories/${repo.name}`}>
                <Card
                  title={repo.name}
                  imgUrl={repo.owner.avatar_url}
                  view={repo.visibility}
                  branch={repo.default_branch}
                  updateTime={timeDiff(repo.created_at)}
                />
              </Link>
            ))}
          </div>
          <div className="">
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(repositories.length / cardsPerPage)}
              OnPageChange={paginate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default repoList;
