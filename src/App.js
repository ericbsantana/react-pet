import Navbar from "./components/layout/Main/Navbar";
import Footer from "./components/layout/Main/Footer";

import Home from "./views/Home";
import About from "./views/About";
import Users from "./views/Users";
import Pets from "./views/Pets";
import Search from "./views/Search";
import Login from "./views/LoginView";
import Signup from "./views/Signup";
import NotFound from "./views/NotFound";
import PetDetails from "./views/PetDetails";
import AddPet from "./views/AddPet";

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
              <PublicRoute path="/about">
                <About />
              </PublicRoute>
              <PrivateRoute component={AddPet} path="/add" />
              <PublicRoute path="/pets/:id">
                <PetDetails />
              </PublicRoute>
              <PublicRoute path="/pets">
                <Pets />
              </PublicRoute>
              <PublicRoute path="/search">
                <Search />
              </PublicRoute>
              <PublicRoute path="/users">
                <Users />
              </PublicRoute>
              <PublicRoute path="/login">
                <Login />
              </PublicRoute>
              <PublicRoute path="/signup">
                <Signup />
              </PublicRoute>
              <PublicRoute exact path="/">
                <Home />
              </PublicRoute>
              <PublicRoute>
                <NotFound />
              </PublicRoute>
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
