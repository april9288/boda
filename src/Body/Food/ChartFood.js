import React from 'react';
import './Food.css';
import { PolarGrid,
		 PolarAngleAxis,
		 PolarRadiusAxis,
		 Radar,
		 RadarChart } from 'recharts';

const ChartFood = ({food}) => {

	if(food.length !== 0) {
	let dataSheet_food = [
	{name: food[0].name, size: food[0].value},
	{name: food[1].name, size: food[1].value},
	{name: food[2].name, size: food[2].value},
	{name: food[3].name, size: food[3].value},
	{name: food[4].name, size: food[4].value},
	{name: food[5].name, size: food[5].value},
	{name: food[6].name, size: food[6].value},
	{name: food[7].name, size: food[7].value}
	];

	// let dataSheet_food = [
	// {name: "french fries", size: 0.99877},
	// {name: "meat", size: 0.8793434},
	// {name: "ketchup", size: 0.4192575},
	// {name: "chicken", size: 0.30337905},
	// {name: "bread", size: 0.2488642},
	// {name: "sauce", size: 0.7402852},
	// {name: "candy", size: 0.6402852},
	// {name: "mango", size: 0.5402852},
	// ];


	return (
		<div>
		<h1 style={{textAlign: "left"}}>Food Image Analysis</h1>
		<div className = "chart-basic-food">
		<RadarChart outerRadius={90} width={730} height={250} data={dataSheet_food}>
	      <PolarGrid />
	      <PolarAngleAxis dataKey="name" />
	      <PolarRadiusAxis angle={45}/>
	      <Radar name="Food" dataKey="size" stroke="#2979FF" fill="#2979FF" fillOpacity={0.6} />
	    </RadarChart>
	    </div>
	    </div>
		);


    } else {
		return <div></div>
	}

}
export default ChartFood;