import React from 'react';
import { PolarGrid,
     PolarAngleAxis,
     PolarRadiusAxis,
     Radar,
     RadarChart,
     ResponsiveContainer } from 'recharts';

const ChartFood = ({food}) => {


  let lastValue = 0.75;
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
    lastValue = Number((food[7].value - 0.05).toFixed(2));
  }

  	if (food.length >= 1) {
		return (
			<section style={{width: 325}}>
	        <ResponsiveContainer width="100%" height={250} className = "responsiveContainer">
	                <RadarChart outerRadius={90} width={730} height={250} data={dataSheet_food}>
	                  <PolarGrid />
	                  <PolarAngleAxis dataKey="name" />
	                  <PolarRadiusAxis angle={45} domain={[lastValue, 1]}/>
	                  <Radar name="Food" dataKey="size" stroke="#2979FF" fill="#2979FF" fillOpacity={0.6} />
	                </RadarChart>
	        </ResponsiveContainer>
			</section>
			);
  	} else {
      return <div></div>
    }
}
export default ChartFood;