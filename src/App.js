import Navbar from "./components/layout/Main/Navbar";
import Footer from "./components/layout/Main/Footer";

import Home from "./views/Home";
import About from "./views/About";
import Users from "./views/Users";
import Pets from "./views/Pets";
import Search from "./views/Search";

import Login from "./views/LoginView";
import Signup from "./views/Signup";
import AddPet from "./views/AddPet";
import NotFound from "./views/NotFound";

import PetDetails from "./views/PetDetails";
import UserDetails from "./views/UserDetails";

import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { AuthProvider } from "./store";

function App() {
  return (
    <Fragment>
      <AuthProvider>
        <Router>
          <Navbar />
          <div className="sm:container mx-auto">
            <Switch>
              <PublicRoute path="/about" component={About} />
              <PrivateRoute path="/add" component={AddPet} />
              <PublicRoute path="/pets/:id" component={PetDetails} />
              <PublicRoute path="/pets" component={Pets} />
              <PublicRoute path="/search" component={Search} />
              <PublicRoute path="/users/:id" component={UserDetails} />
              <PublicRoute path="/users" component={Users} />
              <PublicRoute path="/login" component={Login} />
              <PublicRoute path="/signup" component={Signup} />
              <PublicRoute exact path="/" component={Home} />
              <PublicRoute component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
      <ToastContainer />
    </Fragment>
  );
}

export default App;
