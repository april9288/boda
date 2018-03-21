import React from 'react';
import {AppBar, Toolbar, Typography} from 'material-ui';

const Footer = () => {
	return (
		<div>
		  <AppBar position="static">
		    <Toolbar>
		      <Typography variant="subheading" color="inherit" align="center">
		      Copyright 2018 James Jongho Kim
		      </Typography>
		    </Toolbar>
		  </AppBar>
		</div>
		);
}

export default Footer;