import { observer } from 'mobx-react';
import TrackPlayer, { State, usePlaybackState }  from 'react-native-track-player';
import { ActivityIndicator } from 'react-native';
import { isIOS } from '@/utils/fun';
import { useStore } from '@/store';
import { ContainerWrapper, IS_IPHONE_X, XPhoneWrapper,
CardWrapper, CoverContainerWrapper, CoverImageWrapper,
TextContainerWrapper, TitleWrapper, ControlWrapper, IconWrapper } from './Wrapper';

const Player = () => {
    const { rootStore } = useStore();
    const { playTracks, playTrack } = rootStore.palyerStore;
    const playerState = usePlaybackState();
    const isPlay = playerState === State.Playing;
    let name = '';
    if (isIOS()) {
        name = isPlay ? 'pause' : 'play';
    } else {
        name = isPlay ? 'md-pause' : 'md-play';
    }
    return (
        <ContainerWrapper>
            <CardWrapper>
                <CoverContainerWrapper>
                    { playTrack.artwork &&
                    <CoverImageWrapper
                        PlaceholderContent={<ActivityIndicator />}
                        source={{ uri: playTrack.artwork }} />
                        }
                </CoverContainerWrapper>
                <TextContainerWrapper>
                    <TitleWrapper numberOfLines={2}>{ playTrack.title }</TitleWrapper>
                    <TitleWrapper numberOfLines={1} style={{fontSize:10}}>{ playTrack.artist }</TitleWrapper>
                </TextContainerWrapper>
                <ControlWrapper>
                    <IconWrapper type="ionicon" reverse
                    name={isIOS ? 'play-skip-back' : 'md-skip-backward'} size={12}
                    color="#fff" reverseColor="#0EBDFC"
                    onPress={async () => {
                        if (isPlay) {
                            await TrackPlayer.pause();
                        }
                        try {
                            await TrackPlayer.skipToPrevious();
                            TrackPlayer.play();
                        } catch (_) {
                            await TrackPlayer.skip(playTracks[playTracks.length - 1].id);
                            TrackPlayer.play();
                        }
                    }}
                    />
                    <IconWrapper type="ionicon" reverse
                    name={name}
                    size={12} color="#fff" reverseColor="#0EBDFC"
                    onPress={()=> isPlay ? TrackPlayer.pause() : TrackPlayer.play()}
                    />
                    <IconWrapper type="ionicon" reverse
                    name={isIOS ? 'play-skip-forward' : 'md-skip-forward'} size={12}
                    color="#fff" reverseColor="#0EBDFC"
                    onPress={async ()=>{
                        if (isPlay) {
                            await TrackPlayer.pause();
                        }
                        try {
                            await TrackPlayer.skipToNext();
                            TrackPlayer.play();
                        } catch (_) {
                            await TrackPlayer.skip(playTracks[0].id);
                            TrackPlayer.play();
                        }
                    }}
                    />
                    <IconWrapper containerStyle={{paddingHorizontal:10}} type="ionicon"
                    name={isIOS ? 'list' : 'md-list'} size={32}
                    color="#fff" underlayColor="#0EBDFC"
                    onPress={()=>{}}
                    />
                </ControlWrapper>
                </CardWrapper>
            {IS_IPHONE_X && <XPhoneWrapper/>}
        </ContainerWrapper>
    );
};

export default observer(Player);
