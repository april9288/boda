import React from 'react';
import {Paper, Typography} from 'material-ui';
import './Color.css';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Button from 'material-ui/Button';
import ImageColor from './ImageColor';

const change_bg = (color="white") => {
	const body = document.querySelector("body");
	body.style.backgroundColor = color;
}


const Color = ({search, text, click, image, result, clear}) => {
	
    let result_color = '';
    if (result.length !== 0 && result.outputs[0].data.colors[0].raw_hex) {
      result_color = result.outputs[0].data.colors[0].raw_hex;
      change_bg(result_color);
    }

	return (
		<div>
	      <Paper className = "background-color" style = {{ padding: 20, marginTop: 10, marginBottom: 10}}>
	      <Typography variant="title" color="inherit" align="left">
            Color Detection
          </Typography>      
	      </Paper>
	      <Paper style = {{ padding: 20, marginTop: 10, marginBottom: 10}}>
	       <FormControl >
	          <InputLabel>Url</InputLabel>
	          <Input style={{minWidth: 450}} onChange = {search} value={text}/>
	          <FormHelperText>Insert your photo's url here</FormHelperText>
	        </FormControl>    
	        <Button style={{margin: 10}}variant="raised" color="primary" onClick={()=>click("color")}>
		       Submit
		    </Button> 
		  <Button style={{margin: 10}} variant="raised" color="secondary" onClick={clear}>
           Clear
          </Button> 
	      </Paper>

	      <ImageColor image = {image}/>  
		</div>
		);
}

export default Color;