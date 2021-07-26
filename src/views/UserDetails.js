import { Redirect, useParams } from "react-router-dom";
import api from "../helpers/axios";

import { AuthContext } from "../store";

import { useContext, useState, useEffect } from "react";

import ProfileCard from "../components/layout/Cards/ProfileCard";

const UserDetails = () => {
  const { id } = useParams();
  const { state } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);
  const [isUser, setIsUser] = useState(false);
  const [error, setError] = useState(false);

  const fetchUserDetails = async () => {
    if (state.isLoggedIn && parseInt(id) === parseInt(state.user_id)) {
      setIsUser(true);
    }

    try {
      let response = await api.get(`/users/${id}`);
      setUserData(response.data);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <div>
      {error && <Redirect to="/notfound" />}
      {userData.map((user, index) => (
        <ProfileCard
          key={user.username}
          id={user.user_id}
          person_name={user.person_name}
          bio={user.bio}
          city={user.city}
          address={user.address}
          email={user.email}
          website={user.website}
          phone={user.phone}
          isUser={isUser}
        />
      ))}
    </div>
  );
};

export default UserDetails;
