import styled from 'styled-components/native';
import {Platform} from 'react-native';
const BOTTOM = Platform.OS === 'ios' ? '10%' : '12%';
export const ViewWrapper = styled.TouchableOpacity`
  position: absolute;
  bottom: ${BOTTOM};
  left: 50%;
  margin-left: -50px;
  width: 100px;
  height: 18px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 9;
`;

export const TextWrapper = styled.Text`
  text-align: center;
  font-size: 10px;
  color: white;
`;

export const ImageWrapper = styled.Image`
  width: 100px;
  height: 18px;
`;
