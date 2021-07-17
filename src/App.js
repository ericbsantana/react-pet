import Navbar from "./components/layout/Main/Navbar";
import Footer from "./components/layout/Main/Footer";

import Home from "./components/views/Home";
import About from "./components/views/About";
import Users from "./components/views/Users";
import Pets from "./components/views/Pets";
import Search from "./components/views/Search";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App flex flex-col bg-yellow-50">
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
          <Route path="/">
            <div className="flex-grow">
              <Home />
            </div>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
