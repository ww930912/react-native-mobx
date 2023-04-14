import styled from 'styled-components/native';
import { Platform, Dimensions } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 40;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export const MusicWrapper = styled.View`
    flex: 1;
    background-color: #F5FCFF;
`;

export const PlayerWrapper = styled.View`
    position: absolute;
    width: 100%;
    background-color: #0EBDFC;
    height: ${NAV_BAR_HEIGHT + (IS_IPHONE_X ? 20 : 10)}px;
    bottom: 0;
    left: 0;
`;
