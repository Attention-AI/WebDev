import React, { Component } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
// import SignIn from "./components/pages/SignUp";
import { loadUser } from "./actions/authActions";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/lib/integration/react";
import SignUp from "./components/pages/SignUp";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <>
        <Router>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <Navbar />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/services" component={Services} />
                <Route path="/products" component={Products} />
                <Route path="/signin" component={SignUp} />
              </Switch>
            </PersistGate>
          </Provider>
        </Router>
      </>
    );
  }
}

export default App;
