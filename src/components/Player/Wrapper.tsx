import styled from 'styled-components/native';
import { Platform, Dimensions } from 'react-native';
import { Icon, Image } from '@rneui/base';

const SCREEN_HEIGHT = Dimensions.get('window').height;
export const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export const ContainerWrapper = styled.View`
    flex: 1;
    padding-horizontal: ${IS_IPHONE_X ? '5px' : 0};
    align-items: center;
`;

export const CoverContainerWrapper = styled.View`
    width: ${NAV_BAR_HEIGHT}px;
    height: ${NAV_BAR_HEIGHT}px;
    justify-content: center;
    align-items: center;
`;

export const XPhoneWrapper = styled.View`
    width: 100%;
    height: 10px;
`;

export const CardWrapper = styled.View`
    flex: 1;
    align-items: center;
    flex-direction: row;
    width: 100%;
`;

export const CoverImageWrapper = styled(Image).attrs({
    containerStyle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        overflow: 'hidden',
    },
    placeholderStyle: {
        width: 32,
        height: 32,
    },
})``;

export const TextContainerWrapper = styled.View`
    flex-direction: column;
    flex: 1;
    padding-left: 5px;
`;

export const TitleWrapper = styled.Text`
    font-size: 12px;
    color: #fff;
    line-height: 14px;
    text-align: left;
`;

export const ControlWrapper = styled.View`
    flex-direction: row;
    flex: 1;
    align-items: center;
    justify-content: space-around;
`;

export const IconWrapper = styled(Icon)``;
