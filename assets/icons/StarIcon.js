/** @format */

import * as React from "react";
import Svg, { Path, Defs, RadialGradient, Stop } from "react-native-svg";

const SvgComponent = (props) => (
	<Svg
		width={20}
		height={20}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}>
		<Path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M9.992 0c-.283 0-.56.076-.802.22-.77.466-2.138 2.99-2.808 4.325a1.143 1.143 0 0 1-.863.626c-1.48.232-4.304.754-4.985 1.343-.212.186-.37.426-.458.694-.087.269-.1.556-.036.83.2.879 2.182 2.96 3.241 4.012a1.131 1.131 0 0 1 .321 1.01c-.237 1.48-.614 4.329-.26 5.155a1.56 1.56 0 0 0 1.295.943c.899.08 3.49-1.16 4.813-1.841a1.144 1.144 0 0 1 1.067 0c1.332.681 3.923 1.92 4.814 1.84a1.561 1.561 0 0 0 1.32-.934c.353-.826-.024-3.674-.261-5.154a1.13 1.13 0 0 1 .329-1.015c1.059-1.055 3.04-3.137 3.24-4.011a1.548 1.548 0 0 0-.5-1.529c-.683-.59-3.506-1.11-4.986-1.343a1.143 1.143 0 0 1-.863-.626C12.932 3.209 11.564.686 10.802.22A1.552 1.552 0 0 0 10 0h-.008Z'
			fill='url(#a)'
		/>
		<Path
			style={{
				mixBlendMode: "screen",
			}}
			opacity={0.5}
			fillRule='evenodd'
			clipRule='evenodd'
			d='m9.03 3.08-.19.322a25.644 25.644 0 0 0-1.014 1.877A2.76 2.76 0 0 1 5.768 6.77c-.7.11-1.4.243-2.098.401l-.36.08a1.131 1.131 0 0 0-.602 1.854l.244.276c.478.53.971 1.043 1.472 1.545a2.764 2.764 0 0 1 .803 2.406 41.8 41.8 0 0 0-.285 2.114c0 .097-.02.225-.036.37a1.131 1.131 0 0 0 1.576 1.146l.341-.152c.65-.285 1.292-.598 1.922-.918a2.764 2.764 0 0 1 2.543 0c.63.32 1.271.633 1.921.918l.34.152a1.132 1.132 0 0 0 1.577-1.147c0-.144-.028-.273-.036-.369a41.788 41.788 0 0 0-.284-2.114 2.763 2.763 0 0 1 .802-2.406c.501-.502.994-1.015 1.472-1.545l.245-.276a1.13 1.13 0 0 0-.602-1.854l-.361-.08a60.415 60.415 0 0 0-2.098-.401 2.76 2.76 0 0 1-2.058-1.492c-.369-.642-.698-1.264-1.05-1.877l-.19-.321a1.135 1.135 0 0 0-1.949 0h.012Z'
			fill='url(#b)'
		/>
		<Path
			style={{
				mixBlendMode: "screen",
			}}
			fillRule='evenodd'
			clipRule='evenodd'
			d='M3.277 15.612a21.291 21.291 0 0 1 15.38-9.507 26.829 26.829 0 0 0-4.172-.934 1.143 1.143 0 0 1-.863-.626C12.944 3.209 11.576.686 10.814.22a1.568 1.568 0 0 0-1.604 0c-.77.465-2.138 2.988-2.808 4.324a1.143 1.143 0 0 1-.862.626c-1.48.232-4.305.754-4.986 1.343-.212.186-.37.426-.458.694-.087.269-.1.556-.036.83.2.879 2.182 2.96 3.241 4.012a1.13 1.13 0 0 1 .301 1.01c-.104.67-.24 1.605-.325 2.544v.008Z'
			fill='url(#c)'
		/>
		<Path
			style={{
				mixBlendMode: "multiply",
			}}
			fillRule='evenodd'
			clipRule='evenodd'
			d='M15.624 19.033c-.947.137-3.67-1.965-5.07-3.124a.802.802 0 0 0-1.124 0c-1.4 1.163-4.123 3.26-5.07 3.124a1.336 1.336 0 0 1-.802-.493c-.044-.056-.092-.116-.132-.177.107.203.261.378.449.51.227.168.497.27.778.293.899.08 3.49-1.16 4.813-1.841a1.144 1.144 0 0 1 1.068 0c1.331.681 3.922 1.92 4.813 1.84.281-.023.55-.124.778-.292.188-.132.342-.307.45-.51-.04.06-.089.12-.133.177-.203.26-.494.435-.818.493ZM6.767 5.038C7.308 3.578 8.39.895 9.194.225c-.77.465-2.138 2.988-2.808 4.324a1.143 1.143 0 0 1-.863.626c-1.48.232-4.304.754-4.985 1.343.902-.55 3.79-.75 5.35-.802a.935.935 0 0 0 .879-.678Zm6.45 0a.934.934 0 0 0 .894.65c1.557.064 4.445.265 5.347.802-.681-.59-3.505-1.11-4.985-1.344a1.143 1.143 0 0 1-.863-.625C12.932 3.185 11.564.662 10.802.197c.79.714 1.873 3.397 2.415 4.841Zm-8.688 7.75a.85.85 0 0 0-.341-1.051C2.856 10.807.449 9.005.032 8.03c.2.878 2.182 2.96 3.241 4.01a1.13 1.13 0 0 1 .33 1.02c-.238 1.48-.615 4.328-.262 5.154C3.11 17.2 4 14.328 4.53 12.788Zm15.423-4.75c-.401.975-2.808 2.776-4.156 3.707a.85.85 0 0 0-.349 1.043c.53 1.54 1.42 4.412 1.184 5.443.352-.826-.025-3.674-.261-5.154a1.13 1.13 0 0 1 .329-1.015c1.07-1.063 3.052-3.145 3.253-4.023Z'
			fill='url(#d)'
		/>
		<Path
			style={{
				mixBlendMode: "screen",
			}}
			fillRule='evenodd'
			clipRule='evenodd'
			d='M1.978 6.241a31.412 31.412 0 0 1 3.87-.284c.586 0 .867-.073 1.128-.662.653-1.492.946-2.7 1.797-4.2.1-.196.225-.378.373-.541.324-.33.73-.173.653.312a83.692 83.692 0 0 1-.954 5.283c-.293 1.352-1.08 1.388-2.283 1.344-1.456-.052-3.441-.177-4.885-.401-1.268-.185-.65-.718.3-.867v.016Z'
			fill='url(#e)'
		/>
		<Path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M8.54 2.712c.325.116.401.73.168 1.38-.232.65-.678 1.075-1.002.946-.325-.128-.402-.73-.169-1.376.233-.645.682-1.079 1.003-.962v.012ZM9.118 1.12c.18.087.192.448.02.801-.173.353-.454.586-.638.502-.185-.084-.189-.45-.02-.802.168-.353.457-.594.638-.502Z'
			fill='#fff'
		/>
		<Path
			style={{
				mixBlendMode: "screen",
			}}
			fillRule='evenodd'
			clipRule='evenodd'
			d='M15.323 15.772c.433-.088.878.317.995.903.116.585-.14 1.13-.574 1.203-.433.072-.878-.32-.995-.906-.116-.586.14-1.132.574-1.204v.004Z'
			fill='url(#f)'
		/>
		<Path
			style={{
				mixBlendMode: "screen",
			}}
			fillRule='evenodd'
			clipRule='evenodd'
			d='M17.317 10.353c-.586.497-1.228.866-1.797 1.32a.847.847 0 0 0-.357.938c.084.361.248.698.357 1.055.364 1.204.044 1.244-.61.289-.285-.401-.542-.85-.803-1.288-.497-.874-.316-1.34.526-1.8a15.709 15.709 0 0 1 2.419-1.015c.718-.25.942-.069.285.485l-.02.016Z'
			fill='url(#g)'
		/>
		<Defs>
			<RadialGradient
				id='a'
				cx={0}
				cy={0}
				r={1}
				gradientUnits='userSpaceOnUse'
				gradientTransform='translate(5.732 1.155) scale(20.3168)'>
				<Stop stopColor='#FCF800' />
				<Stop offset={1} stopColor='#FC9700' />
			</RadialGradient>
			<RadialGradient
				id='b'
				cx={0}
				cy={0}
				r={1}
				gradientUnits='userSpaceOnUse'
				gradientTransform='translate(7.14 6.586) scale(13.5017)'>
				<Stop stopColor='#FFF261' />
				<Stop offset={0.11} stopColor='#FAEE5F' />
				<Stop offset={0.23} stopColor='#EDE15A' />
				<Stop offset={0.36} stopColor='#D6CB52' />
				<Stop offset={0.5} stopColor='#B7AD46' />
				<Stop offset={0.64} stopColor='#8E8736' />
				<Stop offset={0.78} stopColor='#5C5823' />
				<Stop offset={0.92} stopColor='#23210D' />
				<Stop offset={1} />
			</RadialGradient>
			<RadialGradient
				id='c'
				cx={0}
				cy={0}
				r={1}
				gradientUnits='userSpaceOnUse'
				gradientTransform='matrix(830.799 0 0 695.971 341.62 95.856)'>
				<Stop stopColor='#575001' />
				<Stop offset={0.11} stopColor='#9F9623' />
				<Stop offset={0.23} stopColor='#988D14' />
				<Stop offset={0.36} stopColor='#D6CB52' />
				<Stop offset={0.5} stopColor='#948700' />
				<Stop offset={0.64} stopColor='#756C00' />
				<Stop offset={0.78} stopColor='#8F881E' />
				<Stop offset={0.92} stopColor='#EED903' />
				<Stop offset={1} />
			</RadialGradient>
			<RadialGradient
				id='d'
				cx={0}
				cy={0}
				r={1}
				gradientUnits='userSpaceOnUse'
				gradientTransform='translate(11.48 12.956) scale(14.2077)'>
				<Stop stopColor='#E89A51' />
				<Stop offset={1} stopColor='#fff' />
			</RadialGradient>
			<RadialGradient
				id='e'
				cx={0}
				cy={0}
				r={1}
				gradientUnits='userSpaceOnUse'
				gradientTransform='translate(4.846 .49) scale(8.96907)'>
				<Stop stopColor='#FFFACF' />
				<Stop offset={1} />
			</RadialGradient>
			<RadialGradient
				id='f'
				cx={0}
				cy={0}
				r={1}
				gradientUnits='userSpaceOnUse'
				gradientTransform='translate(17.63 17.485) scale(4.5447)'>
				<Stop stopColor='#FFF380' />
				<Stop offset={1} />
			</RadialGradient>
			<RadialGradient
				id='g'
				cx={0}
				cy={0}
				r={1}
				gradientUnits='userSpaceOnUse'
				gradientTransform='translate(18.965 13.815) scale(6.83109)'>
				<Stop />
				<Stop offset={0.08} stopColor='#232112' />
				<Stop offset={0.22} stopColor='#5C582E' />
				<Stop offset={0.36} stopColor='#8E8747' />
				<Stop offset={0.5} stopColor='#B7AE5C' />
				<Stop offset={0.64} stopColor='#D6CC6C' />
				<Stop offset={0.77} stopColor='#EDE277' />
				<Stop offset={0.89} stopColor='#FAEF7E' />
				<Stop offset={1} stopColor='#FFF380' />
			</RadialGradient>
		</Defs>
	</Svg>
);

export default SvgComponent;
