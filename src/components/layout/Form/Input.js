import { useState, useEffect } from "react";

const Input = (props) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(props.isValid);
  }, [props.isValid]);

  return (
    <input
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      className={`mt-0 w-full border rounded-md border-gray-200  
      ${
        isValid
          ? "focus:ring-transparent focus:border-red-700 ring-red-200 border-red-300 placeholder-red-400 text-red-400"
          : "focus:ring-0 focus:border-yellow-500"
      }`}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
      value={props.value}
      autocomplete="off"
    />
  );
};

export default Input;
