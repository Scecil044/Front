import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import CustomButton from "./CustomButton";
import { users } from "../utils/data";

function MenuList({ user, onClick }) {
  const handleLogOut = () => {};

  return (
    <div>
      <Menu as="div" className={"inline-block text-left"}>
        <div className="flex">
          <Menu.Button className="inline-flex gap-2 w-full rounded-md bg-white md:px-4 py-2 text-sm text-slate-700 font-medium hover:bg-opacity-20">
            <div className="leading[80px] flex flex-col items-start">
              <p className="text-sm font-semibold">
                {user?.firstName ?? user?.name}
              </p>
              <span className="text-sm text-blue-600">
                {user?.jobTitle ?? user?.email}
              </span>
            </div>
            <img
              src={user?.profileUrl}
              alt="profile image"
              className="w-10 h-10 object-cover rounded-full"
            />
            <BiChevronDown
              className="h-8 w-8 text-slate-700"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-50 right-2 w-56 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg focus:outline-none">
            <div className="p-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to={`${
                      user?.accountType ? "user-profile" : "company-profile"
                    }`}
                    className={`${
                      active ? "bg-blue-500 text-white" : "text-gray-900"
                    } group w-full flex items-center rounded-md p-2 text-sm`}
                    onClick={onClick}
                  >
                    <CgProfile
                      className={`${
                        active ? "text-white" : "text-gray-600"
                      } mr-2 h-5 w-5`}
                      aria-hidden="true"
                    />
                    {user?.accountType ? "User Profile" : "Company Profile"}
                  </Link>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleLogOut()}
                    className={`${
                      active ? "bg-blue-500 text-white" : "text-gray-900"
                    } group w-full flex items-center rounded-md p-2 text-sm`}
                  >
                    <AiOutlineLogout
                      className={`${
                        active ? "text-white" : "text-gray-600"
                      } mr-2 h-5 w-5`}
                      aria-hidden="true"
                    />
                    {user?.accountType ? "User Profile" : "Company Profile"}
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = users[1];

  const handleCloseNavbar = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div className="relative z-10 bg-[#f7fdfd]">
        <nav className="container mx-auto flex justify-between items-center p-5">
          <div>
            <Link to="/" className="text-blue-700 text-xl font-bold">
              Find<span className="text-blue-500">Jobs</span>
            </Link>
          </div>

          <ul className="hidden lg:flex gap-10">
            <li>
              <Link to="/">Find Jobs</Link>
            </li>
            <li>
              <Link to="/companies">Companies</Link>
            </li>
            <li>
              <Link to="/upload-job">Upload Job</Link>
            </li>
            <li>
              <Link to="/about-us">About</Link>
            </li>
          </ul>

          <div className="hidden lg:block">
            <Link to="/user-auth">
              {!user?.token ? (
                <CustomButton
                  title="Sign In"
                  containerStyles={`border border-blue-600 rounded-full py-1.5 px-5 text-base outline-none hover:bg-blue-600 hover:text-white transition-all duration-200`}
                />
              ) : (
                <div>
                  <MenuList user={user} />
                </div>
              )}
            </Link>
          </div>
          <button
            className="block lg:hidden text-slate-900"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <AiOutlineClose size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
        </nav>

        {/* Mobile navigation */}
        <div
          className={`${
            isOpen ? "absolute flex bg-[#f7fdfd] " : "hidden"
          } container mx-auto lg:hidden flex-col pl-8 gap-3 py-5`}
        >
          <Link to="/">Find Jobs</Link>

          <Link to="/companies">Companies</Link>

          <Link to="/upload-job">Upload Job</Link>

          <Link to="/about-us">About</Link>

          <div className="w-full py-10">
            {!user?.token ? (
              <a href="/user-auth">
                <CustomButton
                  title="Sign In"
                  containerStyles={`text-blue-600 py-1.5 px-5 focus:outline-none hover:bg-blue-700 hover:text-white rounded-full text-base border border-blue-600`}
                />
              </a>
            ) : (
              <div>
                <MenuList user={user} onClick={handleCloseNavbar} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
