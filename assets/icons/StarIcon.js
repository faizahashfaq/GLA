/** @format */

import React from "react";
import Svg, { Path, G, Defs, RadialGradient, Stop } from "react-native-svg";
const RoutineIcon = ({ fill }) => {
	return (
		<Svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<Path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M9.99198 0.415473C9.70947 0.414642 9.43209 0.490921 9.18974 0.636089C8.41958 1.10139 7.05176 3.62444 6.38189 4.96017C6.29975 5.12666 6.1783 5.27064 6.02804 5.37967C5.87778 5.48869 5.70323 5.55948 5.51948 5.58592C4.03934 5.81857 1.21545 6.34003 0.533543 6.92968C0.321641 7.1158 0.163699 7.35548 0.076265 7.62362C-0.0112146 7.89193 -0.0236979 8.17905 0.0401642 8.45394C0.240725 9.33239 2.22226 11.4142 3.28122 12.4651C3.41325 12.5946 3.51153 12.7544 3.56748 12.9306C3.62342 13.1068 3.63531 13.2941 3.60212 13.476C3.36546 14.9561 2.9884 17.8041 3.34139 18.6304C3.45195 18.89 3.63082 19.1147 3.85897 19.2807C4.08712 19.4467 4.35601 19.5477 4.63701 19.573C5.53552 19.6532 8.12676 18.4138 9.45046 17.7319C9.6149 17.6451 9.79803 17.5998 9.98395 17.5998C10.1699 17.5998 10.353 17.6451 10.5174 17.7319C11.8492 18.4138 14.4404 19.6532 15.3309 19.573C15.6153 19.5527 15.8886 19.4548 16.1213 19.29C16.3539 19.1252 16.537 18.8999 16.6506 18.6384C17.0036 17.8121 16.6265 14.9641 16.3899 13.484C16.357 13.3008 16.3698 13.1124 16.4272 12.9354C16.4845 12.7583 16.5847 12.5982 16.7188 12.4692C17.7777 11.4142 19.7593 9.33239 19.9598 8.45795C20.0237 8.18306 20.0112 7.89594 19.9237 7.62763C19.8347 7.35714 19.6739 7.1159 19.4584 6.92968C18.7765 6.34003 15.9526 5.81857 14.4725 5.58592C14.2887 5.55948 14.1142 5.48869 13.9639 5.37967C13.8137 5.27064 13.6922 5.12666 13.6101 4.96017C12.9322 3.62444 11.5644 1.10139 10.8022 0.636089C10.5599 0.490921 10.2825 0.414642 10 0.415473H9.99198Z"
				fill="url(#paint0_radial_154_157)"
			/>
			<Path
				style="mix-blend-mode:screen"
				opacity="0.5"
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M9.02931 3.49609L8.84078 3.81699C8.47576 4.4307 8.13882 5.05244 7.82594 5.69423C7.62765 6.08967 7.33721 6.43164 6.97909 6.69133C6.62097 6.95102 6.20567 7.12081 5.76819 7.1864C5.06757 7.29604 4.36828 7.42975 3.67033 7.58752L3.30932 7.66775C3.11729 7.71052 2.93973 7.80264 2.79417 7.93501C2.64862 8.06738 2.54011 8.23542 2.47936 8.42254C2.4186 8.60967 2.4077 8.8094 2.44774 9.00203C2.48777 9.19465 2.57735 9.37351 2.70764 9.52093L2.95232 9.7977C3.42966 10.3272 3.92304 10.8406 4.42444 11.342C4.74062 11.65 4.97845 12.0292 5.11802 12.4479C5.25759 12.8666 5.29485 13.3127 5.22668 13.7487C5.11437 14.4507 5.0181 15.1567 4.94188 15.8627C4.94188 15.9589 4.92183 16.0873 4.90578 16.2317C4.88669 16.4277 4.91911 16.6253 4.99983 16.805C5.08055 16.9846 5.20678 17.1401 5.36602 17.2559C5.52527 17.3718 5.71201 17.4441 5.90777 17.4657C6.10354 17.4873 6.30154 17.4573 6.48219 17.3789L6.82314 17.2265C7.47296 16.9417 8.11475 16.6288 8.74451 16.3079C9.13744 16.1043 9.57352 15.998 10.0161 15.998C10.4586 15.998 10.8947 16.1043 11.2876 16.3079C11.9174 16.6288 12.5592 16.9417 13.209 17.2265L13.5499 17.3789C13.7306 17.4573 13.9286 17.4873 14.1244 17.4657C14.3201 17.4441 14.5069 17.3718 14.6661 17.2559C14.8254 17.1401 14.9516 16.9846 15.0323 16.805C15.113 16.6253 15.1454 16.4277 15.1263 16.2317C15.1263 16.0873 15.0983 15.9589 15.0902 15.8627C15.014 15.1567 14.9178 14.4507 14.8055 13.7487C14.7373 13.3127 14.7745 12.8666 14.9141 12.4479C15.0537 12.0292 15.2915 11.65 15.6077 11.342C16.1091 10.8406 16.6025 10.3272 17.0798 9.7977L17.3245 9.52093C17.4548 9.37351 17.5444 9.19465 17.5844 9.00203C17.6244 8.8094 17.6135 8.60967 17.5528 8.42254C17.492 8.23542 17.3835 8.06738 17.238 7.93501C17.0924 7.80264 16.9148 7.71052 16.7228 7.66775L16.3618 7.58752C15.6679 7.43911 14.9659 7.31075 14.2639 7.1864C13.8265 7.12081 13.4112 6.95102 13.053 6.69133C12.6949 6.43164 12.4045 6.08967 12.2062 5.69423C11.8372 5.05244 11.5082 4.4307 11.1552 3.81699L10.9667 3.49609C10.866 3.32739 10.7233 3.18772 10.5524 3.09073C10.3816 2.99374 10.1885 2.94275 9.992 2.94275C9.79553 2.94275 9.60243 2.99374 9.43158 3.09073C9.26073 3.18772 9.11797 3.32739 9.01727 3.49609H9.02931Z"
				fill="url(#paint1_radial_154_157)"
			/>
			<Path
				style="mix-blend-mode:screen"
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M3.27724 16.0271C4.98605 13.4111 7.2497 11.2033 9.90754 9.56031C12.5654 7.91735 15.5523 6.87953 18.6562 6.5205C17.2927 6.09848 15.8978 5.78595 14.4846 5.58588C14.3008 5.55945 14.1263 5.48865 13.976 5.37963C13.8257 5.2706 13.7043 5.12662 13.6221 4.96013C12.9443 3.6244 11.5764 1.10135 10.8143 0.63605C10.5716 0.491596 10.2945 0.415344 10.0121 0.415344C9.72965 0.415344 9.45248 0.491596 9.20982 0.63605C8.43966 1.10135 7.07184 3.6244 6.40197 4.96013C6.31983 5.12662 6.19838 5.2706 6.04812 5.37963C5.89786 5.48865 5.72331 5.55945 5.53956 5.58588C4.05942 5.81853 1.23553 6.33999 0.553624 6.92964C0.341722 7.11576 0.183779 7.35544 0.0963457 7.62358C0.00886607 7.89189 -0.00361736 8.17901 0.0602447 8.4539C0.260805 9.33235 2.24234 11.4142 3.3013 12.4651C3.42978 12.5965 3.52432 12.7572 3.57674 12.9333C3.62915 13.1094 3.63788 13.2957 3.60214 13.4759C3.49785 14.1458 3.36147 15.0804 3.27724 16.019V16.0271Z"
				fill="url(#paint2_radial_154_157)"
			/>
			<G style="mix-blend-mode:multiply">
				<Path
					style="mix-blend-mode:multiply"
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M15.6237 19.4486C14.6771 19.585 11.9535 17.4832 10.5536 16.3239C10.4036 16.1769 10.202 16.0946 9.992 16.0946C9.78201 16.0946 9.58039 16.1769 9.43043 16.3239C8.03052 17.4872 5.30691 19.585 4.36026 19.4486C4.04181 19.387 3.75666 19.2117 3.55802 18.9553C3.5139 18.8991 3.46576 18.8389 3.42565 18.7788C3.5334 18.9814 3.68729 19.156 3.87491 19.2882C4.10215 19.456 4.37157 19.5574 4.65308 19.581C5.55159 19.6612 8.14283 18.4218 9.46653 17.7399C9.63097 17.6531 9.8141 17.6078 10 17.6078C10.186 17.6078 10.3691 17.6531 10.5335 17.7399C11.8652 18.4218 14.4565 19.6612 15.347 19.581C15.6285 19.5574 15.8979 19.456 16.1251 19.2882C16.3128 19.156 16.4667 18.9814 16.5744 18.7788C16.5343 18.8389 16.4862 18.8991 16.442 18.9553C16.2394 19.215 15.948 19.3907 15.6237 19.4486ZM6.76699 5.45353C7.3085 3.99345 8.39153 1.30995 9.19377 0.640078C8.42362 1.10538 7.0558 3.62843 6.38592 4.96416C6.30379 5.13065 6.18234 5.27463 6.03208 5.38366C5.88182 5.49268 5.70727 5.56347 5.52351 5.58991C4.04338 5.82256 1.21948 6.34402 0.537578 6.93367C1.4401 6.38413 4.32817 6.18357 5.88853 6.13143C6.08817 6.12709 6.28116 6.05894 6.43925 5.93695C6.59733 5.81496 6.71219 5.64554 6.76699 5.45353V5.45353ZM13.217 5.45353C13.2776 5.64291 13.397 5.80803 13.5579 5.92489C13.7187 6.04176 13.9127 6.10427 14.1115 6.10335C15.6679 6.16753 18.5559 6.36809 19.4585 6.90559C18.7766 6.31594 15.9527 5.79448 14.4725 5.56183C14.2888 5.53539 14.1142 5.4646 13.964 5.35558C13.8137 5.24655 13.6922 5.10257 13.6101 4.93608C12.9322 3.60035 11.5644 1.0773 10.8023 0.612C11.5925 1.32599 12.6755 4.00949 13.217 5.45353ZM4.52873 13.2032C4.60637 13.0161 4.61469 12.8075 4.55218 12.6148C4.48968 12.4221 4.36046 12.2581 4.18778 12.1523C2.85606 11.2217 0.449331 9.42062 0.0321655 8.44589C0.232726 9.32435 2.21426 11.4062 3.27322 12.4571C3.40792 12.5866 3.50846 12.7474 3.56585 12.9251C3.62325 13.1029 3.63572 13.2922 3.60214 13.476C3.36548 14.9561 2.98843 17.804 3.34141 18.6304C3.10876 17.6155 3.99925 14.7435 4.52873 13.2032ZM19.9518 8.45392C19.5507 9.42864 17.144 11.2297 15.7962 12.1603C15.624 12.2646 15.4944 12.4267 15.4305 12.6177C15.3665 12.8087 15.3725 13.0162 15.4472 13.2032C15.9767 14.7435 16.8672 17.6155 16.6306 18.6464C16.9835 17.8201 16.6065 14.9721 16.3698 13.492C16.3369 13.3088 16.3498 13.1204 16.4071 12.9434C16.4645 12.7663 16.5647 12.6062 16.6987 12.4772C17.7697 11.4142 19.7513 9.33237 19.9518 8.45392Z"
					fill="url(#paint3_radial_154_157)"
				/>
			</G>
			<Path
				style="mix-blend-mode:screen"
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M1.97759 6.65689C3.26076 6.48226 4.5535 6.38714 5.84841 6.37209C6.43404 6.37209 6.71483 6.29989 6.97556 5.71024C7.62939 4.21807 7.9222 3.0107 8.77258 1.5105C8.87257 1.31438 8.998 1.13231 9.14562 0.968991C9.47053 0.640072 9.87566 0.796509 9.79945 1.28187C9.53471 3.05482 9.22184 4.81574 8.84478 6.56463C8.55196 7.91641 7.76577 7.95251 6.5624 7.90839C5.10633 7.85624 3.12079 7.73189 1.67675 7.50726C0.409207 7.32275 1.02693 6.78926 1.97759 6.64084V6.65689Z"
				fill="url(#paint4_radial_154_157)"
			/>
			<Path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M8.53992 3.12699C8.86483 3.24332 8.94104 3.85703 8.70839 4.50685C8.47574 5.15666 8.0305 5.58185 7.70559 5.45349C7.38068 5.32513 7.30447 4.72345 7.53712 4.07765C7.76977 3.43184 8.21903 2.99863 8.53992 3.11496V3.12699Z"
				fill="white"
			/>
			<Path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M9.11752 1.53458C9.29802 1.62282 9.31006 1.98383 9.13757 2.33682C8.96509 2.6898 8.68431 2.92245 8.49979 2.83822C8.31528 2.75398 8.31126 2.38896 8.47973 2.03598C8.64821 1.68299 8.93701 1.44232 9.11752 1.53458Z"
				fill="white"
			/>
			<Path
				style="mix-blend-mode:screen"
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M15.3229 16.1875C15.7561 16.0993 16.2013 16.5044 16.3176 17.0901C16.434 17.6757 16.1772 18.2212 15.744 18.2934C15.3108 18.3656 14.8656 17.9725 14.7493 17.3869C14.6329 16.8013 14.8896 16.2557 15.3229 16.1835V16.1875Z"
				fill="url(#paint5_radial_154_157)"
			/>
			<Path
				style="mix-blend-mode:screen"
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M17.3164 10.7684C16.7308 11.2657 16.089 11.6348 15.5194 12.088C15.3675 12.1859 15.2509 12.3298 15.1867 12.4987C15.1224 12.6676 15.1139 12.8526 15.1624 13.0267C15.2466 13.3877 15.4111 13.7246 15.5194 14.0816C15.8844 15.285 15.5635 15.3251 14.9097 14.3704C14.6249 13.9693 14.3682 13.52 14.1075 13.0828C13.6101 12.2084 13.7906 11.7431 14.6329 11.2818C15.4095 10.8767 16.2186 10.5372 17.0517 10.267C17.7697 10.0183 17.9943 10.1988 17.3365 10.7523L17.3164 10.7684Z"
				fill="url(#paint6_radial_154_157)"
			/>
			<Defs>
				<RadialGradient
					id="paint0_radial_154_157"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(5.73207 1.5707) scale(20.3168)">
					<Stop stop-color="#FCF800" />
					<Stop offset="1" stop-color="#FC9700" />
				</RadialGradient>
				<RadialGradient
					id="paint1_radial_154_157"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(7.14003 7.00189) scale(13.5017)">
					<Stop stop-color="#FFF261" />
					<Stop offset="0.11" stop-color="#FAEE5F" />
					<Stop offset="0.23" stop-color="#EDE15A" />
					<Stop offset="0.36" stop-color="#D6CB52" />
					<Stop offset="0.5" stop-color="#B7AD46" />
					<Stop offset="0.64" stop-color="#8E8736" />
					<Stop offset="0.78" stop-color="#5C5823" />
					<Stop offset="0.92" stop-color="#23210D" />
					<Stop offset="1" />
				</RadialGradient>
				<RadialGradient
					id="paint2_radial_154_157"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(341.62 96.2713) scale(830.799 695.971)">
					<Stop stop-color="#575001" />
					<Stop offset="0.11" stop-color="#9F9623" />
					<Stop offset="0.23" stop-color="#988D14" />
					<Stop offset="0.36" stop-color="#D6CB52" />
					<Stop offset="0.5" stop-color="#948700" />
					<Stop offset="0.64" stop-color="#756C00" />
					<Stop offset="0.78" stop-color="#8F881E" />
					<Stop offset="0.92" stop-color="#EED903" />
					<Stop offset="1" />
				</RadialGradient>
				<RadialGradient
					id="paint3_radial_154_157"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(11.4802 13.3717) scale(14.2077)">
					<Stop stop-color="#E89A51" />
					<Stop offset="1" stop-color="white" />
				</RadialGradient>
				<RadialGradient
					id="paint4_radial_154_157"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(4.84561 0.904812) scale(8.96907)">
					<Stop stop-color="#FFFACF" />
					<Stop offset="1" />
				</RadialGradient>
				<RadialGradient
					id="paint5_radial_154_157"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(17.6293 17.9003) scale(4.5447)">
					<Stop stop-color="#FFF380" />
					<Stop offset="1" />
				</RadialGradient>
				<RadialGradient
					id="paint6_radial_154_157"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(18.965 14.23) scale(6.83109)">
					<Stop />
					<Stop offset="0.08" stop-color="#232112" />
					<Stop offset="0.22" stop-color="#5C582E" />
					<Stop offset="0.36" stop-color="#8E8747" />
					<Stop offset="0.5" stop-color="#B7AE5C" />
					<Stop offset="0.64" stop-color="#D6CC6C" />
					<Stop offset="0.77" stop-color="#EDE277" />
					<Stop offset="0.89" stop-color="#FAEF7E" />
					<Stop offset="1" stop-color="#FFF380" />
				</RadialGradient>
			</Defs>
		</Svg>
	);
};

export default RoutineIcon;