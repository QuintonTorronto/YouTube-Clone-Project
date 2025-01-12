import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { MdOutlineMic } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { useState } from "react";
import Avatar from "react-avatar";
import { useNavigate } from "react-router-dom";

import logo from "../../public/Youtube-Logo.wine.svg";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };
  return (
    <div className="flex justify-between px-6 py-2 fixed top-0 w-[100%] bg-white z-10">
      <div className="flex items-center ">
        {/* NavBar */}
        <RxHamburgerMenu className="text-2xl cursor-pointer" />
        <img src={logo} alt="" className="w-24 h-full cursor-pointer" />
      </div>
      {/* SearchBar */}
      <div className="flex items-center w-[47%] ">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 border-2 border-gray-300 rounded-l-full outline-none h-3/4"
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyUp={searchQueryHandler}
          value={searchQuery}
        />
        <button
          className="px-4 mr-4 bg-gray-200 border-2 border-l-0 border-gray-300 rounded-r-full h-3/4 hover:bg-gray-300 "
          onClick={() => searchQueryHandler("searchButton")}
        >
          <CiSearch className="text-2xl " />
        </button>
        <button className="px-4 bg-gray-200 rounded-full h-3/4 hover:bg-gray-300">
          <MdOutlineMic className="text-2xl " />
        </button>
      </div>
      <div className="flex justify-between w-[18%]">
        <button className="flex items-center px-6 py-2 text-lg font-semibold bg-gray-200 rounded-full hover:bg-gray-300">
          <IoAdd className="mr-2 text-2xl" /> Create
        </button>
        <button className="px-4 py-4 text-2xl bg-gray-200 rounded-full hover:bg-gray-300">
          <IoNotificationsOutline />
        </button>
        <button className="">
          <Avatar src="/dp_pp.jpg" size="60" round={true} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
