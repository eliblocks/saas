import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AuthContainer from './AuthContainer';

export default function ResetEmailSent() {
	return (
	  <AuthContainer maxWidth="sm">
  		<Typography variant="h6">
  			You will receive an email with instructions on how to reset your password in a few minutes.
  		</Typography>
	  </AuthContainer>
	)
}