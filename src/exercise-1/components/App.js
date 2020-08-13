import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Link, NavLink, Route} from 'react-router-dom';
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
          <nav className='navbar navbar-light' style={{background: '#e3f2fd', textAlign: 'left'}}>
            <NavLink exact className='nav-item' activeClassName='activeLink'  to={'/'}>Home</NavLink>
            <NavLink className='nav-item' activeClassName='activeLink'  to={'/products'}>Products</NavLink>
            <NavLink className='nav-item' activeClassName='activeLink'  to={'/about-us'}>AboutUs</NavLink>
            <NavLink className='nav-item' activeClassName='activeLink'  to={'/my-profile'}>MyProfile</NavLink>
          </nav>
          <Route exact path='/' component={Home} />
          <Route  path='/about-us' component={AboutUs} />
          <Route path='/my-profile' component={MyProfile} />
          <Route exact path='/products' component={Products} />
          <Route path='/products/:id' component={ProductItem} />
        </Router>
      </div>
    );
  }
}

export default App;
