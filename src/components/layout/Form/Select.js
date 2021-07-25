import { useState, useEffect } from "react";

const Select = (props) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(props.isValid);
  }, [props.isValid]);

  return (
    <select
      name={props.name}
      onChange={props.onChange}
      defaultValue={props.defaultValue}
      className={`mt-0 w-full border rounded-md border-gray-200  
      ${
        isValid
          ? "focus:ring-transparent focus:border-red-700 ring-red-200 border-red-300 placeholder-red-400 text-red-400"
          : "focus:ring-0 focus:border-yellow-500"
      }`}
    >
      {props.children}
    </select>
  );
};

export default Select;
