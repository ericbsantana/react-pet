import Banner from "../components/layout/Main/Banner";
import PetCard from "../components/layout/Cards/PetCard";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <div className="w-full bg-yellow-50">
        <div className="flex justify-center align-center">
          <div className="flex flex-col w-full justify-center">
            <input
              className="border-1 border-yellow-300 bg-white h-12 w-3/4 mt-5 mb-5 rounded-lg mx-auto focus:ring-1 focus:ring-yellow-200"
              type="search"
              name="search"
              placeholder="Search..."
            />
            <div className="flex flex-wrap justify-center">
              <h1 className="text-4xl font-bold m-5">
                Pets close to you and needing your love...
              </h1>
            </div>
            <div className="flex flex-wrap justify-center items-stretch"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
