import {StyleSheet, Dimensions, Platform} from 'react-native';

const IS_IOS = Platform.OS === 'ios';
const {width: viewportWidth} = Dimensions.get('window');

function wp(percentage: number) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideWidth = wp(60);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;

export default StyleSheet.create({
  slideInnerContainer: {
    width: 250,
    height: 320,
    paddingHorizontal: itemHorizontalMargin,
    paddingBottom: 18, // needed for shadow
  },
  shadow: {
    position: 'absolute',
    top: 0,
    left: itemHorizontalMargin,
    right: itemHorizontalMargin,
    bottom: 18,
    borderRadius: entryBorderRadius,
  },
  imageContainer: {
    flex: 1,
    marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius,
    overflow: 'hidden',
  },
  imageContainerEven: {
    backgroundColor: '#1a1917',
  },
  image: {
    resizeMode: 'cover',
    borderRadius: IS_IOS ? entryBorderRadius : 0,
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius,
    width: 250,
    height: 250,
  },
  // image's border radius is buggy on iOS; let's hack it!
  radiusMask: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: entryBorderRadius,
    backgroundColor: 'white',
  },
  radiusMaskEven: {
    backgroundColor: '#1a1917',
  },
  textContainer: {
    justifyContent: 'center',
    paddingBottom: 10,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderBottomLeftRadius: entryBorderRadius,
    borderBottomRightRadius: entryBorderRadius,
  },
  textContainerEven: {
    backgroundColor: '#1a1917',
  },
  title: {
    color: '#1a1917',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  titleEven: {
    color: 'white',
  },
  subtitle: {
    marginTop: 6,
    color: '#888888',
    fontSize: 12,
    fontStyle: 'italic',
  },
  subtitleEven: {
    color: 'rgba(255, 255, 255, 0.7)',
  },
});
