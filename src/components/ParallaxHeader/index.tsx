import { RNParallaxProps } from '@/typings/workbench/parallax';
import { FC, useState } from 'react';
import {
  StyleSheet,
  Platform,
  Animated,
  Text,
  View,
  Dimensions,
  StatusBar,
} from 'react-native';

const {
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

export const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
export const NAV_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;

const DEFAULT_HEADER_MAX_HEIGHT = 170;
const DEFAULT_HEADER_MIN_HEIGHT = NAV_BAR_HEIGHT;
const DEFAULT_EXTRA_SCROLL_HEIGHT = 30;
const DEFAULT_BACKGROUND_IMAGE_SCALE = 1.5;

const DEFAULT_NAVBAR_COLOR = '#3498db';
const DEFAULT_BACKGROUND_COLOR = '#303F9F';
const DEFAULT_TITLE_COLOR = 'white';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: DEFAULT_NAVBAR_COLOR,
    overflow: 'hidden',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: DEFAULT_HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  bar: {
    backgroundColor: 'transparent',
    height: DEFAULT_HEADER_MIN_HEIGHT,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  headerTitle: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: STATUS_BAR_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: DEFAULT_TITLE_COLOR,
    textAlign: 'center',
    fontSize: 16,
  },
});

const RNParallax : FC<Partial<RNParallaxProps>> = (props = {
  renderNavBar: () => <View />,
  navbarColor: DEFAULT_NAVBAR_COLOR,
  backgroundColor: DEFAULT_BACKGROUND_COLOR,
  backgroundImage: null,
  title: null,
  titleStyle: styles.headerText,
  headerMaxHeight: DEFAULT_HEADER_MAX_HEIGHT,
  headerMinHeight: DEFAULT_HEADER_MIN_HEIGHT,
  extraScrollHeight: DEFAULT_EXTRA_SCROLL_HEIGHT,
  backgroundImageScale: DEFAULT_BACKGROUND_IMAGE_SCALE,
  contentContainerStyle: null,
  innerContainerStyle: null,
  scrollViewStyle: null,
  containerStyle: null,
  alwaysShowTitle: true,
  alwaysShowNavBar: true,
  statusBarColor: null,
  scrollViewProps: {},
}) => {
const [scrollY] = useState(new Animated.Value(0));
  const getHeaderMaxHeight = () => {
    const { headerMaxHeight } = props;
    return headerMaxHeight;
  };

  const getHeaderMinHeight = () => {
    const { headerMinHeight } = props;
    return headerMinHeight;
  };

  const getHeaderScrollDistance = () => {
    return getHeaderMaxHeight() - getHeaderMinHeight();
  };

  const getExtraScrollHeight = () => {
    const { extraScrollHeight } = props;
    return extraScrollHeight;
  };

  const getInputRange = () => {
    return [-getExtraScrollHeight(), 0, getHeaderScrollDistance()];
  };

  const getHeaderHeight = () => {
    return scrollY.interpolate({
      inputRange: getInputRange(),
      outputRange: [getHeaderMaxHeight() + getExtraScrollHeight(), getHeaderMaxHeight(), getHeaderMinHeight()],
      extrapolate: 'clamp',
    });
  };

  const getNavBarOpacity = () => {
    return scrollY.interpolate({
      inputRange: getInputRange(),
      outputRange: [0, 1, 1],
      extrapolate: 'clamp',
    });
  };

  const getNavBarForegroundOpacity = () => {
    const { alwaysShowNavBar } = props;
    return scrollY.interpolate({
      inputRange: getInputRange(),
      outputRange: [alwaysShowNavBar ? 1 : 0, alwaysShowNavBar ? 1 : 0, 1],
      extrapolate: 'clamp',
    });
  };

  const getImageOpacity = () => {
    return scrollY.interpolate({
      inputRange: getInputRange(),
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
  };

  const getImageTranslate = () => {
    return scrollY.interpolate({
      inputRange: getInputRange(),
      outputRange: [0, 0, -50],
      extrapolate: 'clamp',
    });
  };


  const getTitleTranslateY = () => {
    return scrollY.interpolate({
      inputRange: getInputRange(),
      outputRange: [5, 0, 0],
      extrapolate: 'clamp',
    });
  };

  const getTitleOpacity = () => {
    const { alwaysShowTitle } = props;
    return scrollY.interpolate({
      inputRange: getInputRange(),
      outputRange: [1, 1, alwaysShowTitle ? 1 : 0],
      extrapolate: 'clamp',
    });
  };

  const renderBackgroundImage = () => {
    const { backgroundImage } = props;
    const imageOpacity = getImageOpacity();
    const imageTranslate = getImageTranslate();

    return (
      <Animated.Image
        style={[
          styles.backgroundImage,
          {
            height: getHeaderMaxHeight(),
            opacity: imageOpacity,
            transform: [{ translateY: imageTranslate }, { scale: 1 }],
          },
        ]}
        source={backgroundImage}
      />
    );
  };

  const renderPlainBackground = () => {
    const { backgroundColor } = props;
    const imageOpacity = getImageOpacity();
    const imageTranslate = getImageTranslate();

    return (
      <Animated.View
        style={{
          height: getHeaderMaxHeight(),
          backgroundColor,
          opacity: imageOpacity,
          transform: [{ translateY: imageTranslate }, { scale: 1 }],
        }}
      />
    );
  };

  const renderNavbarBackground = () => {
    const { navbarColor } = props;
    const navBarOpacity = getNavBarOpacity();

    return (
      <Animated.View
        style={[
          styles.header,
          {
            height: getHeaderHeight(),
            backgroundColor: navbarColor,
            opacity: navBarOpacity,
          },
        ]}
      />
    );
  };

  const renderHeaderBackground = () => {
    const { backgroundImage, backgroundColor } = props;
    const imageOpacity = getImageOpacity();

    return (
      <Animated.View
        style={[
          styles.header,
          {
            height: getHeaderHeight(),
            opacity: imageOpacity,
            backgroundColor: backgroundImage ? 'transparent' : backgroundColor,
          },
        ]}
      >
        {backgroundImage && renderBackgroundImage()}
        {!backgroundImage && renderPlainBackground()}
      </Animated.View>
    );
  };

  const renderHeaderTitle = () => {
    const { title, titleStyle } = props;
    const titleTranslateY = getTitleTranslateY();
    const titleOpacity = getTitleOpacity();

    return (
      <Animated.View
        style={[
          styles.headerTitle,
          {
            transform: [
              { translateY: titleTranslateY },
            ],
            height: getHeaderHeight(),
            opacity: titleOpacity,
          },
        ]}
      >
        {typeof title === 'string'
          && (
            <Text style={[styles.headerText, titleStyle]}>
              {title}
            </Text>
          )
        }
        {typeof title !== 'string' && title}
      </Animated.View>
    );
  };

  const renderHeaderForeground = () => {
    const { renderNavBar } = props;
    const navBarOpacity = getNavBarForegroundOpacity();

    return (
      <Animated.View
        style={[
          styles.bar,
          {
            height: getHeaderMinHeight(),
            opacity: navBarOpacity,
          },
        ]}
      >
        {renderNavBar()}
      </Animated.View>
    );
  };

  const renderScrollView = () => {
    const {
      renderContent, scrollViewStyle, contentContainerStyle, innerContainerStyle, scrollViewProps,
    } = props;
    return (
      <Animated.ScrollView
        style={[styles.scrollView, scrollViewStyle]}
        contentContainerStyle={contentContainerStyle}
        scrollEventThrottle={50}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {useNativeDriver: false}
        )}
        {...scrollViewProps}
      >
        <View style={[{ marginTop: getHeaderMaxHeight() }, innerContainerStyle]}>
          {renderContent()}
        </View>
      </Animated.ScrollView>
    );
  };

const { navbarColor, statusBarColor, containerStyle } = props;
return (
    <View style={[styles.container, containerStyle]}>
    <StatusBar
        backgroundColor={statusBarColor || navbarColor}
    />
    {renderScrollView()}
    {renderNavbarBackground()}
    {renderHeaderBackground()}
    {renderHeaderTitle()}
    {renderHeaderForeground()}
    </View>
);
};

export default RNParallax;
