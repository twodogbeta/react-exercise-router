import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Link, NavLink, Redirect, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import AboutUs from "./AboutUs";
import MyProfile from "./MyProfile";
import Products from "./Products";
import ProductItem from "./ProductItem";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/:user(\d+)' component={User} />
            <Route path='/about' component={User} />
            <Route component={NotMatch} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
