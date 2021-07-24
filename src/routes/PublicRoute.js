import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../store";

const PublicRoute = ({ component: Component, ...rest }) => {
  const { state } = useContext(AuthContext);

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default PublicRoute;
