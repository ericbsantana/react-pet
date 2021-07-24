import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMars,
  faVenus,
  faQuestionCircle,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as frHeart } from "@fortawesome/free-regular-svg-icons";

import React, { useState, useEffect } from "react";
import api from "../../../helpers/axios";

const PetCards = (props) => {
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);
  const [ownerData, setOwnerData] = useState({});

  const getOwnerId = async () => {
    try {
      let response = await api.get(`/users/${props.ownerid}`);
      setOwnerData(response.data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getOwnerId(); //TODO: THIS MAY LEAD TO PERFORMANCE ISSUES. DO A SINGLE REQUEST TO TAKE ALL OWNER IDS
  }, []);

  function toggleFav() {
    setIsFavorite(!isFavorite); //TODO: CREATE, DELETE FAVORITES FROM DB AND *UPDATE*
  }

  return (
    <div className="my-1 px-1 lg:w-1/5 flex flex-col">
      <article className="overflow-hidden h-full rounded-lg shadow-lg bg-white h-100">
        <Link to={`/pets/${props.id}`}>
          <img
            alt="Placeholder"
            className="w-full object-cover h-3/5"
            src={props.img}
          />
        </Link>

        <header className="flex items-center justify-between leading-tight p-2 md:p-4 md:pb-0">
          <div className="flex  items-center space-around">
            <h1 className="text-lg no-underline text-black">{props.petname}</h1>
            <span className="p-2">
              {props.sex === "m" ? (
                <FontAwesomeIcon
                  icon={faMars}
                  size="lg"
                  className="text-blue-500"
                />
              ) : props.sex === "f" ? (
                <FontAwesomeIcon
                  icon={faVenus}
                  size="lg"
                  className="text-pink-500"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faQuestionCircle}
                  size="lg"
                  className="text-green-500"
                />
              )}
            </span>
          </div>
          <button className="text-grey-darker text-sm" onClick={toggleFav}>
            {isFavorite && (
              <div className="ml-4 text-sm inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full">
                <FontAwesomeIcon icon={faHeart} size="lg" />
                <p className="ml-2">Loved it</p>
              </div>
            )}
            {!isFavorite && (
              <div className="ml-4 text-sm inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full">
                <FontAwesomeIcon icon={frHeart} size="lg" />
              </div>
            )}
          </button>
        </header>
        <div className="md:pt-0 md:p-4 mb-auto">
          <p className="text-gray-500 text-sm"> {props.shortdescription} </p>
        </div>
        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <Link
            to={`/users/ + ${props.nickname}`}
            className="flex items-center no-underline hover:underline text-black"
            href="#"
          >
            <img
              alt="Placeholder"
              className="block rounded-full"
              src="https://picsum.photos/32/32/?random"
            />
            <p className="ml-2 text-sm">{ownerData.person_name}</p>
          </Link>
        </footer>
      </article>
    </div>
  );
};

export default PetCards;
