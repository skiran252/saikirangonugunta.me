import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Footer from "./components/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blogs from "./components/Blogs";
function App() {
  return (
    <Router>
      <div className="mb-40">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Header />
          <Stack />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/blogs">
          <Blogs />
        </Route>
      </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
