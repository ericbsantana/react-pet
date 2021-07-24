import PetCards from "../components/layout/Cards/PetCard";
import Searchbar from "../components/layout/Form/Search/Searchbar";

import { useState, useEffect } from "react";
import api from "../helpers/axios";

const Pets = () => {
  const [petData, setPetData] = useState([]);

  const fetchPets = async () => {
    try {
      let response = await api.get("/pets/");
      setPetData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <div className="grid grid-cols-12 align-center">
      <div className="col-span-12">
        <Searchbar
          className="border-1 border-yellow-300 outline-none bg-white h-12 mt-5 mb-5 rounded-lg mx-auto 
          focus:ring-yellow-400 focus:border-yellow-400"
        />
      </div>
      <div className="col-span-12">
        <div className="flex flex-wrap justify-center items-stretch">
          {petData.map((pet) => (
            <PetCards
              key={pet.pet_id}
              id={pet.pet_id}
              ownerid={pet.pet_ownerid}
              petname={pet.pet_name}
              sex={pet.pet_sex}
              shortdescription={pet.bio}
              img="https://purr.objects-us-east-1.dream.io/i/6138491962_2a6d192919_z1.jpg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pets;
