import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {SearchBarDefaultProps} from '@rneui/base';

export type WelcomeProps = {
  navigation: NavigationProp<ParamListBase>;
};

export interface BookSearchBarProps extends SearchBarDefaultProps {}
