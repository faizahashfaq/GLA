/** @format */

import React from "react";
import Svg, { Path } from "react-native-svg";
function Icon({ fill }) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width="25"
			height="24"
			fill="none"
			viewBox="0 0 25 24">
			<Path
				fill={fill}
				fillRule="evenodd"
				d="M11.972.104C11.594.22 1.27 6.44.992 6.72a2.161 2.161 0 00-.342.476l-.129.262-.014 7.167c-.016 7.85-.031 7.45.306 8.035.71 1.227 1.092 1.34 4.52 1.34 3.073 0 3.044.004 3.551-.505.506-.507.503-.489.505-3.5.002-3.9-.3-3.555 3.111-3.555 3.412 0 3.11-.345 3.111 3.555.002 3.011 0 2.993.505 3.5.507.509.479.505 3.552.505 3.427 0 3.81-.113 4.518-1.34.338-.585.323-.186.307-8.035l-.014-7.167-.129-.262c-.24-.488-.434-.617-5.8-3.848-5.945-3.58-5.768-3.493-6.578-3.244z"
				clipRule="evenodd"></Path>
		</Svg>
	);
}

export default Icon;
