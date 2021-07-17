import background from "../../../img/banner.jpg";

import { Fragment } from "react";

const Banner = () => {
  return (
    <Fragment>
      <div
        className="flex flex-col bg-cover bg-center h-1/4 object-fill mx-auto relative"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div
          className="bg-opacity-75 bg-black flex items-center justify-center text-white p-40"
          style={{ background: "rgba(0,0,0,0.5)" }}
        >
          <div className="mx-auto text-center">
            <h1 className="text-5xl font-bold">Adopt a pet!</h1>
            <h2 className="text-4xl">Find your best friend here.</h2>
            <div className="mt-4">
              <button
                href="#"
                className="bg-yellow-300 mr-4 py-4 px-8 text-gray-800  font-bold uppercase sm:text-sm lg:text-xs rounded hover:bg-yellow-400 hover:text-gray-800"
              >
                I want to adopt!
              </button>
              <button
                href="#"
                className="bg-yellow-300 py-4 px-8 text-gray-800 font-bold uppercase lg:text-xs rounded hover:bg-yellow-500 hover:text-gray-800"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
