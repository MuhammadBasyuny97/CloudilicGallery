import { Search, ArrowRight } from "lucide-react";

const SearchBar = () => {
  return (
    <div className=" relative  ">
      <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
        <Search size={18} />
      </span>

      {/* Right Arrow Icon */}
      <span className="absolute inset-y-2 right-3 h-2/3 flex justify-center items-center bg-green-600 text-white cursor-pointer hover:text-green-700 transition">
        <ArrowRight size={18} />
      </span>

      <input
        type="text"
        placeholder="Search freelancers..."
        className="w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
  /*     <div className=" flex justify-center items-center cursor-pointer border-2  rounded-xl border-gray-100 relative focus:border-2 focus:border-gray-400">
      <Search className="" />
      <input
        type="text"
        placeholder="Search Freelancers"
        className="w-100 border-none rounded-lg px-4 py-2  "
      />
      <MoveRight className="mr-2 bg-green-600 text-white rounded-lg" />
    </div>*/
};

export default SearchBar;
