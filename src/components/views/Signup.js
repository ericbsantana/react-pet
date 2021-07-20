import Input from "../layout/Form/Input";
import Textarea from "../layout/Form/Textarea";
import Button from "../layout/Form/Button";

import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const ToastError = (msg) =>
    toast.error(msg, {
      position: "top-right",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const [data, setData] = useState({});
  const [isValid, setIsValid] = useState(null);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    toast.dismiss();

    for (const error of errors) {
      ToastError(error.message);
    }
  }, [errors]);

  /* useEffect(() => {

  }, [data]); */

  //TODO: DO NOT CREATE TOASTS FOR EVERY CLICK FIX

  function handleChange(event) {
    const { value, name } = event.target;
    setData((prevState) => ({ ...data, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/users",
        data
      );
      console.log(response.data);
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        setIsValid(!err?.response.data.success);

        const normalizedError = err.response.data.errors.map((error) => ({
          message: error.msg,
          param: error.param,
        }));

        setErrors(normalizedError);
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log("Error", err.message);
      }
    }
  };

  return (
    <div className="grid grid-cols-12	max-w-7xl mx-auto content-center p-2">
      <div className="col-start-4 col-span-6 p-5">
        <div className="border rounded-lg border-gray-300 bg-gray-100 shadow-2xl p-5">
          <h2 className="text-2xl font-bold text-center">Register</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="grid gap-6">
              <label className="block">
                <span className="text-gray-700">Full name</span>
                <Input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  onChange={(e) => handleChange(e)}
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Username</span>
                <Input
                  name="username"
                  placeholder="Your username"
                  type="text"
                  onChange={(e) => handleChange(e)}
                />
              </label>
              <label className="block">
                <span className="text-gray-700">E-mail address</span>
                <Input
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  onChange={(e) => handleChange(e)}
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Confirm e-mail address</span>
                <Input
                  name="confirm-email"
                  type="email"
                  placeholder="john@example.com"
                  onChange={(e) => handleChange(e)}
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Password</span>
                <Input
                  name="email"
                  type="password"
                  onChange={(e) => handleChange(e)}
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Cellphone</span>
                <Input
                  name="cellphone"
                  type="text"
                  placeholder="(XX) XXXXX-XXXX"
                  onChange={(e) => handleChange(e)}
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Biography</span>
                <Textarea
                  name="biography"
                  rows="3"
                  onChange={(e) => handleChange(e)}
                />
              </label>
              <label className="block">
                <span className="text-gray-700">CEP</span>
                <Input
                  name="cep"
                  type="text"
                  placeholder="XXXXX-XXX"
                  onChange={(e) => handleChange(e)}
                />
              </label>
              <label className="block">
                <span className="text-gray-700">City</span>
                <Input
                  name="city"
                  type="text"
                  placeholder="City"
                  onChange={(e) => handleChange(e)}
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Address</span>
                <Input
                  name="address"
                  type="text"
                  placeholder="My Street, 999"
                  onChange={(e) => handleChange(e)}
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Website</span>
                <Input
                  name="website"
                  type="text"
                  placeholder="mywebsite.com"
                  onChange={(e) => handleChange(e)}
                />
              </label>
              <Button type="submit">Create Account</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
