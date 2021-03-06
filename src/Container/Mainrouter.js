import React from "react";
import OTPverify from "../pages/OTPverify";
import home from "../pages/Home";
import Nopagefound from "../pages/Nopagefound";
import Mobilenumber from "../pages/Mobilenumber";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
const Mainrouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/verifyotp" component={OTPverify} />
          <Route exact path="/error404" component={Nopagefound} />
          <Route exact path="/Mobilenumber" component={Mobilenumber} />
          <Redirect to="/error404" />
        </Switch>
      </div>
    </Router>
  );
};
export default Mainrouter;
