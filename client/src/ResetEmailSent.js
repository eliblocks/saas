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

export default function ResetEmailSent() {
	const classes = useStyles();

	return (
	  <Container component="main" maxWidth="sm">
	  	<div className={classes.paper}>
	  		<Typography variant="h6">
	  			You will receive an email with instructions on how to reset your password in a few minutes.
	  		</Typography>
	  	</div>
	  </Container>
	)
}