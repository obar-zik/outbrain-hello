import {Sequence} from 'remotion';
import {RollingHead} from './RollingHead';
import {Title} from './Title';

export const OutbrainHello: React.FC<{
	memberName: string;
	ameliaColor: string;
}> = ({memberName, ameliaColor}) => {
	return (
		<div style={{flex: 1, backgroundColor: 'white'}}>
			<Sequence from={0}>
				<RollingHead color={ameliaColor} rollingTimeInFrames={45} />
			</Sequence>
			<Sequence from={30}>
				<Title titleText={memberName} titleColor="#7a3114" />
			</Sequence>
		</div>
	);
};
