import styled from 'styled-components/native';

export const ContainerWrapper = styled.View`
  flex: 1;
`;

export const ImageBackgroundWrapper = styled.ImageBackground`
  flex: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const SubTitleWrapper = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
  text-shadow: 0.5px 0.5px #999;
  width: 300px;
  text-align: right;
`;

export const TitleWrapper = styled.Text`
  width: 300px;
  margin-bottom: 20px;
  color: white;
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;
  background-color: transparent;
  text-shadow: 0.5px 0.5px #999;
`;
