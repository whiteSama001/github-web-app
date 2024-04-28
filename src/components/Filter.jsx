import down from "../assets/down.png";

const Filter = () => {
  return (
    <div className="bg-white rounded-lg flex flex-col h-3/5 divide-y">
      <div className="flex flex-col h-2/4">
        <div className="flex justify-between">
          <span className=" pl-3 pt-2 font-semibold my-auto"> View type </span>
          <img
            src={down}
            className=" inline-block w-1/6 h-10 pt-2  my-auto mr-2"
          />
        </div>
        <div className="flex justify-evenly">
          <input
            type="checkbox"
            className="w-4 h-4 ml-1 border-2 my-auto text-custom-purple border-gray-300"
          />

          <div className="w-3/5 text-xs font-medium my-auto p-1">
            Search titles only
          </div>
          <div className=" bg-gray-400 rounded-md text-white w-4 h-4 text-center mr-2 my-auto text-xs">
            2
          </div>
        </div>
        <div className="flex justify-evenly">
          <input
            type="checkbox"
            className="w-4 h-4 ml-1 border-4 my-auto text-custom-purple border-gray-300"
          />

          <div className="w-3/5 text-xs font-medium my-auto p-1">
            Has thumbnail
          </div>
          <div className=" bg-gray-400 rounded-md text-white w-4 h-4 text-center mr-2 my-auto text-xs">
            4
          </div>
        </div>
        <div className="flex justify-evenly">
          <input
            type="checkbox"
            className="w-4 h-4 ml-1 border-4 my-auto text-custom-purple border-gray-300"
          />

          <div className="w-3/5 text-xs font-medium my-auto p-1">
            Has description
          </div>
          <div className=" bg-gray-400 rounded-md text-white w-4 h-4 text-center mr-2 my-auto text-xs">
            12
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Filter;
