import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage.js';
import SearchPage from './SearchPage.js';
import Header from './Header.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <HomePage {...routerProps} />}
            />
            <Route
              path="/search"
              exact
              render={(routerProps) => <SearchPage {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
