import React from 'react';

const colorImgDiv = {
  marginTop: "2rem"
}

const ColorResult = ({ img, color }) => {
  return (

    <div style={colorImgDiv}>
        <img alt='color' src={img} width='325' height='auto'/>
    {
      (color.length >= 1)
      && <div>The most dominant color in this photo is {color}.</div>
    }
    </div>
  );
}

export default ColorResult;