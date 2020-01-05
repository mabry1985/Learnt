import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavBar } from "../components";
import { TutorialsList, AddTutorial, TutorialsUpdate, HomePage } from "../pages";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/" exact component={HomePage} />
      <Route path="/tutorials/list" exact component={TutorialsList} />
      <Route path="/tutorial/create" exact component={AddTutorial} />
      <Route path="/tutorials/update/:id" exact component={TutorialsUpdate} />
    </Router>
  );
}

export default App;
