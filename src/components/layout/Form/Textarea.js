const Textarea = (props) => {
  return (
    <textarea
      name={props.name}
      placeholder={props.placeholder}
      rows={props.rows}
      className="mt-0 w-full border rounded-md border-gray-200 resize-none"
      onChange={props.onChange}
    ></textarea>
  );
};

export default Textarea;
