import { useState } from "react";

const Input = (props) => {
  const [isValid, setIsValid] = useState(true);

  return (
    <input
      name={props.name}
      type={props.type}
      className={`mt-0 block w-full border rounded-md border-gray-200  
      ${
        !isValid
          ? "focus:ring-transparent focus:border-red-700 ring-red-200 border-red-300 placeholder-red-400 text-red-400"
          : "focus:ring-0 focus:border-yellow-500"
      }`}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};

export default Input;
