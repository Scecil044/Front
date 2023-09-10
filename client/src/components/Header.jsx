import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { CustomButton } from "../components";
import { popularSearch } from "../utils/data";
import { HeroImage } from "../assets";

const SearchInput = ({ placeholder, icon, value, setValue, styles }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const clearInput = () => setValue("");
  return (
    <div className={`flex w-full md:w-1/3 items-center ${styles} `}>
      {icon}
      <input
        type="text"
        value={value}
        onChange={(e) => handleChange(e)}
        className="w-full mb:w-64 outline-none bg-transparent"
        placeholder={placeholder}
      />

      <AiOutlineCloseCircle
        className={`hidden md:flex text-xl text-gray-600 cursor-pointer`}
        onClick={clearInput}
      />
    </div>
  );
};

const Header = ({
  title,
  handleClick,
  searchQuery,
  setSearchQuery,
  location,
  setLocation,
  type,
}) => {
  return (
    <div className="bg-[#f7fdfd]">
      <div
        className={`container mx-auto px-5 ${
          type ? "h-[500px]" : "h-[350px]"
        } flex items-center relative`}
      >
        <div className="w-full z-10">
          <div className="mb-8">
            <p className="font-bold text-slate-800 text-4xl ">{title}</p>
          </div>
          <div className="w-full flex items-center justify-around py-2.5 md:py-6 shadow-2xl rounded-full bg-white px-5">
            <SearchInput
              placeholder="Job title or keywords"
              icon={<AiOutlineSearch />}
              value={searchQuery}
              setValue={setSearchQuery}
              className="text-xl text-gray-600"
            />
            <SearchInput
              placeholder="Add country or city"
              icon={<CiLocationOn />}
              value={location}
              setValue={setLocation}
              className="text-xl text-gray-600"
              styles={`hidden md:flex`}
            />

            <CustomButton
              title="search"
              onClick={handleClick}
              containerStyles={`rounded-full bg-blue-500 text-white text-sm md:text-base focus:outline-none py-1 px-3 focus:bg-blue-700 shadow-sm transition-all`}
            />
          </div>
          {type && (
            <div className="flex flex-wrap gap-3 md:gap-6 w-full lg:w-1/2 py-10 md:py-14">
              {popularSearch.map((search, index) => (
                <span
                  key={index}
                  className="bg-[#1d4fd826] text-[#1d4ed8] py-1 px-2 rounded-full text-sm md:text-base"
                >
                  {search}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="w-1/3 h-full absolute top-24 md:-top-6 lg:-top-14 right-16 2xl:right-[18rem]">
          <img src={HeroImage} className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Header;
