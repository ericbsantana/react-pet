import Banner from "../layout/Main/Banner";
import Card from "../layout/Card/Card";
import { Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <div className="w-full bg-yellow-50">
        <div className="flex justify-center align-center">
          <div className="flex flex-col w-full justify-center">
            <input
              className="border-1 border-yellow-300 bg-white h-24 w-3/4 mt-5 mb-5 rounded-lg mx-auto focus:ring-1 focus:ring-yellow-200"
              type="search"
              name="search"
              placeholder="Search..."
            />
            <div className="flex flex-wrap justify-center">
              <h1 className="text-4xl font-bold m-5">
                Pets close to you and needing your love...
              </h1>
            </div>
            <div className="flex flex-wrap justify-center items-stretch">
              <Card
                petname="Batata"
                sex="unknown"
                img="https://purr.objects-us-east-1.dream.io/i/6138491962_2a6d192919_z1.jpg"
                shortdescription="É muito comilão!"
                isFavorite={true}
              />
              <Card
                petname="Bacon"
                sex="male"
                img="https://images.dog.ceo/breeds/bulldog-english/jager-2.jpg"
                shortdescription="Dócil animalzinho. Gosta de muita atenção!"
                isFavorite="false"
              />
              <Card
                petname="Florzinha"
                sex="female"
                img="https://images.dog.ceo/breeds/poodle-toy/n02113624_6456.jpg"
                shortdescription="É um amor!"
                isFavorite={false}
              />
              <Card
                petname="Biscoito"
                sex="male"
                img="https://images.dog.ceo/breeds/pinscher-miniature/n02107312_2967.jpg"
                shortdescription="Gosta de comer muitos biscoitos!"
                isFavorite={true}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
