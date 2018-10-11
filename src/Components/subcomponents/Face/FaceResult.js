import React from 'react';

const FaceResult = ({ img, face }) => {

  if (img && face) {
    return (
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
    );
  }
}


export default FaceResult;
