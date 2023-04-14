import { observer } from 'mobx-react';
import {globalNavigation} from '@/utils/navigation';
import {useStore} from '@/store';
import {ViewWrapper, ImageWrapper} from './Wrapper';

const Read = () => {
  const { rootStore } = useStore();
  const { get } = rootStore.detailStore;

  return (
    <ViewWrapper
      onPress={() => {
        get(1, () => {
          globalNavigation.goTo('Detail', {id: 1});
        });
      }}>
      <ImageWrapper
        source={{uri: 'https://image.sredy.cn/read_white.png'}}
        resizeMode="cover"
      />
    </ViewWrapper>
  );
};
export default observer(Read);
