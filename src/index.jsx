import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import Home from './Pages/Home';
import Rental from './Pages/Rental';
import About from './Pages/About';
import Error from './Pages/Error';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './index.css';

ReactDOM.render(
   <React.StrictMode>
      <Router>
         <div className="app-wrapper">
            <Header />
            <Switch>
               <Route exact path="/">
                  <Home />
               </Route>
               <Route
                  exact
                  path="/location/:id"
                  render={(props) => <Rental {...props} />}
               />
               <Route exact path="/a-propos">
                  <About />
               </Route>
               <Route path="/page-not-found">
                  <Error />
               </Route>
               <Route>
                  <Redirect to="/page-not-found" />
               </Route>
            </Switch>
         </div>
         <Footer />
      </Router>
   </React.StrictMode>,
   document.getElementById('root')
);
