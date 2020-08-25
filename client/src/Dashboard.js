import React, { useEffect, useState } from 'react'
import axios from 'axios';
import useUser from './use-user';
import Profile from './Profile';

function Dashboard() {
  const { mutate } = useUser();
  const [message, setMessage] = useState()

  useEffect(() => {
    axios.get('/api/dashboard')
    .then(response => setMessage(response.data.message))
  }, [message]);

  function logOut(e) {
    e.preventDefault();
    axios.delete("/users/sign_out").then(() => mutate(null));
  }

  return (
    <div>
      <p>{message}</p>
      <br />
      <a href="" onClick={logOut}>Log Out</a>
    </div>
  );
}

export default Dashboard