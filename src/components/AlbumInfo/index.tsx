import { ContainerWrapper, HomeWrapper, IntroWrapper,
LeftWrapper, RightWrapper, AlbumImageWrapper, UserImageWrapper,
ListenContainerWrapper, UserContainerWrapper, UserTextWrapper,
ListenIconWrapper, ListenTextWrapper, TitleWrapper,
CustomSubTitleWrapper,  IntroTextWrapper, TooltipWrapper } from './Wrapper';
import { secondToNum } from '@/utils/fun';
import { ActivityIndicator } from 'react-native';

const AlbumInfo = (props: any) => {
    return (
      <ContainerWrapper>
          <HomeWrapper>
            <LeftWrapper>
              <AlbumImageWrapper
              source={{ uri: props.cover }}
              PlaceholderContent={<ActivityIndicator />} />
              <ListenContainerWrapper>
                <ListenIconWrapper type="font-awesome" name="headphones" size={10}
                  color="#fff" reverseColor="#0EBDFC"
                  onPress={()=>{}}
                />
                <ListenTextWrapper>{secondToNum(props.playTimes)}</ListenTextWrapper>
              </ListenContainerWrapper>
            </LeftWrapper>
            <RightWrapper>
              <TitleWrapper numberOfLines={1}>{props.title}</TitleWrapper>
              <CustomSubTitleWrapper numberOfLines={1}>{props.customTitle || props.customSubTitle}</CustomSubTitleWrapper>
              { props.uid &&  <UserContainerWrapper>
                { props.uid.smallLogo && <UserImageWrapper source={{ uri: props.uid.smallLogo }} /> }
                <UserTextWrapper numberOfLines={1}>{props.uid.nickname}</UserTextWrapper>
              </UserContainerWrapper>}
            </RightWrapper>
          </HomeWrapper>
          <IntroWrapper>
              <TooltipWrapper width={240} popover={<IntroTextWrapper>简介：{props.intro}</IntroTextWrapper>}>
                <IntroTextWrapper numberOfLines={3}>简介：{props.intro}</IntroTextWrapper>
              </TooltipWrapper>
          </IntroWrapper>
      </ContainerWrapper>
    );
};

export default AlbumInfo;
