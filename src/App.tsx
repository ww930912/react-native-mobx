/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type {FC} from 'react';

import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StoreProvider} from '@/store';
import {AppNavigator} from '@/pages';

const App: FC = () => {
  return (
    <StoreProvider>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </StoreProvider>
  );
};

export default App;
