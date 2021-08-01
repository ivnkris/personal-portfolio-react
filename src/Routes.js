import { Route, Switch } from "react-router-dom";

import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Home from "./pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/about-me">
        <AboutMe />
      </Route>
      <Route path="/portfolio">
        <Portfolio />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/resume">
        <Resume />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
