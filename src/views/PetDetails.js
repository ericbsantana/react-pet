import { Redirect, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../helpers/axios";

const PetDetails = () => {
  const { id } = useParams();
  const [petData, setPetData] = useState([]);
  const [error, setError] = useState(false);

  const fetchPetDetails = async () => {
    try {
      let response = await api.get(`/pets/${id}`);
      setPetData(response.data);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  useEffect(() => {
    fetchPetDetails();
  }, []);

  return (
    <p>
      {error && <Redirect to="/notfound" />}
      {petData.map((pet) => (
        <ul key={pet.pet_id}>
          <li>{pet.pet_id}</li>
          <li>{pet.pet_ownerid}</li>
          <li>{pet.pet_name}</li>
          <li>{pet.pet_sex}</li>
          <li>{pet.bio}</li>
        </ul>
      ))}
    </p>
  );
};

export default PetDetails;
