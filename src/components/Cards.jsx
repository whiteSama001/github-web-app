import React from 'react';

const Card = ({title}) => {
  return (
    <div className="  w-80 h-18 rounded overflow-hidden shadow-lg bg-white mt-8">
      <img className="w-24" src="https://via.placeholder.com/350x150" alt="Placeholder" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Tag 1</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Tag 2</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Tag 3</span>
      </div>
    </div>
  );
};

export default Card;
