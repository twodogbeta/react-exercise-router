import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Link, NavLink, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import AboutUs from "./AboutUs";
import MyProfile from "./MyProfile";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <nav className='navbar navbar-light' style={{background: '#e3f2fd', textAlign: 'left'}}>
            <NavLink className='nav-item' activeClassName='activeLink' component={Home} to={'/'}>Home</NavLink>
            <NavLink className='nav-item' activeClassName='activeLink' component={Home} to={'/about-us'}>AboutUs</NavLink>
            <NavLink className='nav-item' activeClassName='activeLink' component={Home} to={'/my-profile'}>MyProfile</NavLink>
          </nav>
          <Route exact path='/' component={Home} />
          <Route  path='/about-us' component={AboutUs} />
          <Route path='/my-profile' component={MyProfile} />
        </Router>
      </div>
    );
  }
}

export default App;
