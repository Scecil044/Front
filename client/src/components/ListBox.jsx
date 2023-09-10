import { Fragment, useState } from "react";
import { Transition, Listbox } from "@headlessui/react";
import { BsCheck2, BsChevronExpand } from "react-icons/bs";

const options = ["Newest", "Oldest", "A-Z", "Z-A"];

const ListBox = ({ sort, setSort }) => {
  return (
    <div className="w-[8rem] md:w-[10rem]">
      <ListBox value={sort} onChange={setSort}>
        <div className="relative mt-1">
          <ListBox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"></ListBox.Button>
        </div>
      </ListBox>
    </div>
  );
};

export default ListBox;
