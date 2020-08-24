import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import useUser from './use-user';
import Profile from './Profile';

function Dashboard() {
  const { loading, loggedOut, user, mutate } = useUser();
  const history = useHistory()
  const [message, setMessage] = useState()

  useEffect(() => {
    if (loggedOut) {
      history.push("/");
    }
  }, [loggedOut]);

  useEffect(() => {
    axios.get('/api/dashboard')
    .then(response => setMessage(response.data.message))
  }, [message]);

  function logOut(e) {
    e.preventDefault();
    axios.delete("/users/sign_out").then(() => mutate(null));
  }

  if (loggedOut) return "redirecting...";

  return (
    <div>
      <p>{message}</p>
      <br />
      <a href="" onClick={logOut}>Log Out</a>
    </div>
  );
}

export default Dashboard