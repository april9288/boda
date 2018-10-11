import React from 'react';

const foodImgDiv = {
	marginTop: "2rem"
}

const FoodResult = ({ img }) => {
    return (
      <div style={foodImgDiv}>
          <img alt='food' src={img}/>
      </div>
    )
}

export default FoodResult;