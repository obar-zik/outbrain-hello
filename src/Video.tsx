import {Composition} from 'remotion';
import {OutbrainHello} from './OutbrainHello';
import {RollingHead} from './OutbrainHello/RollingHead';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="OutbrainHello"
				component={OutbrainHello}
				durationInFrames={90}
				height={1080}
				width={1920}
				fps={30}
				defaultProps={{
					ameliaColor: '#ee6513',
					memberName: 'Omri',
				}}
			/>
			<Composition
				id="RollingHead"
				component={RollingHead}
				durationInFrames={90}
				height={1080}
				width={1920}
				fps={30}
				defaultProps={{
					color: '#ee6513',
					rollingTimeInFrames: 45,
				}}
			/>
		</>
	);
};
