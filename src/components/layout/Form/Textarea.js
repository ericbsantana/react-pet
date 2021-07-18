const Textarea = (props) => {
  return (
    <textarea
      className="mt-0 block w-full border rounded-md border-gray-200 focus:ring-0 focus:border-yellow-500"
      rows={props.rows}
    ></textarea>
  );
};

export default Textarea;
