import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

export default function ConfirmationEmailSent() {
	const classes = useStyles();

	return (
	  <Container component="main" maxWidth="sm">
	  	<div className={classes.paper}>
	  		<Typography variant="h6">
	  			Signup Successful! You will recive an email confirmation shortly.
	  		</Typography>
	  	</div>
	  </Container>
	)
}