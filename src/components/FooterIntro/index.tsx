import {ViewWrapper, TextWrapper} from './Wrapper';

const FooterIntro = (props: {albums: string; tracks: string}) => {
  return (
    <ViewWrapper>
      <TextWrapper>
        共收集{props.albums}个专栏、{props.tracks}个音频.
      </TextWrapper>
      <TextWrapper>Wu Wei | 2023 | All Rights Reserved.</TextWrapper>
    </ViewWrapper>
  );
};
export default FooterIntro;
