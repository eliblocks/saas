import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import useUser from './use-user';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

export default function EmailConfirmation() {
	const location = useLocation();
	const history = useHistory();
	const classes = useStyles();
	const { user, mutate } = useUser();
	const [error, setError] = useState();

	useEffect(() => {
    if (user) {
      history.push('/dashboard')
    }
  }, [user])

	useEffect(() => {
		axios.get(location.pathname + location.search)
		.then(() => history.push("/?message=Email confirmed! Please log in."))
		.catch(error => {
			const errorData = error.response.data
			if (errorData.email) {
				setError(`Email ${errorData.email[0]}`)
			}
			if (errorData.confirmation_token) {
				setError(`Confirmation token ${errorData.confirmation_token}`)
			}
		});
	});

	return (
	  <Container component="main" maxWidth="sm">
	  	<div className={classes.paper}>
	  		{error && <Typography color='secondary'>{error}</Typography>}
	  	</div>
	  </Container>
	)
}