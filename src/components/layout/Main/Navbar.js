import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import ProfileNavbar from "./ProfileNavbar";

const Navbar = (props) => {
  function GetLocation(compareLocation) {
    const location = useLocation();
    return location.pathname === compareLocation;
  }

  return (
    <div className="grid grid-cols-12 content-center mx-auto p-2 bg-yellow-300 text-gray-800 ">
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
      <ProfileNavbar />
    </div>
  );
};

export default Navbar;
