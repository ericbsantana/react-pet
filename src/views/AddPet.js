import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../store";

const Add = () => {
  const [data, setData] = useState({});

  const { state, dispatch } = useContext(AuthContext);

  return <h1>add</h1>;
};

export default Add;
