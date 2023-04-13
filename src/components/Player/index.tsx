import { ContainerWrapper, IS_IPHONE_X, XPhoneWrapper,
CardWrapper, CoverContainerWrapper, CoverImageWrapper,
TextContainerWrapper, TitleWrapper, ControlWrapper, IconWrapper } from './Wrapper';
import { isIOS } from '@/utils/fun';
import TrackPlayer, { State, usePlaybackState }  from 'react-native-track-player';
import { ActivityIndicator } from 'react-native';

const Player = (props: any) => {
    const { play:{ title, artwork, artist } } = props;
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
                    { title &&
                    <CoverImageWrapper
                        PlaceholderContent={<ActivityIndicator />}
                        source={{ uri: artwork }} />
                        }
                </CoverContainerWrapper>
                <TextContainerWrapper>
                    <TitleWrapper numberOfLines={2}>{ title }</TitleWrapper>
                    <TitleWrapper numberOfLines={1} style={{fontSize:10}}>{ artist }</TitleWrapper>
                </TextContainerWrapper>
                <ControlWrapper>
                    <IconWrapper type="ionicon" reverse
                    name={isIOS ? 'play-skip-back' : 'md-skip-backward'} size={12}
                    color="#fff" reverseColor="#0EBDFC"
                    onPress={props.back}
                    />
                    <IconWrapper type="ionicon" reverse
                    name={name}
                    size={12} color="#fff" reverseColor="#0EBDFC"
                    onPress={()=> isPlay ? TrackPlayer.pause() : TrackPlayer.play()}
                    />
                    <IconWrapper type="ionicon" reverse
                    name={isIOS ? 'play-skip-forward' : 'md-skip-forward'} size={12}
                    color="#fff" reverseColor="#0EBDFC"
                    onPress={props.forward}
                    />
                    <IconWrapper containerStyle={{paddingHorizontal:10}} type="ionicon"
                    name={isIOS ? 'list' : 'md-list'} size={32}
                    color="#fff" underlayColor="#0EBDFC"
                    onPress={props.showOverlay}
                    />
                </ControlWrapper>
                </CardWrapper>
            {IS_IPHONE_X && <XPhoneWrapper/>}
        </ContainerWrapper>
    );
};

export default Player;
