import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "../components";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { experience, jobTypes } from "../utils/data";

const FindJobs = () => {
  const [sort, setSort] = useState("Newest");
  const [page, setPage] = useState(1);
  const [numPage, setNumPage] = useState(1);
  const [recordCount, setRecordCount] = useState(0);
  const [data, setData] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [filterJobByTypes, setFilterJobByTypes] = useState([]);
  const [filterExp, setFilterExp] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const filterJobs = (val) => {
    if (filterJobByTypes.includes(val)) {
      setFilterJobByTypes(filterJobByTypes.filter((el) => el != val));
    } else {
      setFilterJobByTypes([...filterJobByTypes, val]);
    }
  };

  const filterExperience = async (e) => {
    setFilterExp(e);
  };
  console.log(filterExp);
  return (
    <div>
      <Header
        title="Find you desired job with ease"
        type="home"
        handleClick={() => {}}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        location={jobLocation}
        setLocation={setJobLocation}
      />
      <div className="container mx-auto flex gap-6 2xl:gap-10 md:px-5 md:py-6 p-0 bg-[#f7fdfd]">
        <div className="hidden md:flex flex-col w-1/6 h-fit bg-white shadow-sm">
          <p className="font-bold text-lg text-slate-800">Filter search</p>

          <div className="py-2">
            <div className="flex justify-between mb-2">
              <p className="flex items-center gap-2 font-semibold">
                <BiBriefcaseAlt2 />
                Job Type
              </p>
              <button>
                <MdOutlineKeyboardArrowDown />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {jobTypes.map((jType, index) => (
                <div index={index} className="flex gap-2 text-sm md:text-base">
                  <input
                    type="checkbox"
                    value={jType}
                    className="w-5 h-5"
                    onChange={(e) => filterJobs(e.target.value)}
                  />
                  <span>{jType}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="py-2">
            <div className="flex justify-between mb-2">
              <p className="flex items-center gap-2 font-semibold">
                <BsStars />
                Experience
              </p>
              <button>
                <MdOutlineKeyboardArrowDown />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {experience.map((exp) => (
                <div
                  index={exp?.title}
                  className="flex gap-2 text-sm md:text-base"
                >
                  <input
                    type="checkbox"
                    value={exp.value}
                    className="w-5 h-5"
                    onChange={(e) => filterExperience(e.target.value)}
                  />
                  <span>{exp.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-0 md:gap-2 md:items-center">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm md:text-base">
              Showing:<span className="font-semibold">1,920</span> jobs
              available
            </p>
            <div className="flex flex-col md:flex-row gap-0 md:gap-2 md:items-center">
              <p className="text-sm md:text-base">Sort by:</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
