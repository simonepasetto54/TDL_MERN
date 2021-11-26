import React from "react";
import './css/App.css';
import Navbar from './components/shared/Navbar';
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/Homepage";

const App = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
