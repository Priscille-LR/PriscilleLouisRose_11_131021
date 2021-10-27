import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Rental from "./Pages/Rental";
import About from "./Pages/About";
import Error from "./Pages/Error";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <GlobalStyle> */}
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/location/:id" render={(props) => <Rental {...props} />} />
        <Route path="/a-propos">
          <About />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
