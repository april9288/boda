import React from 'react';
import {Paper, Typography} from 'material-ui';
import './Face.css';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Button from 'material-ui/Button';
import ImageFace from './ImageFace';
import ChartFace from './ChartFace';

const calculateFaceLocation = (data) => {
  const image = document.getElementById('inputimage');
  const width = Number(image.width);
  const height = Number(image.height);
  return data.outputs[0].data.regions.map((value, i) => 
          ({leftCol: value.region_info.bounding_box.left_col*width,
            topRow: value.region_info.bounding_box.top_row * height,
            rightCol: width - (value.region_info.bounding_box.right_col * width),
            bottomRow: height - (value.region_info.bounding_box.bottom_row * height),
            age: value.data.face.age_appearance.concepts,
            gender: value.data.face.gender_appearance.concepts,
            culture: value.data.face.multicultural_appearance.concepts}));
  }

const Face = ({search, text, click, image, result, clear}) => {
  let result_face = [];
  if (result.length !== 0 && result.outputs[0].data.regions) {
    result_face = calculateFaceLocation(result);
  }

	return (
		<div>
	      <Paper className="background" style={{padding: 20, marginTop: 10, marginBottom: 10}}>
	      <Typography variant="title" color="inherit" align="left">
            Face Detection
          </Typography>      
	      </Paper>
	      <Paper style={{padding: 20, marginTop: 10, marginBottom: 10}}>
	       <FormControl>
	          <InputLabel>Url</InputLabel>
	          <Input style={{minWidth: 450}} onChange={search} value={text}/>
	          <FormHelperText>Insert your photo's url here</FormHelperText>
	       </FormControl>    
	        <Button style={{margin: 10}} variant="raised" color="primary" onClick={()=>click("demo")}>
		       Submit
		      </Button> 
          <Button style={{margin: 10}} variant="raised" color="secondary" onClick={clear}>
           Clear
          </Button> 
	      </Paper>
	      <ImageFace image={image} result_face={result_face}/>
        {
          result_face.map((val,i) => <ChartFace key={val.topRow} num={i} age={val.age} gender={val.gender} culture={val.culture}/>)        
        }
        
		</div>
		);
}

export default Face;