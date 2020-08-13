import React, { Component } from 'react'
import './App.css';
import ListPage from './ListPage.js';
import CreatePage from './CreatePage.js';
import DetailPage from './DetailPage.js';
import {
  BrowserRouter as Router,
  Route,
  Switch, 
  Link
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>        
        {/* add links to different pages using Switch, Router, and Link */}
        <Router>
          <div className="nav-links">
            <Link to='/'>All Dogs</Link>
            <Link to='/create'>Add</Link>
          </div>

          <Switch>
            {/* list page route */}
            <Route
              path="/"
              exact
              render={(routerProps) => <ListPage {...routerProps} />} 
            />
            {/* add an entry page route */}
            <Route
              path="/create"
              exact
              render={(routerProps) => <CreatePage {...routerProps} />} 
            />
            {/* pup (:id) details page route for selected pup */}
            <Route
              path="/detail/:id"
              exact
              render={(routerProps) => <DetailPage {...routerProps} />} 
            />

          </Switch>
        </Router>
      </div>
    )
  }
}
