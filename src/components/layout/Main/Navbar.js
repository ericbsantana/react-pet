import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Navbar = (props) => {
  function GetLocation(compareLocation) {
    const location = useLocation();
    return location.pathname === compareLocation;
  }

  return (
    <nav className="nav flex items-center justify-around px-4 bg-yellow-500 text-gray-800 ">
      <div className="flex flex-no-shrink items-center py-3">
        <Link to="/">
          <FontAwesomeIcon icon={faPaw} className="mr-2" />
          <span className="text-2xl mr-5">React Pet</span>
        </Link>

        <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto text-gray-800 ">
          <li className="border-t md:border-none">
            <Link
              className={`block md:inline-block px-4 py-3 no-underline  hover:text-grey-darker  ${
                GetLocation("/") ? "font-bold" : ""
              }`}
              to="/"
            >
              Home
            </Link>
          </li>

          <li className="border-t md:border-none">
            <Link
              to="/pets"
              className={`block md:inline-block px-4 py-3 no-underline  hover:text-grey-darker  ${
                GetLocation("/pets") ? "font-bold" : ""
              }`}
            >
              Pets
            </Link>
          </li>

          <li className="border-t md:border-none">
            <Link
              to="/about"
              className={`block md:inline-block px-4 py-3 no-underline  hover:text-grey-darker  ${
                GetLocation("/about") ? "font-bold" : ""
              }`}
            >
              About Us
            </Link>
          </li>
        </ul>
      </div>

      <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
      <label
        className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
        htmlFor="menu-btn"
      ></label>
      <div className="flex">
        <div className="inline-flex ">
          <Link
            to="/login"
            className="inline-flex items-center justify-center bg-yellow-300 py-4 px-8 text-black font-bold uppercase text-xs rounded hover:bg-yellow-400 hover:text-gray-800"
          >
            Log in
          </Link>
        </div>
        <div className="ml-3 inline-flex rounded-md shadow">
          <Link
            to="/signup"
            className="inline-flex items-center justify-center bg-yellow-100 py-4 px-8 text-black font-bold uppercase text-xs rounded hover:bg-yellow-400 hover:text-gray-800"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
