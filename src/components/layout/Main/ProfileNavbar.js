import { Link } from "react-router-dom";
import React, { Fragment, useContext } from "react";

import { Logout, AuthContext } from "../../../store";

import { Menu, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSignOutAlt,
  faPlus,
  faUser,
  faDog,
} from "@fortawesome/free-solid-svg-icons";
/* import  { faBell as frBell } from "@fortawesome/free-regular-svg-icons"; */ //TODO: NOTIFICATIONS

const ProfileNavbar = () => {
  const { state, dispatch } = useContext(AuthContext);

  return (
    <div className="col-span-5 flex justify-end items-center space-x-4">
      {state.isLoggedIn ? (
        <React.Fragment>
          <div className="py-2">
            <Link to="/add">
              <FontAwesomeIcon icon={faPlus} />
            </Link>
          </div>
          <div className="py-2">
            <FontAwesomeIcon icon={faBell} />
          </div>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <div className="w-12 h-12">
                <Menu.Button className="inline-flex justify-center w-full text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  <img
                    alt="alt"
                    className="rounded-full border border-gray-100 shadow-sm"
                    src="https://via.placeholder.com/150"
                  />
                </Menu.Button>
              </div>
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
              <Menu.Items className="absolute right-0 w-40 mt-1 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-yellow-300" : "text-gray-900"
                        } group flex rounded-md rounded-b-none justify-between items-center w-full px-2 py-2 text-sm`}
                      >
                        <span className="text-sm px-3">
                          Signed as <strong>{state.user}</strong>
                        </span>
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-yellow-300" : "text-gray-900"
                        } group flex	 justify-between items-center w-full px-2 py-2 text-sm`}
                      >
                        <FontAwesomeIcon icon={faUser} />
                        <span className="px-3">Your profile</span>
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-yellow-300" : "text-gray-900"
                        } group flex justify-between items-center w-full px-2 py-2 text-sm border-t`}
                      >
                        <FontAwesomeIcon icon={faDog} />
                        <span className="px-3">Your pets</span>
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/"
                        onClick={() => {
                          Logout(dispatch);
                        }}
                      >
                        <button
                          className={`${
                            active ? "bg-yellow-300" : "text-gray-900"
                          } group flex rounded-md rounded-t-none justify-between items-center w-full px-2 py-2 text-sm border-t`}
                        >
                          <FontAwesomeIcon icon={faSignOutAlt} />
                          <span className="px-3">Sign up</span>
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Link
            to="/login"
            className="items-center justify-center bg-yellow-400 py-4 px-8 text-black font-bold uppercase text-xs rounded hover:bg-yellow-500 hover:text-gray-900 mr-2"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="items-center justify-center bg-yellow-100 py-4 px-8 text-black font-bold uppercase text-xs rounded hover:bg-yellow-400 hover:text-gray-800"
          >
            Sign up
          </Link>
        </React.Fragment>
      )}
    </div>
  );
};

export default ProfileNavbar;
