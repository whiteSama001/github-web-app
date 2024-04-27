import React from "react";

const Pagination = ({ currentPage, totalPages, OnPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <nav className="mt-4 flex justify-center">
      <ul className="flex ">
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className="mr-2">
            <button
              className={`px-3 py-1 rounded-md mx-auto ${
                pageNumber === currentPage
                  ? "bg-custom-purple text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => OnPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
