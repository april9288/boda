import React from 'react';
import {Paper} from 'material-ui';

const ImageFood = ({image}) => {

	if (image) {
	return (
		<div>
	      <Paper style = {{ padding: 20, marginTop: 10, marginBottom: 10}}>
	    	<div>
	    		<img id = 'inputimage' alt='' src={image} width='450' height='auto'/>
	    	</div>
	      </Paper>
		</div>
		);	
	} else {
		return (<div></div>);
	}

}

export default ImageFood;