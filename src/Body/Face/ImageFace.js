import React from 'react';
import {Paper} from 'material-ui';
import './ImageFace.css';

const ImageFace = ({image, result_face}) => {

	if (image && result_face.length !== 0) {
		console.log("result : ", result_face);
		return (
			<div>
		      <Paper style = {{ padding: 20, marginTop: 10, marginBottom: 10}}>
		    	<div className='bigger-box'>
		    		<img id = 'inputimage' alt='' src={image} width='450' height='auto'/>
		    		{	
		    			result_face.map((value, i) => 
							<div key = {value.topRow} 
								 className='bounding-box' 
							     style ={{top: value.topRow, 
								     	  right: value.rightCol, 
								     	  bottom: value.bottomRow, 
					                      left: value.leftCol}}>
					        <p id="box_number">{i+1}</p></div>)
					}
		    	</div>
		      </Paper>
			</div>);
	} else if (image) {
		return (
		<div>
	      <Paper style = {{ padding: 20, marginTop: 10, marginBottom: 10}}>
	    	<div>
	    		<img id = 'inputimage' alt='' src={image} width='450' height='auto'/>
	    	</div>
	      </Paper>
		</div>);
	} else {
		return (<div></div>);
	}

}

export default ImageFace;