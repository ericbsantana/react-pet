import { Login, AuthContext } from "../store";
import { ToastError, ToastClear } from "../helpers/notify"; //TODO: VALIDATE FORM

import { useState, useEffect, useContext } from "react";

import Input from "../components/layout/Form/Input";
import Button from "../components/layout/Form/Button";

const LoginView = () => {
  const [data, setData] = useState({});

  const { state, dispatch } = useContext(AuthContext);

  useEffect(() => {
    ToastClear();
    ToastError(state.errorMessage);
  }, [state.errorMessage]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = data;

    try {
      await Login(dispatch, { email, password });
    } catch (error) {
      console.log(error);
    }
  };

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
                {state.errorMessage ? (
                  <p className="text-red-500">{state.errorMessage}</p>
                ) : null}
                <Button type="submit" disabled={state.loading}>
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
