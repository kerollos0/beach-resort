import React from "react";

import Home from "./pages/Home";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Rooms from "./pages/Rooms";
import Navbar from "./component/Navbar";

import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/rooms/" component={Rooms} />
        <Route path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
