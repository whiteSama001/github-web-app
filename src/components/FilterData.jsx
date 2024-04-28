const FilterData = () => {
  return (
    <div className="flex justify-evenly">
      <div>
        <input
          type="checkbox"
          className="w-4 h-4 ml-1 border-2 my-auto text-custom-purple border-gray-300"
        />
        {/* <div className=' '>01</div> */}
        <div className="w-3/5 text-xs font-medium my-auto p-1">
          Search titles only
        </div>
        <div className=" bg-gray-400 rounded-md text-white w-4 h-4 text-center mr-2 my-auto text-xs">
          01
        </div>
      </div>
    </div>
  );
};

export default FilterData;
