import {FC, useEffect} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {observer} from 'mobx-react';
import {Routes} from '@/assets/config';
import {HomeProps} from '@/typings/workbench/home';
import {globalNavigation} from '@/utils/navigation';
import {useStore} from '@/store';
import BlurBackground from '@/components/BlurBackground';

const HomeWrapper = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const ButtonWrapper = styled.Button``;

const Home: FC<Partial<HomeProps>> = props => {
  const {navigation} = props;
  const {homeStore} = useStore();
  useEffect(() => {
    // set globalNavigation
    globalNavigation.setNavigation(navigation);
  }, [navigation]);
  return (
    <HomeWrapper>
      <BlurBackground url="https://images.vmartaw.com/2019/12/10/web.png" />
      <Text>Home: {homeStore.time}</Text>
      <ButtonWrapper
        onPress={() => navigation.navigate(Routes.Detail, {id: 1})}
        title="Jump"
      />
    </HomeWrapper>
  );
};
export default observer(Home);
