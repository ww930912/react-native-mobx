import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '@/pages/workbench/home';
import DetailScreen from '@/pages/workbench/detail';
import {globalNavigation} from '@/utils/navigation';

const {Navigator, Screen} = createNativeStackNavigator();

export const AppNavigator = () => {
  const navigationRef = React.useRef(null);

  useEffect(() => {
    if (navigationRef) {
      // set globalNavigation ref
      globalNavigation.setNavigationRef(navigationRef.current);
    }
  }, [navigationRef]);

  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Detail" component={DetailScreen} />
      </Navigator>
    </NavigationContainer>
  );
};
