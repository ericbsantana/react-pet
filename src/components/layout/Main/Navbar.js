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
    <div className="grid grid-cols-12 content-center	max-w-7xl mx-auto p-2 bg-yellow-500 text-gray-800 ">
      <div className="col-span-2 flex justify-center items-center">
        <Link to="/">
          <FontAwesomeIcon icon={faPaw} className="mr-2" />
          <span className="text-2xl">React Pet</span>
        </Link>
      </div>
      <div className="col-span-5 flex justify-start items-center">
        <div className="ml-2 mr-2">
          <Link
            className={`block md:inline-block  no-underline  hover:text-grey-darker  ${
              GetLocation("/") ? "font-bold" : ""
            }`}
            to="/"
          >
            Home
          </Link>
        </div>
        <div className="ml-2 mr-2">
          <Link
            to="/pets"
            className={`block md:inline-block  no-underline  hover:text-grey-darker  ${
              GetLocation("/pets") ? "font-bold" : ""
            }`}
          >
            Pets
          </Link>
        </div>
        <div className="ml-2 mr-2">
          <Link
            to="/about"
            className={`block md:inline-block no-underline  hover:text-grey-darker  ${
              GetLocation("/about") ? "font-bold" : ""
            }`}
          >
            About Us
          </Link>
        </div>
      </div>
      <div className="col-span-5 flex justify-end items-center">
        <Link
          to="/login"
          className="items-center justify-center bg-yellow-300 py-4 px-8 text-black font-bold uppercase text-xs rounded hover:bg-yellow-400 hover:text-gray-800 mr-2"
        >
          Log in
        </Link>
        <Link
          to="/signup"
          className="items-center justify-center bg-yellow-100 py-4 px-8 text-black font-bold uppercase text-xs rounded hover:bg-yellow-400 hover:text-gray-800"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
