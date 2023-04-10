import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {Routes} from '@/assets/config';

/**
 * 导航 navigation 类型定义
 */
export interface BNavigation extends NavigationProp<ParamListBase> {
  replace?: (route: string) => void;
  popToTop?: () => void;
  pop?: () => void;
  push?: (route: string, params?: object) => void;
}
/**
 * 全局导航器
 */
export const globalNavigation = {
  navigation: null as unknown as BNavigation,
  navigationRef: null as any,

  setNavigation(navigation: BNavigation) {
    this.navigation = navigation;
  },

  setNavigationRef(navigationRef: null) {
    this.navigationRef = navigationRef;
  },

  goTop() {
    if (!this.navigation) {
      return;
    }
    this.navigation.canGoBack() && this.navigation.popToTop();
    this.navigation.replace(Routes.Home);
  },

  goTo(route: any, params: any) {
    if (!this.navigation) {
      return;
    }
    this.navigation.navigate(route, params);
  },

  goReplace(route: any) {
    if (!this.navigation) {
      return;
    }
    this.navigation.replace(route);
  },

  goBack() {
    if (!this.navigation) {
      return;
    }
    this.navigation.canGoBack() && this.navigation.goBack();
  },
};
