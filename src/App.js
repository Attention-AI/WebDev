import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignIn from './components/pages/SignUp';
import { loadUser } from './actions/authActions';
import { Provider } from 'react-redux';
import store from "./store";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
  return (
    <>
      <Router>
        <Provider store= {store}>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-in' component={SignIn} />
        </Switch>
        </Provider>
      </Router>
    </>
  );
}}

export default App    ;
