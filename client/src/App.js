// ***** App component for Roost News *****

import './App.css';
import React from 'react';
import Homepage from './Homepage';
import SignUpUser from './Signup';
import Login from './Login';
import "react-bootstrap/dist/react-bootstrap.min.js";
// import ArticleHeadline from './ArticleHeadline';
// import ArticleDetails from './ArticleDetails';
// import Bookmarks from './Bookmarks';

import "react-bootstrap/dist/react-bootstrap.min.js";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { AppBar, Toolbar } from '@material-ui/core';
  
  // LoggedInStatus === true ? [Link to logout, Link to Saved articles] : [Link to Login, Link to Signup]

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
// });

function App() {
  
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  return (
    <div className="App">
      <p>Hello world!</p>
      <Router>
      {/* <AppBar>
          <Toolbar>  */}
            <Link to="/">Roost News</Link>
            {isLoggedIn !== true? 
            [<Link key={1} to="/signup">SignUpUser</Link>,
            <Link key={2} to="/login">Login</Link>]
            :
            [<Link key={1} to="/bookmarks">My bookmarks</Link>,
            <Link key={2} to="/logout">Logout</Link>]}
          {/* </Toolbar> 
        </AppBar> */}
        <Switch>
          {/* <Route path="/bookmarks" component={Bookmarks}>
          </Route>
          <Route path="/article-details/:articleId" component={ArticleDetails}>
          </Route>*/}
          <Route path="/login" component={Login}>
          </Route> 
          <Route path="/signup" component={SignUpUser}>
          </Route>
          <Route path="/" component={Homepage}>
          </Route> 
        </Switch>
      </Router>
      <div> 
        <p>© 2021 Copyright: Roost News<br/>All rights reserved <br/>By: Lani Ludwick</p>
      </div>
      {/* <p>{apiResponse}</p> */}
    </div>
  )
}

export default App;


