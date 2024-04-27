import React from 'react';

const Card = ({ title,imgUrl,view,branch,updateTime }) => {

  const sTitle = title.length > 20 ? title.slice(0,20) +'...' : title 
  return (
    <div className="hover:ring hover:border-custom-purple flex flex-col w-80 h-36 rounded-md overflow-hidden shadow-lg bg-white mt-8">
      <div className=" flex">
        <img
          className="w-14 h-12 rounded-xl p-2"
          src={imgUrl}  
          alt="Avatar"
        />
        <div className="flex font-bold text-xl mb-2 justify-between mt-2">
          {sTitle}
        </div>
        </div>
        <div>
        <p className="text-gray-500 text-base pl-14">Lorem ipsum dolor sit amet</p>
        </div>
      <div className="py-8 pl-8 flex justify-around">
        <span className=" inline-block bg-custom-purple rounded-full px-3 py-1 text-sm font-semibold text-white">
          {view}
        </span>
        <span className=" inline-block bg-custom-purple rounded-full px-3 py-1 text-sm font-semibold text-white">
          {branch}
        </span>
        <span className=" inline-block pl-3 py-1 text-sm font-semibold text-gray-500">
          {updateTime}
        </span>
      </div>
    </div>
  );
};

export default Card;
