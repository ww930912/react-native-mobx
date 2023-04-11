import {sliderWidth, itemWidth} from './SliderEntryStyle';
import SliderEntry from './SliderEntry';
import Carousel from 'react-native-snap-carousel';
import {Platform, Dimensions} from 'react-native';
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const BOOK_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 120 : 80) : 80;

const BookCase = (props: any) => {
  const renderItem = ({item, index}) => {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  };
  return (
    <Carousel
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
export default BookCase;
