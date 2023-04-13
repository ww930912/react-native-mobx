import {sliderWidth, itemWidth} from './SliderEntryStyle';
import SliderEntry from './SliderEntry';
import Carousel from 'react-native-snap-carousel';
import {Platform, Dimensions} from 'react-native';
import { useEffect, useRef } from 'react';
import { observer } from 'mobx-react';
import {useStore} from '@/store';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const BOOK_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 120 : 80) : 80;

const BookCase = (props: any) => {
  const { rootStore } = useStore();
  const { setCarousel } = rootStore.homeStore;
  const renderItem = ({item, index}) => {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  };
  const carousel = useRef<Carousel<typeof renderItem>>();
  useEffect(()=>{
    // carousel.current.snapToItem(5);
    setCarousel(carousel.current);
  },[carousel]);
  return (
    <Carousel
      ref={carousel}
      onBeforeSnapToItem={props.beforeSnapToItem}
      data={props.bookList}
      renderItem={renderItem}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      containerCustomStyle={{
        marginTop: Platform.OS === 'ios' ? 40 : 20,
        overflow: 'visible',
      }}
      contentContainerCustomStyle={{
        paddingVertical: 10,
        marginTop: BOOK_HEIGHT,
      }}
      useScrollView={true}
      hasParallaxImages={true}
      onSnapToItem={props.snapToItem}
    />
  );
};
export default observer(BookCase);
