import React from 'react';
import Paper from '@material-ui/core/Paper';

const colorImageDiv = { 
  padding: 20, 
  marginTop: 10, 
  marginBottom: 10,
  width: "fit-content",
  height: "fit-content"
}

const fameImageResultBigDiv = {
  // width: "100%",
  // display: "flex",
  // justifyContent: "center"

}

const ColorResult = ({ img, color }) => {
  return (

    <div style={fameImageResultBigDiv}>
      <Paper style = {colorImageDiv} elevation={1}>
        <img alt='color' src={img} width='325' height='auto'/>
      </Paper>
    
    {
      (color.length >= 1)
      && <div>The most dominant color in this photo is {color}.</div>
    }
    </div>
  );
}

export default ColorResult;