import { AuthContext } from "../../../store";
import { useState, useContext, useEffect } from "react";
import { ToastError, ToastClear } from "../../../helpers/notify";
import api from "../../../helpers/axios";

import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";
import Select from "./Select";
import Tag from "./Tag";

const AddPetForm = () => {
  const { state } = useContext(AuthContext);

  const [data, setData] = useState({ pet_ownerid: state.user_id });
  const [image, setImage] = useState();
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [errors, setErrors] = useState([]);
  const [fieldErrors, setFieldErrors] = useState([]);

  useEffect(() => {
    ToastClear();

    for (const error of errors) {
      ToastError(error.message);
    }
  }, [errors]);

  const handleChange = async (e) => {
    const { value, name } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    setFieldErrors([]);

    e.preventDefault();
    setData((prevState) => ({ ...prevState, tags: tags }));

    try {
      const response = await api.post("http://localhost:3001/pets", data);
      console.log(response);
    } catch (err) {
      if (err.response) {
        const normalizedError = err.response.data.errors.map((error) => ({
          message: error.msg,
          param: error.param,
        }));

        for (const error of err.response.data.errors) {
          setFieldErrors((fieldErrors) => [...fieldErrors, error.param]);
        }

        setErrors(normalizedError);
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log("Error", err.message);
      }
    }
  };

  const handleFile = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleTagInput = (e) => {
    const { value } = e.target;
    setTagInput(value);
  };

  const handleTag = (e) => {
    const { key } = e;
    const trimmedInput = tagInput.trim();

    if (key === "," && trimmedInput.length && !tags.includes(trimmedInput)) {
      e.preventDefault();
      setTags((prevState) => [...prevState, trimmedInput]);
      setTagInput("");
    }
  };

  const deleteTag = (tagName) => {
    setTags(tags.filter((tag) => !tag.includes(tagName)));
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="px-4 py-5 space-y-6 sm:p-6 w-1/2">
          <h2 className="text-2xl font-bold">Register Pet</h2>
          <div className="flex flex-row w-50 space-x-4 justify-around">
            <div className="w-1/3">
              <label className="block text-sm font-medium text-gray-700">
                Pet Name
              </label>
              <Input
                name="pet_name"
                type="text"
                placeholder="Boots"
                onChange={(e) => handleChange(e)}
                isValid={fieldErrors.includes("pet_name")}
              />
            </div>
            <div className="flex justify-between w-2/3  space-x-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Pet Gender
                </label>
                <Select
                  className="mt-0 block border rounded-md border-gray-200 "
                  name="pet_sex"
                  onChange={(e) => handleChange(e)}
                  defaultValue={"default"}
                  isValid={fieldErrors.includes("pet_sex")}
                >
                  <option disabled defaultValue={"default"}>
                    -- Choose a gender --
                  </option>
                  <option value="m">Male</option>
                  <option value="f">Female</option>
                  <option value="u">Unknown</option>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Size
                </label>
                <Select
                  className="mt-0 block border rounded-md border-gray-200 "
                  name="size"
                  onChange={(e) => handleChange(e)}
                  defaultValue={"default"}
                  isValid={fieldErrors.includes("size")}
                >
                  <option disabled defaultValue={"default"}>
                    -- Choose a size --
                  </option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </Select>
              </div>
            </div>
          </div>
          <div className="flex flex-row w-50 space-x-4 justify-around">
            <div className="w-1/3">
              <div className="mt-1">
                <label className="block text-sm font-medium text-gray-700">
                  Photo
                </label>
                <div className="mt-1 flex items-center justify-around">
                  <div className="w-20 h-20">
                    <img
                      alt="alt"
                      className="object-cover w-full h-full rounded-full border border-gray-100 shadow-sm"
                      src={image}
                    />
                  </div>
                  <label className="items-center justify-center bg-yellow-300 py-4 px-8 text-black font-bold uppercase text-xs rounded hover:bg-yellow-400 hover:text-gray-800 mr-2 cursor-pointer">
                    Change
                    <input
                      type="file"
                      name="file"
                      className="hidden"
                      onChange={(e) => {
                        handleFile(e);
                      }}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="w-2/3">
              <label className="block text-sm font-medium text-gray-700">
                Pet description
              </label>
              <Textarea
                name="bio"
                rows="3"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Tell us about your cute pet!"
                onChange={(e) => handleChange(e)}
                isValid={fieldErrors.includes("bio")}
              ></Textarea>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Write some of your pet's characteristics!
            </label>
            <Input
              name="pet_characteristics"
              type="text"
              placeholder="cute, awesome..."
              value={tagInput}
              onChange={(e) => handleTagInput(e)}
              onKeyDown={(e) => handleTag(e)}
              isValid={fieldErrors.includes("tags")}
            />
          </div>
          <div className="flex space-x-2 p-2 mt-2 content-center">
            {tags.map((tag) => (
              <Tag key={tag} name={tag} deleteTag={deleteTag}>
                {tag}
              </Tag>
            ))}
          </div>
          <Button type="submit">Add pet</Button>
        </div>
      </form>
    </div>
  );
};

export default AddPetForm;
