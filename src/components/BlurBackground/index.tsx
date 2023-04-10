import {ContainerWrapper, ImageWrapper} from './Wrapper';

const BlurBackground = (props: {url: string}) => {
  return (
    <ContainerWrapper>
      <ImageWrapper
        source={{uri: props.url}}
        blurRadius={40}
        resizeMode="cover"
      />
    </ContainerWrapper>
  );
};
export default BlurBackground;
