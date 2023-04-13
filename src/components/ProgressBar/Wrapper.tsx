import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import SeekBar from './../SeekBar';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;

export const ContainerWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    padding-horizontal: 10px;
    align-items: center;
    height: ${IS_IPHONE_X ? '20px' : '1px5'}
`;

export const SeekBarWrapper = styled(SeekBar)`
    flex: 1;
    justify-content: center;
`;

export const RuntimeWrapper = styled.View`
    width:40px;
`;

export const RuntimeText = styled.Text`
    font-size: 10px;
    color: #fff;
`;

export const RuntimeLeftText = styled(RuntimeText)`
    margin-right: 10px;
    text-align: left;
`;

export const RuntimeRightText = styled(RuntimeText)`
    margin-left: 10px;
    text-align: right;
`;

