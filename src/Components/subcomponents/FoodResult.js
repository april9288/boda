import React from 'react';
import Paper from '@material-ui/core/Paper';
import './FaceResult.css';

import { PolarGrid,
     PolarAngleAxis,
     PolarRadiusAxis,
     Radar,
     RadarChart,
     ResponsiveContainer } from 'recharts';

const foodImageDiv = { 
  padding: 20, 
  marginTop: 10, 
  marginBottom: 10,
  width: "fit-content",
  height: "fit-content"
}

const FoodResult = ({ img, food }) => {

  let dataSheet_food;
  if(food.length >= 1) {
    dataSheet_food = [
      {name: food[0].name, size: food[0].value},
      {name: food[1].name, size: food[1].value},
      {name: food[2].name, size: food[2].value},
      {name: food[3].name, size: food[3].value},
      {name: food[4].name, size: food[4].value},
      {name: food[5].name, size: food[5].value},
      {name: food[6].name, size: food[6].value},
      {name: food[7].name, size: food[7].value}
    ];
  }

  if (food.length >= 1) {
    return (
      <div>
        <Paper style = {foodImageDiv} elevation={1}>
        <div className='bigger-box'>
          <img alt='food' src={img} width='325' height='auto'/>
        </div>
        </Paper>

        <ResponsiveContainer width="90%" height={250} className = "responsiveContainer">
                <RadarChart outerRadius={90} width={730} height={250} data={dataSheet_food}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="name" />
                  <PolarRadiusAxis angle={45} domain={[0.8, 1]}/>
                  <Radar name="Food" dataKey="size" stroke="#2979FF" fill="#2979FF" fillOpacity={0.6} />
                </RadarChart>
        </ResponsiveContainer>
      </div>
    )
  } else if (img) {
    return (
      <div>
        <Paper style = {foodImageDiv} elevation={1}>
          <img alt='food' src={img} width='325' height='auto'/>
        </Paper>
      </div>
    )
  }

}

export default FoodResult;