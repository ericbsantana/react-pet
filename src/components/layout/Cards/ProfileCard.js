import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEdit,
  faMars,
  faQuestionCircle,
  faVenus,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import React, { useState, useEffect, Fragment } from "react";

import Button from "../Form/Button";
import Modal from "../Form/Modal";

import api from "../../../helpers/axios";

const ProfileCard = (props) => {
  const [userPets, setUserPets] = useState([]);
  const [error, setError] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [isEditable, setIsEditable] = useState(props.isUser);

  const toggleContactInfo = () => {
    setShowContact(!showContact);
  };

  const fetchUserDetails = async () => {
    try {
      let responsePets = await api.get(`/users/${props.id}/pets`);
      setUserPets(responsePets.data);
      setError(false);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  useEffect(() => {
    setIsEditable(props.isUser);
  }, [props.isUser]);

  return (
    <React.Fragment>
      <div className="mt-5 place-items-center content-center border rounded-lg border-gray-300 bg-gray-100 shadow-2xl space-y-5 p-5">
        <div className="flex justify-center flex-col">
          <div className="flex flex-grow w-full items-center place-items-center flex-col space-y-2 mb-5">
            <img
              alt="alt"
              className="rounded-full border border-gray-100 shadow-sm w-300 h-300"
              src="https://via.placeholder.com/300"
            />
            <h1 className="font-bold text-3xl">{props.person_name}</h1>
            <h2 className="text-gray-500">{props.bio}</h2>
            <h3 className="space-x-1 flex-grow">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>{props.city}</span>
            </h3>
            {isEditable && (
              <Button className="space-x-1">
                <FontAwesomeIcon icon={faEdit} />
                <span>Edit profile</span>
              </Button>
            )}
            {!isEditable && (
              <Button onClick={toggleContactInfo} className="space-x-1">
                <FontAwesomeIcon icon={faPhoneAlt} />
                <span>Contact Info</span>
              </Button>
            )}

            <Modal
              title="Contact info"
              isOpen={showContact}
              setIsOpen={setShowContact}
              description={
                <>
                  <span className="space-x-2">
                    <span>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <span>{props.email}</span>
                  </span>
                  <span className="space-x-1">
                    <span>
                      <FontAwesomeIcon icon={faPhoneAlt} />
                    </span>
                    <span> {props.phone}</span>
                  </span>
                </>
              }
            />
          </div>
          <div className="w-full h-2 border-t border-gray-300 my-5"></div>
          <div className="flex items-center justify-center space-y-5 flex-col">
            {isEditable ? (
              <h1 className="text-2xl font-bold">My pets</h1>
            ) : (
              <h1 className="text-2xl font-bold">
                Pets of {props.person_name}
              </h1>
            )}
            <div className="flex items-center justify-center">
              {userPets.map((pet) => (
                <Link to={`/pets/${pet.pet_id}`}>
                  <div className="flex items-center justify-center flex-col hover:bg-yellow-300 rounded-md p-2">
                    <img
                      alt="alt"
                      className="w-full rounded-md object-fit border border-gray-100 shadow-sm"
                      src="https://via.placeholder.com/200"
                    />
                    <h2>{pet.pet_name}</h2>
                    <div>
                      <span className="p-2">
                        {pet.pet_sex === "m" ? (
                          <FontAwesomeIcon
                            icon={faMars}
                            size="lg"
                            className="text-blue-500"
                          />
                        ) : pet.pet_sex === "f" ? (
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
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileCard;
{
  /* <li>{user.email}</li>
  <li>{user.phone}</li>
          <li>{user.bio}</li>
          <li>{user.website}</li>
          <li>{user.city}</li> */
}

{
  /*  */
}
