import React from 'react';
import {Paper, Typography} from 'material-ui';

const Home = () => {
	return (
		<div>
	      <Paper style = {{ padding: 20, marginTop: 10, marginBottom: 10}}>
	      <Typography variant="title" color="inherit" align="left">
            Welcome!
          </Typography>
	      <Typography variant="subheading" color="inherit" align="left" style={{padding: 20}}>
            Currently only face, color and food detections are available. Please choose the menu on the left bar.
          </Typography>          
	      </Paper>
		</div>
		);
}

export default Home;