import { ContainerWrapper, RuntimeWrapper, RuntimeLeftText,
    SeekBarWrapper, RuntimeRightText } from './Wrapper';
import { runTime, endTime } from '@/utils/fun';

const ProgressBar = (props: any) => {
        const { playTrack, playProgress } = props;
        return (
            <ContainerWrapper>
                <RuntimeWrapper>
                    <RuntimeLeftText>{runTime(playTrack.duration, playProgress)}</RuntimeLeftText>
                </RuntimeWrapper>
                <SeekBarWrapper/>
                <RuntimeWrapper>
                    <RuntimeRightText>{endTime(playTrack.duration, playProgress)}</RuntimeRightText>
                </RuntimeWrapper>
            </ContainerWrapper>
        );
};

export default ProgressBar;
