import { Fragment } from "react";
import Filters from "./Filters";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

//TODO: CREATE FILTERHANDLER PASS ON PROPS

const Searchbar = (props) => {
  return (
    <Fragment>
      <input
        className={`${props.className} w-3/5`}
        type="search"
        name="search"
        placeholder="Search..."
      />
      <Filters />
    </Fragment>
  );
};

export default Searchbar;
