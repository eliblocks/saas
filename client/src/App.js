import axios from 'axios';
import React, { useState, useEffect } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
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
  useHistory
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <div>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
           <Route path="/sign_up">
            <SignUp />
          </Route>
          <Route path="/reset_password">
            <ResetPassword />
          </Route>
          <Route path="/users/password/edit">
            <EditPassword />
          </Route>
          <Route exact path="/">
            <LogIn />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/reset_email_sent">
            <ResetEmailSent />
          </Route>
          <Route path="/confirmation_email_sent">
            <ConfirmationEmailSent />
          </Route>
          <Route path="/users/confirmation">
            <EmailConfirmation />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
