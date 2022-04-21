import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Landing/home";
import Error from "./components/ErrorPage/error";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";
import Forum from "./components/forum";

function App() {
  // route calls to different components based on path provided in url
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/forum" component={Forum} />
          <Route component={() => <Error />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
