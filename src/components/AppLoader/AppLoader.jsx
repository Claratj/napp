import style from './AppLoader.module.scss';

export default function AppLoader() {
	return (
		<div className={style.Loader}>
			<svg data-testid="Spinner" width="96px" height="96px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
				<g transform="rotate(0 50 50)">
					<rect x="48.5" y="32.5" rx="1.44" ry="1.44" width="3" height="9" fill="#414141">
						<animate
							attributeName="opacity"
							values="1;0"
							keyTimes="0;1"
							dur="1s"
							begin="-0.9230769230769231s"
							repeatCount="indefinite"
						></animate>
					</rect>
				</g>
				<g transform="rotate(27.692307692307693 50 50)">
					<rect x="48.5" y="32.5" rx="1.44" ry="1.44" width="3" height="9" fill="#414141">
						<animate
							attributeName="opacity"
							values="1;0"
							keyTimes="0;1"
							dur="1s"
							begin="-0.8461538461538461s"
							repeatCount="indefinite"
						></animate>
					</rect>
				</g>
				<g transform="rotate(55.38461538461539 50 50)">
					<rect x="48.5" y="32.5" rx="1.44" ry="1.44" width="3" height="9" fill="#414141">
						<animate
							attributeName="opacity"
							values="1;0"
							keyTimes="0;1"
							dur="1s"
							begin="-0.7692307692307693s"
							repeatCount="indefinite"
						></animate>
					</rect>
				</g>
				<g transform="rotate(83.07692307692308 50 50)">
					<rect x="48.5" y="32.5" rx="1.44" ry="1.44" width="3" height="9" fill="#414141">
						<animate
							attributeName="opacity"
							values="1;0"
							keyTimes="0;1"
							dur="1s"
							begin="-0.6923076923076923s"
							repeatCount="indefinite"
						></animate>
					</rect>
				</g>
				<g transform="rotate(110.76923076923077 50 50)">
					<rect x="48.5" y="32.5" rx="1.44" ry="1.44" width="3" height="9" fill="#414141">
						<animate
							attributeName="opacity"
							values="1;0"
							keyTimes="0;1"
							dur="1s"
							begin="-0.6153846153846154s"
							repeatCount="indefinite"
						></animate>
					</rect>
				</g>
				<g transform="rotate(138.46153846153845 50 50)">
					<rect x="48.5" y="32.5" rx="1.44" ry="1.44" width="3" height="9" fill="#414141">
						<animate
							attributeName="opacity"
							values="1;0"
							keyTimes="0;1"
							dur="1s"
							begin="-0.5384615384615384s"
							repeatCount="indefinite"
						></animate>
					</rect>
				</g>
				<g transform="rotate(166.15384615384616 50 50)">
					<rect x="48.5" y="32.5" rx="1.44" ry="1.44" width="3" height="9" fill="#414141">
						<animate
							attributeName="opacity"
							values="1;0"
							keyTimes="0;1"
							dur="1s"
							begin="-0.46153846153846156s"
							repeatCount="indefinite"
						></animate>
					</rect>
				</g>
				<g transform="rotate(193.84615384615384 50 50)">
					<rect x="48.5" y="32.5" rx="1.44" ry="1.44" width="3" height="9" fill="#414141">
						<animate
							attributeName="opacity"
							values="1;0"
							keyTimes="0;1"
							dur="1s"
							begin="-0.38461538461538464s"
							repeatCount="indefinite"
						></animate>
					</rect>
				</g>
				<g transform="rotate(221.53846153846155 50 50)">
					<rect x="48.5" y="32.5" rx="1.44" ry="1.44" width="3" height="9" fill="#414141">
						<animate
							attributeName="opacity"
							values="1;0"
							keyTimes="0;1"
							dur="1s"
							begin="-0.3076923076923077s"
							repeatCount="indefinite"
						></animate>
					</rect>
				</g>
				<g transform="rotate(249.23076923076923 50 50)">
					<rect x="48.5" y="32.5" rx="1.44" ry="1.44" width="3" height="9" fill="#414141">
						<animate
							attributeName="opacity"
							values="1;0"
							keyTimes="0;1"
							dur="1s"
							begin="-0.23076923076923078s"
							repeatCount="indefinite"
						></animate>
					</rect>
				</g>
				<g transform="rotate(276.9230769230769 50 50)">
					<rect x="48.5" y="32.5" rx="1.44" ry="1.44" width="3" height="9" fill="#414141">
						<animate
							attributeName="opacity"
							values="1;0"
							keyTimes="0;1"
							dur="1s"
							begin="-0.15384615384615385s"
							repeatCount="indefinite"
						></animate>
					</rect>
				</g>
				<g transform="rotate(304.61538461538464 50 50)">
					<rect x="48.5" y="32.5" rx="1.44" ry="1.44" width="3" height="9" fill="#414141">
						<animate
							attributeName="opacity"
							values="1;0"
							keyTimes="0;1"
							dur="1s"
							begin="-0.07692307692307693s"
							repeatCount="indefinite"
						></animate>
					</rect>
				</g>
				<g transform="rotate(332.3076923076923 50 50)">
					<rect x="48.5" y="32.5" rx="1.44" ry="1.44" width="3" height="9" fill="#414141">
						<animate
							attributeName="opacity"
							values="1;0"
							keyTimes="0;1"
							dur="1s"
							begin="0s"
							repeatCount="indefinite"
						></animate>
					</rect>
				</g>
			</svg>
		</div>
	);
}
