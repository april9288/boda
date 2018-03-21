import React from 'react';
import {AppBar, Toolbar, Typography} from 'material-ui';

const Header = () => {

	return (
		<div>
		  <AppBar position="static">
		    <Toolbar>
		      <Typography variant="headline" color="inherit">
		      Boda
		      </Typography>
		    </Toolbar>
		  </AppBar>
		</div>
		);
}

export default Header;