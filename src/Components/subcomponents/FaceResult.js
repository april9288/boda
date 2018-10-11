import React from 'react';
import './FaceResult.css';
import Paper from '@material-ui/core/Paper';

const faceImageDiv = { 
  padding: 20, 
  marginTop: 10, 
  marginBottom: 10,
  width: "fit-content",
  height: "fit-content"
}


const FaceResult = ({ classes, img, face }) => {

  if (img && face) {
    return (
      <Paper style = {faceImageDiv} elevation={1}>
      <div className='bigger-box'>
        <img id = 'inputimage' alt='' src={img} width='325' height='auto'/>
              { 
              face.map((value, i) => 
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

    );
  }
}


export default FaceResult;
