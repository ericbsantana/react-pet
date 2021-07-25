import { useState, useEffect } from "react";

const Textarea = (props) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(props.isValid);
  }, [props.isValid]);

  return (
    <textarea
      name={props.name}
      placeholder={props.placeholder}
      rows={props.rows}
      onChange={props.onChange}
      className={`mt-0 w-full border rounded-md border-gray-200  
      ${
        isValid
          ? "focus:ring-transparent focus:border-red-700 ring-red-200 border-red-300 placeholder-red-400 text-red-400"
          : "focus:ring-0 focus:border-yellow-500"
      }`}
    ></textarea>
  );
};

export default Textarea;
