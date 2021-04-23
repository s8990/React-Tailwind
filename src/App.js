import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "@Components/Nav";
import Homepage from "@Pages/Homepage";
import Post from "@Pages/Post";
import Gallery from "@Pages/Gallery";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/post" exact component={Post} />
        <Route path="/gallery" exact component={Gallery} />
      </Switch>
    </Router>
  );
}

export default App;
