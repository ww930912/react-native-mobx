import {globalNavigation} from '@/utils/navigation';

import {ViewWrapper, ImageWrapper} from './Wrapper';

const Read = () => {
  return (
    <ViewWrapper
      onPress={() => {
        globalNavigation.goTo('Detail', {id: 1});
      }}>
      <ImageWrapper
        source={{uri: 'https://image.sredy.cn/read_white.png'}}
        resizeMode="cover"
      />
    </ViewWrapper>
  );
};
export default Read;
