import {FC, useEffect, useMemo, useRef} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {WelcomeProps} from '@/typings/workbench/welcome';
import {globalNavigation} from '@/utils/navigation';

import {
  ContainerWrapper,
  ImageBackgroundWrapper,
  SubTitleWrapper,
  TitleWrapper,
} from './Wrapper';
import data from './data';

const Weclome: FC<Partial<WelcomeProps>> = props => {
  const {navigation} = props;
  const timeRef = useRef(5000);
  const imageUrl = useMemo(() => Math.ceil(Math.random() * 354 + 1), []);
  const book = useMemo(() => {
    const index = Math.ceil(Math.random() * data.length) - 1;
    const {title, author} = data[index];
    if (title.length > 40) {
      timeRef.current = 10000;
    }
    return {title, author};
  }, []);
  useEffect(() => {
    // set globalNavigation
    globalNavigation.setNavigation(navigation);
  }, [navigation]);
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
      globalNavigation.resetToHomPage();
    }, timeRef.current);
  }, []);
  return (
    <ContainerWrapper>
      <ImageBackgroundWrapper
        source={{
          uri: `https://image.sredy.cn/images_pub/pub_${imageUrl}.jpg`,
        }}>
        <TitleWrapper>{book.title}</TitleWrapper>
        <SubTitleWrapper>－ {book.author}</SubTitleWrapper>
      </ImageBackgroundWrapper>
    </ContainerWrapper>
  );
};
export default Weclome;
