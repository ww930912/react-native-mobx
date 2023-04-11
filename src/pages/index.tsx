import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WeclomePage from '@/pages/workbench/welcome/weclome';
import HomePage from '@/pages/workbench/home';
import DetailPage from '@/pages/workbench/detail';
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
        initialRouteName="WeclomePage"
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="WeclomePage" component={WeclomePage} />
        <Screen name="Home" component={HomePage} />
        <Screen name="Detail" component={DetailPage} />
      </Navigator>
    </NavigationContainer>
  );
};
