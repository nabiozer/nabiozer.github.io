import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainNavigation from "./_components/Navigation/MainNavigation";
import Home from "./pages/Home";


import Skills from "./pages/Skills/index"
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Login from "./pages/Login";
import Register from "./pages/Register";


const App: React.FC = () => {
  return (
    <>
      <Router>
        <MainNavigation />
        <Switch>
          <Route path="/home" component={Home} exact />
          <Route path="/skills" component={Skills} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/portfolio" component={Portfolio} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/*" component={Home} exact />
        </Switch>
     
      </Router>
    </>
  );
};

export default App;
