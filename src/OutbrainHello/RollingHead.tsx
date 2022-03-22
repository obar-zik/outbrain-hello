import {interpolate} from 'remotion';
import {useCurrentFrame, useVideoConfig} from 'remotion';

export const RollingHead: React.FC<{
	color: string;
	rollingTimeInFrames: number;
}> = ({color, rollingTimeInFrames}) => {
	const frame = useCurrentFrame();

	const {
		width: widthHight,
		height: videoHight,
		durationInFrames,
	} = useVideoConfig();
	const width = 512;
	const height = 512;

	let deg = interpolate(
		frame,
		[0, rollingTimeInFrames],
		[0, 360],
		{
			extrapolateLeft: 'extend',
		}
	);

	deg = frame < rollingTimeInFrames ? deg : 0;

	let left = interpolate(
		frame,
		[0, rollingTimeInFrames],
		[0 - width, (widthHight - width) / 2],
		{
			extrapolateRight: 'extend',
			extrapolateLeft: 'extend',
		}
	);

	left = left < (widthHight - width) / 2 ? left : (widthHight - width) / 2;

	let top = interpolate(
		frame,
		[
			rollingTimeInFrames,
			durationInFrames - 30,
			durationInFrames - 15,
			durationInFrames,
		],
		[videoHight * 0.2, videoHight * 0.1, videoHight * 0.2, videoHight * 0.1]
	);

	top = frame < rollingTimeInFrames ? videoHight * 0.2 : top;

	return (
		<svg
			viewBox="0 0 24 24"
			style={{
				position: 'absolute',
				left,
				top,
				width: `${width}px`,
				height: `${height}px`,
				transform: `rotate(${deg}deg)`,
			}}
		>
			<path
				fill={color}
				d="M21.235 8.039c.51 1.219.765 2.54.765 3.96 0 1.424-.256 2.743-.765 3.962a9.696 9.696 0 0 1-2.117 3.172 9.851 9.851 0 0 1-3.17 2.105C14.737 21.746 13.421 22 12 22c-1.42 0-2.737-.254-3.948-.762a9.846 9.846 0 0 1-3.17-2.105 9.697 9.697 0 0 1-2.118-3.172C2.254 14.742 2 13.423 2 12c0-1.422.255-2.742.764-3.961a9.706 9.706 0 0 1 2.118-3.172 9.845 9.845 0 0 1 3.17-2.105C9.263 2.254 10.579 2 12 2c1.421 0 2.737.254 3.948.762a9.85 9.85 0 0 1 3.17 2.105 9.705 9.705 0 0 1 2.117 3.172zM16.663 18.71a6.334 6.334 0 0 0 1.388-2.078 6.633 6.633 0 0 0 .5-2.502h-1.569a2.381 2.381 0 0 1-.176.776 2.302 2.302 0 0 1-1.258 1.256 2.393 2.393 0 0 1-.94.182 2.391 2.391 0 0 1-1.693-.683 2.309 2.309 0 0 1-.664-1.362h-.502c-.027.213-.08.416-.161.607a2.287 2.287 0 0 1-1.257 1.256 2.391 2.391 0 0 1-.94.182A2.39 2.39 0 0 1 7.7 15.66a2.358 2.358 0 0 1-.68-1.531h-1.57c.012.896.177 1.73.5 2.502a6.34 6.34 0 0 0 3.464 3.458 6.621 6.621 0 0 0 2.587.5c.93 0 1.793-.167 2.587-.5a6.456 6.456 0 0 0 2.076-1.38zm-5.858-4.745a1.384 1.384 0 0 0-1.413-1.413 1.41 1.41 0 0 0-1.006.405 1.372 1.372 0 0 0-.299.448c-.072.172-.109.36-.109.56 0 .2.037.387.109.56a1.375 1.375 0 0 0 .747.744c.17.073.357.109.558.109a1.414 1.414 0 0 0 1.005-.406 1.386 1.386 0 0 0 .408-1.007zm5.217 0c0-.2-.036-.388-.109-.56a1.38 1.38 0 0 0-.299-.449 1.416 1.416 0 0 0-1.005-.405 1.416 1.416 0 0 0-1.006.405 1.381 1.381 0 0 0-.3.449c-.071.172-.107.36-.107.56a1.384 1.384 0 0 0 .407 1.008 1.413 1.413 0 0 0 1.006.405 1.414 1.414 0 0 0 1.005-.406c.128-.127.227-.276.3-.448.072-.172.108-.359.108-.56zm-9.99-2.697c-.027.059-.058.114-.083.174a6.361 6.361 0 0 0-.434 1.61h1.668l.012-.03a2.298 2.298 0 0 1 1.257-1.255c.288-.12.602-.181.94-.181.338 0 .65.06.939.181a2.29 2.29 0 0 1 1.354 1.536h.631a2.312 2.312 0 0 1 1.354-1.536 2.4 2.4 0 0 1 .939-.181c.338 0 .65.06.939.181a2.305 2.305 0 0 1 1.258 1.255l.011.03h1.668a6.38 6.38 0 0 0-.434-1.61c-.054-.13-.117-.251-.177-.374-1.213-.444-2.518-.878-2.518-.878-2.36-.82-3.045-2.058-3.045-2.058s-.434 1.239-3.686 2.288c0 0-1.48.474-2.593.848z"
			/>
		</svg>
	);
};
