import styled from 'styled-components/native';
import { Platform, Dimensions } from 'react-native';
import { ListItem } from '@rneui/base';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export const ContainerWrapper = styled.View`
    flex: 1;
    padding-bottom: ${NAV_BAR_HEIGHT + (IS_IPHONE_X ? 20 : 10)}px
`;

export const ListItemWrapper = styled(ListItem)``;
