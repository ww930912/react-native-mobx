import styled from 'styled-components/native';
import { Image, Icon, Tooltip } from '@rneui/base';

export const ContainerWrapper = styled.View`
    padding-horizontal: 20px;
    width: 100%;
`;

export const HomeWrapper = styled.View`
    flex-direction: row;
    height: 64px;
    width: 100%;
`;

export const IntroWrapper = styled.View`
    margin-top: 10px;
    width: 100%;
`;

export const LeftWrapper = styled.View`
    width: 64px;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    position: relative;
`;

export const RightWrapper = styled.View`
    flex-direction: column;
    max-width: 270px;
`;

export const AlbumImageWrapper = styled(Image).attrs({
    containerStyle: {
        width: 64,
        height: 64,
        borderRadius: 5,
        overflow: 'hidden',
    },
    placeholderStyle: {
        width: 64,
        height: 64,
    },
})``;

export const UserImageWrapper = styled(Image).attrs({
    containerStyle: {
        width: 16,
        height: 16,
        borderRadius: 8,
        overflow: 'hidden',
    },
    placeholderStyle: {
        width: 16,
        height: 16,
    },
})``;

export const ListenContainerWrapper = styled.View`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 15px;
    flex-direction: row;
    background-color: rgba(0,0,0,0.4);
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`;

export const UserContainerWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const UserTextWrapper = styled.Text`
    font-size: 12px;
    color: #fff;
    margin-left: 5px;
`;

export const ListenIconWrapper = styled(Icon)``;

export const TooltipWrapper = styled(Tooltip)``;

export const ListenTextWrapper = styled.Text`
    font-size: 10px;
    color: #fff;
    margin-left: 3px;
`;

export const TitleWrapper = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 4px;
`;

export const CustomSubTitleWrapper = styled.Text`
    font-size: 12px;
    color: #fff;
    margin-bottom: 4px;
`;

export const IntroTextWrapper = styled.Text`
    font-size: 12px;
    color: #fff;
    line-height: 16px;
`;
