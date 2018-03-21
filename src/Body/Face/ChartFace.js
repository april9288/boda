import React from 'react';
import './ChartFace.css';
import {RadarChart,
		PolarGrid,
		PolarAngleAxis,
		PolarRadiusAxis,
		Radar,
		Pie,
		Legend,
		PieChart,
		Cell,
		Bar,
		BarChart,
		CartesianGrid,
		XAxis,
		YAxis,
		Tooltip} from 'recharts';

const ChartFace = ({num, age, gender, culture}) => {
	// 
	// console.log("data : " , gender);

	let dataSheet_gender = [
	{name : gender[0].name, probability: gender[0].value},
	{name : gender[1].name, probability: gender[1].value}
	];

	// let dataSheet_culture = [
	// {name: 'white', probability: 0.83853533},
	// {name: "hispanic, latino, or spanish origin", probability: 0.328322961},
	// {name: "asian", probability: 0.2008561395},
	// {name: "american indian or alaska native", probability: 0.10904},
	// {name: "middle eastern or north african", probability: 0.108110504},
	// {name: "black or african american", probability: 0.10712504}
	// ];

	// let dataSheet_gender = [
	// {name : 'feminine', probability: 0.78},
	// {name : 'masculine', probability: 0.22}
	// ];

	const COLORS = ['#EC407A', '#2979FF'];

	let dataSheet_culture = [
	{name: culture[0].name, probability: culture[0].value},
	{name: culture[1].name, probability: culture[1].value+0.05},
	{name: culture[2].name, probability: culture[2].value+0.05},
	{name: culture[3].name, probability: culture[3].value+0.05},
	{name: culture[4].name, probability: culture[4].value+0.05},
	{name: culture[5].name, probability: culture[5].value+0.05}
	];

	let dataSheet_age = [
	{name: age[0].name, age: age[0].value},
	{name: age[1].name, age: age[1].value},
	{name: age[2].name, age: age[2].value},
	{name: age[3].name, age: age[3].value},
	{name: age[4].name, age: age[4].value},
	{name: age[5].name, age: age[5].value},
	];

	// let dataSheet_age = [
	// {name: "age : 16", age: 0.6248909},
	// {name: "age : 17", age: 0.59915006},
	// {name: "age : 18", age: 0.41858202}
	// ];

	return (
		<div>
		<h1 style={{textAlign: "left"}}># face {num+1}</h1>
		<div className = "chart-basic">
		<RadarChart outerRadius={90} width={730} height={250} data={dataSheet_culture}>
	      <PolarGrid />
	      <PolarAngleAxis dataKey="name" />
	      <PolarRadiusAxis angle={30}/>
	      <Radar name="Ethnicity" dataKey="probability" stroke="#2979FF" fill="#2979FF" fillOpacity={0.6} />
	    </RadarChart>
		</div>

		<div id = "gender" className = "chart-basic">
	    <PieChart style = {{ paddingTop: 80 }} width={730} height={100}>
	      <Pie style = {{ paddingTop: 80 }} data={dataSheet_gender} dataKey="probability" nameKey="name" 
	           cx="50%" cy="50%" legendType='line' minAngle={5} 
	           innerRadius={70} outerRadius={100} 
	           fill="#8884d8" 
	           startAngle={180} endAngle={0} label
	           paddingAngle={5}>
	          {
	            dataSheet_gender.map((entry, i) => <Cell key={i} fill={COLORS[i % COLORS.length]}/>)
	          }
	      </Pie>
	    <Legend verticalAlign="bottom" height={36}/>
	    </PieChart>
		</div>

		<div className = "chart-basic">
		<BarChart width={300} height={250} data={dataSheet_age} barSize={10}>
		  <CartesianGrid strokeDasharray="3 3" />
		  <XAxis dataKey="name" />
		  <YAxis />
		  <Tooltip />
		  <Legend />
		  <Bar dataKey="age" fill="#2979FF" />
		</BarChart>
		</div>

		</div>
		);
}
export default ChartFace;