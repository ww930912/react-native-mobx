import { ContainerWrapper, RuntimeWrapper, RuntimeLeftText,
    SeekBarWrapper, RuntimeRightText } from './Wrapper';
import { runTime, endTime } from '@/utils/fun';
import TrackPlayer from 'react-native-track-player';

const ProgressBar = (props: any) => {
    // stopTouch = async(progress) => {
    //     console.log('触发停止:', progress);
    //     const { playTrack } = this.props;
    //     const duration = playTrack.duration;
    //     await TrackPlayer.seekTo(progress * duration)
    //     await TrackPlayer.pause()
    //     this.time = setTimeout(async ()=>{
    //         await TrackPlayer.play()
    //         this.time && clearTimeout(this.time)
    //     },100)
    // }
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
