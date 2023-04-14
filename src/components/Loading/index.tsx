import { observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import { StyleSheet, View, Modal, ActivityIndicator } from 'react-native';

export const bLoading = observable({
  isLoading: false,
});

export const setLoading = flag => {
  bLoading.isLoading = flag;
};
export default observer(function BLoading() {
  return (
    <Modal animationType={'fade'} visible={bLoading.isLoading} transparent hardwareAccelerated style={styles.top}>
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color={'#0EBDFC'} />
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  top: {
    elevation: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  horizontal: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 10,
  },
});
