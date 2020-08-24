import React, { useState, useEffect } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import { Link as RouterLink, useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import useUser from './use-user';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function EditPassword() {
  const classes = useStyles();
  const [password, setPassword] = useState('');
  const history = useHistory();
  const location = useLocation();
  const { user, mutate } = useUser();
  const reset_password_token = queryString.parse(location.search).reset_password_token

  useEffect(() => {
    if (user) {
      history.push('/dashboard')
    }
  })

  function handleSubmit(e) {
    e.preventDefault()
    axios.patch('/users/password', {
      user: { password, reset_password_token }
    })
    .then(() => { mutate() });
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <h2>Reset password</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            autoFocus
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            className={classes.submit}
            variant='contained'
            color='primary'
          >
            Reset Password
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/sign_up" component={RouterLink}>Sign up</Link>
            </Grid>
            <Grid item>
              <Link to="" component={RouterLink}>Log in</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
