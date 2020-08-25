import axios from 'axios';
import React, { useState, useEffect } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import useUser from './use-user';
import Navbar from './Navbar'
import LogIn from './LogIn';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import Profile from './Profile';
import ResetPassword from './ResetPassword';
import EditPassword from './EditPassword';
import ResetEmailSent from './ResetEmailSent';
import ConfirmationEmailSent from './ConfirmationEmailSent';
import EmailConfirmation from './EmailConfirmation';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";

export default function App() {
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.headers.common['Accept'] = 'application/json';

  const { user, loading, mutate } = useUser();
  if (loading) { return "loading"}

  return (
    <Router>
      <CssBaseline />
       <Navbar />
      { user ? <AuthenticatedApp /> : <UnauthenticatedApp /> }
    </Router>
  );
}

function AuthenticatedApp() {
  return (
    <div>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Redirect to="/dashboard" />
      </Switch>
    </div>
  );
}

function UnauthenticatedApp() {
  return (
    <div>
      <Switch>
        <Route path="/sign_up">
          <SignUp />
        </Route>
        <Route path="/reset_password">
          <ResetPassword />
        </Route>
        <Route path="/users/password/edit">
          <EditPassword />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/reset_email_sent">
          <ResetEmailSent />
        </Route>
        <Route path="/confirmation_email_sent">
          <ConfirmationEmailSent />
        </Route>
        <Route path="/confirm_email">
          <EmailConfirmation />
        </Route>
        <Redirect to="/login" />
      </Switch>
    </div>
  );
}

