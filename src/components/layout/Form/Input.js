const Input = (props) => {
  return (
    <input
      name={props.name}
      type={props.type}
      className="mt-0 block w-full border rounded-md border-gray-200 focus:ring-0 focus:border-yellow-500"
      placeholder={props.placeholder}
    />
  );
};

export default Input;
