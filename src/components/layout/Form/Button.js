const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`w-full text-center font-bold uppercase py-4 rounded bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50 ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
