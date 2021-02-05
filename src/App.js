import React from "react";
import { Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import Jeopardy from "./components/jeopardy/Jeopardy";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Navigation />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Welcome {...props} name="Joey" />}
          />

          <Route path="/welcome/:name" component={Welcome} />

          <Route path="/clock" component={Clock} />

          <Route path="/contact" component={Contact} />

          <Route path="/jeopardy" component={Jeopardy} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
