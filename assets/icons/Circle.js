/** @format */

import React from "react";
import Svg, { Circle, Path, Rect } from "react-native-svg";

function Icon({ background, fill, reflection }) {
	return (
		<Svg
			xmlns='http://www.w3.org/2000/svg'
			width='92'
			height='92'
			fill='none'
			viewBox='0 0 92 92'>
			<Rect width='92' height='92' fill={background} rx='46'></Rect>
			<Circle cx='46' cy='46' r='36' fill={fill}></Circle>
			<Path
				fill={reflection}
				fillOpacity='0.47'
				d='M18 68.5l52-49L78.5 30c-3.5 32.5-45.6 48.1-48 48.5-2.4.4-9.333-6.5-12.5-10z'></Path>
		</Svg>
	);
}

export default Icon;
