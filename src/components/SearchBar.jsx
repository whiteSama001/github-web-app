import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };
  return (
    <form className="flex items-center" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for a repository..."
        className="px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring focus:border-blue-500 mr-3 w-7/12"
      />
      <button
        type="submit"
        className="-ml-36 px-4 bg-custom-purple text-white font-semibold rounded-2xl hover:bg-blue-600 focus:outline-none focus:bg-blue-600 h-8 w-32"
      >
        <span className="m-auto text-center"> Search </span>
      </button>
    </form>
  );
};

export default SearchBar;
