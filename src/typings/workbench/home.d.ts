import {NavigationProp, ParamListBase} from '@react-navigation/native';

export type HomeProps = {
  navigation: NavigationProp<ParamListBase>;
};

export type AlbumProps = {
  _id: number
  title: string
  showTagList: []
  cover: string
}
