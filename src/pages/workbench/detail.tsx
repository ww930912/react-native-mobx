import {FC} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {observer} from 'mobx-react';
import {useStore} from '@/store';
import {globalNavigation} from '@/utils/navigation';
import {DetailProps} from '@/typings/workbench/detail';

const DetailWrapper = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const ButtonWrapper = styled.Button``;

const Detail: FC<Partial<DetailProps>> = props => {
  const {detailStore} = useStore();
  return (
    <DetailWrapper>
      <Text>Detail: {detailStore.time}</Text>
      <ButtonWrapper
        onPress={() => {
          props.navigation.goBack();
          globalNavigation.goBack();
        }}
        title="GoBack"
      />
      <ButtonWrapper
        onPress={() => detailStore.setTime(new Date().toString())}
        title="setTime"
      />
    </DetailWrapper>
  );
};
export default observer(Detail);
