import styled from 'styled-components/native';
import { Platform, Dimensions } from 'react-native';
const {
height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const SHAKE_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 104 : 80) : 110;

export const ViewWrapper = styled.TouchableOpacity`
    position: absolute;
    bottom:${SHAKE_HEIGHT}px;
    right: -3px;
    width: 108px;
    height: 40px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 9;
`;

export const TextWrapper = styled.Text`
    text-align: center;
    font-size: 10;
    color: white;
`;

export const ImageWrapper = styled.Image`
    width: 54px;
    height: 22.5px;
`;
