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
		Tooltip,
		ResponsiveContainer} from 'recharts';

const ChartFace = ({num, age, gender, culture}) => {


	let dataSheet_gender = [
	{name : gender[0].name, probability: gender[0].value},
	{name : gender[1].name, probability: gender[1].value}
	];

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

	return (
		<section style={{width: 325}}>

		<h1 style={{textAlign: "center"}}># face {num+1}</h1>
		<div className = "chart-basic">
		<ResponsiveContainer width="90%" height={250} className = "responsiveContainer">
		<RadarChart outerRadius={90} width={730} height={250} data={dataSheet_culture}>
	      <PolarGrid />
	      <PolarAngleAxis dataKey="name" />
	      <PolarRadiusAxis angle={30}/>
	      <Radar name="Ethnicity" dataKey="probability" stroke="#2979FF" fill="#2979FF" fillOpacity={0.6} />
	    </RadarChart>
	    </ResponsiveContainer>
		</div>

		<div id = "gender" className = "chart-basic">
		<ResponsiveContainer width="90%" height={250} className = "responsiveContainer">
	    <PieChart style = {{ paddingTop: 40 }} width={730} height={100}>
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
	    </ResponsiveContainer>
		</div>

		<div className = "chart-basic">
		<ResponsiveContainer width="90%" height={250} className = "responsiveContainer">
		<BarChart width={300} height={250} data={dataSheet_age} barSize={10}>
		  <CartesianGrid strokeDasharray="3 3" />
		  <XAxis dataKey="name" />
		  <YAxis />
		  <Tooltip />
		  <Legend />
		  <Bar dataKey="age" fill="#2979FF" />
		</BarChart>
		</ResponsiveContainer>
		</div>

		</section>
		);
}
export default ChartFace;