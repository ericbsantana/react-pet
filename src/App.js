import Navbar from "./components/layout/Main/Navbar";
import Footer from "./components/layout/Main/Footer";

import Home from "./components/views/Home";
import About from "./components/views/About";
import Users from "./components/views/Users";
import Pets from "./components/views/Pets";
import Search from "./components/views/Search";
import Login from "./components/views/LoginView";
import Signup from "./components/views/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { AuthProvider } from "./store";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <AuthProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/pets">
              <Pets />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
      <ToastContainer />
    </Fragment>
  );
}

export default App;
