import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

import Footer from "./components/Footer";
import "./App.css";

//App
//Nav
//Landing Page
//Header
//Content
//Blog
//Portfolio page

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
