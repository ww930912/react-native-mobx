import React from 'react';
import { ContainerWrapper, RuntimeWrapper, RuntimeLeftText,
    SeekBarWrapper, RuntimeRightText } from './Wrapper';
import { runTime, endTime } from '@/utils/fun';
import { useProgress } from 'react-native-track-player';

const ProgressBar = () => {
    const { position, duration } = useProgress();
        return (
            <ContainerWrapper>
                <RuntimeWrapper>
                    <RuntimeLeftText>{runTime(position)}</RuntimeLeftText>
                </RuntimeWrapper>
                <SeekBarWrapper/>
                <RuntimeWrapper>
                    <RuntimeRightText>{endTime(duration, position)}</RuntimeRightText>
                </RuntimeWrapper>
            </ContainerWrapper>
        );
};

export default React.memo(ProgressBar);
