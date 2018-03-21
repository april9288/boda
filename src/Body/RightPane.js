import React from 'react';
import Home from './Home';
import Face from './Face/Face';
import Color from './Color/Color';
import Food from './Food/Food';

const RightPane = ({route, search, click, image, result, clear}) => {

	if (route === "Home") {
		return <Home />;
	} else if (route === "Face") {
		return <Face search = {search} click = {click} image = {image} result={result} clear={clear}/>;
	} else if (route === "Color") {
		return <Color search = {search} click = {click} image = {image} result={result} clear={clear}/>;
	} else if (route === "Food") {
		return <Food search = {search} click = {click} image = {image} result={result} clear={clear}/>;
	} else {
		return <Home />;
	}
}

export default RightPane;