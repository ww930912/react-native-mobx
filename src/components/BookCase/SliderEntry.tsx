import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './SliderEntryStyle';
import {Image} from '@rneui/base';
import {globalNavigation} from '@/utils/navigation';

const SliderEntry = (props: any) => {
  const {
    data: {_id, title, showTagList, cover},
    even,
  } = props;
  const uppercaseTitle = title ? (
    <Text
      style={[styles.title, even ? styles.titleEven : {}]}
      numberOfLines={1}>
      {title.toUpperCase()}
    </Text>
  ) : (
    false
  );
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.slideInnerContainer}
      onPress={() => {
        globalNavigation.goTo('MusicDetailPage', {id: _id});
      }}>
      <View style={styles.shadow} />
      <View
        style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
        <Image
        source={{uri: cover}}
        style={styles.image}
        resizeMode="cover"
        PlaceholderContent={<ActivityIndicator />}
      />
        <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
      </View>
      <View
        style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
        {uppercaseTitle}
        <Text
          style={[styles.subtitle, even ? styles.subtitleEven : {}]}
          numberOfLines={2}>
          {showTagList || '学习'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SliderEntry;
