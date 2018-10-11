import React from 'react';

const foodImgDiv = {
  marginTop: "2rem"
}

const ColorResult = ({ img, color }) => {
  return (

    <div style={foodImgDiv}>
        <img alt='color' src={img} width='325' height='auto'/>
    {
      (color.length >= 1)
      && <div>The most dominant color in this photo is {color}.</div>
    }
    </div>
  );
}

export default ColorResult;