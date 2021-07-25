import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Tag = (props) => {
  return (
    <span
      className="text-xs items-center font-bold uppercase px-2 py-1 rounded-full bg-white text-gray-700 border space-x-2 hover:bg-gray-200 cursor-pointer"
      onClick={() => {
        props.deleteTag(props.name);
      }}
    >
      <span>{props.children}</span>
      <span>
        <FontAwesomeIcon icon={faTimes} />
      </span>
    </span>
  );
};

export default Tag;
