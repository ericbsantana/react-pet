import { AuthContext } from "../../context/auth";
import { useState, useEffect, useContext } from "react";

import Input from "../layout/Form/Input";
import Button from "../layout/Form/Button";
import { ToastError, ToastClear } from "../../helpers/notify"; //TODO: VALIDATE FORM

const Login = () => {
  const [data, setData] = useState({});

  const { Login } = useContext(AuthContext);

  function handleLogin(e) {
    e.preventDefault();
    Login(data.email, data.password);
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setData((prevState) => ({ ...data, [name]: value }));
  }

  return (
    <div>
      <div className="grid grid-cols-12	max-w-7xl mx-auto content-center p-2">
        <div className="col-start-4 col-span-6 p-5">
          <div className="border rounded-lg border-gray-300 bg-gray-100 shadow-2xl p-5">
            <h2 className="text-2xl font-bold text-center">Login</h2>
            <form onSubmit={(e) => handleLogin(e)}>
              <div className="grid gap-6">
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
                  <span className="text-gray-700">Password</span>
                  <Input
                    name="password"
                    type="password"
                    onChange={(e) => handleChange(e)}
                  />
                </label>
                <Button type="submit">Login</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
