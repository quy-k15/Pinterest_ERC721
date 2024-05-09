import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faCommentDots,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import img_Logo from "../images/img_Logo.png";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {

  const navigate = useNavigate();
  const location = useLocation();
  const GoToCreate = ()=>{
    navigate('/createItemPage'); 
  }
  const GoToHome = ()=>{
    navigate('/home'); 
  }

  const isCreatePage = location.pathname === '/createItemPage';
  const isHomePage = location.pathname === '/home';
  return (
    <div className="flex justify-between h-24 items-center mx-10 px-4 text-black font-semibold">
      <img className="w-8" src={img_Logo} alt="Logo" />
      <div className="flex text-lg ">
        <button className={`py-2 px-4 rounded-full ${isHomePage ? 'bg-gray-900 text-gray-100' : ''}`} onClick={GoToHome}>Trang chủ</button>
        <button className={`py-2 px-4 rounded-full ${isCreatePage ? 'bg-gray-900 text-gray-100' : ''}`} onClick={GoToCreate}>Tạo</button>
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
      <button>
      <FontAwesomeIcon
          icon={faBell}
          className="text-2xl text-gray-500 dark:text-gray-400"
        />
      </button>
      <button>
      <FontAwesomeIcon
          icon={faCommentDots}
          className="text-2xl text-gray-500 dark:text-gray-400"
        />
      </button>
      <button>
      <FontAwesomeIcon icon={faUser} 
         className="text-2xl text-gray-500 dark:text-gray-400 " />
      </button>
 
    </div>
  );
}
export default Header;
