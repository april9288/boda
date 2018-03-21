import React from 'react';
import {Paper, Typography} from 'material-ui';
import './Food.css';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Button from 'material-ui/Button';
import ImageFood from './ImageFood';
import ChartFood from './ChartFood';

const Food = ({search, click, image, result}) => {

	let food = [];
    if (result.length !== 0 && result.outputs[0].data.concepts) {
      food = result.outputs[0].data.concepts;
  	  console.log("food : ", food);
    }

	return (
		<div>
	      <Paper className = "background-color_food" style = {{ padding: 20, marginTop: 10, marginBottom: 10}}>
	      <Typography variant="title" color="inherit" align="left">
            Food Detection
          </Typography>      
	      </Paper>
	      <Paper style = {{ padding: 20, marginTop: 10, marginBottom: 10}}>
	       <FormControl >
	          <InputLabel>Url</InputLabel>
	          <Input style={{minWidth: 450}} onChange = {search}/>
	          <FormHelperText>Insert your photo's url here</FormHelperText>
	        </FormControl>    
	        <Button style={{margin: 10}}variant="raised" color="primary" onClick={()=>click("food")}>
		       Submit
		    </Button> 
	      </Paper>

	      <ImageFood image = {image}/> 
	      <ChartFood food = {food}/>
		</div>
		);
}

export default Food;