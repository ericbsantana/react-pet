import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../store";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { state } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        state.isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
