import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faSearch,
  faBell,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import img_Logo from "../images/img_Logo.png";

function Header() {
  return (
    <div className="flex justify-between h-24 items-center mx-10 px-4 text-black font-semibold">
      <img className="w-8" src={img_Logo} alt="Logo" />
      <div className="flex text-lg ">
        <button className="p-2">Trang chủ</button>
        <button className="p-2">Tạo</button>

      </div>
  
      <div className="w-3/4">
        <form action="" className="w-full">
          <div className="relative flex items-center w-full">
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3 pointer-events-none text-gray-500 dark:text-gray-400"
            />
            <input
              type="text"
              name="search"
              placeholder="Tìm kiếm"
              autoComplete="off"
              aria-label="Tìm kiếm"
              className="w-full h-12 pl-10 py-2 pr-3  placeholder-gray-500 text-black rounded-full border border-none  bg-gray-100 focus:ring-blue-300 focus:ring-4 outline-none hover:bg-zinc-200"
            />
          </div>
        </form>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faBell}
          className="text-2xl text-gray-500 dark:text-gray-400"
        />
      </div>
      <div>
        <FontAwesomeIcon
          icon={faCommentDots}
          className="text-2xl text-gray-500 dark:text-gray-400"
        />
      </div>
      <div>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
}
export default Header;
