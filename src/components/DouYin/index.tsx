import { observer } from 'mobx-react';
import { globalNavigation } from '@/utils/navigation';
import {useStore} from '@/store';
import { ViewWrapper, ImageWrapper } from './Wrapper';

const DouYin = () => {
    const { rootStore } = useStore();
    const { get } = rootStore.detailStore;

    return (
        <ViewWrapper onPress={() => {
            get(2, () => {
                globalNavigation.goTo('Detail', {id: 2});
            });
        }}>
            <ImageWrapper
            source={{uri: 'https://image.sredy.cn/douyin.png'}}
            resizeMode="cover" />
        </ViewWrapper>
    );
  };
export default  observer(DouYin);
