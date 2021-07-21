import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/auth";
import { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faBell as frBell } from "@fortawesome/free-regular-svg-icons";

const ProfileNavbar = () => {
  const { isLoggedIn, Logout, user } = useContext(AuthContext);

  if (isLoggedIn) {
    return (
      <div className="col-span-5 flex justify-end items-center">
        <div className="w-12 h-12">
          <img
            alt={`${user} profile pic`}
            className="rounded-full border border-gray-100 shadow-sm"
            src="https://via.placeholder.com/150"
          />
        </div>
        <div className="py-2 px-3">
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div className="py-2 px-3">
          <Link to="/" onClick={Logout}>
            <FontAwesomeIcon icon={faSignOutAlt} />
          </Link>
        </div>
      </div>
    );
  } else {
    return (
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
    );
  }
};

export default ProfileNavbar;
