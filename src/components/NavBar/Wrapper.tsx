import styled from 'styled-components/native';
import { Platform, Dimensions } from 'react-native';
import { Icon } from '@rneui/themed';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export const ContainerWrapper = styled.View`
    height: ${HEADER_HEIGHT}px;
    margin-horizontal: 10px;
`;

export const StatusBarWrapper = styled.View`
    height: ${STATUS_BAR_HEIGHT}px;
    background-color: transparent;
`;

export const NavBarWrapper = styled.View`
    height: ${NAV_BAR_HEIGHT}px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background-color: transparent;
`;

export const TitleWrapper = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    width: 320px;
`;

export const IconWrapper = styled(Icon)``;
