import { Platform } from 'react-native';
import { ContainerWrapper, StatusBarWrapper, NavBarWrapper,
  IconWrapper, TitleWrapper } from './Wrapper';
import { globalNavigation } from '@/utils/navigation';

const  NavBar = (props:{title:string, shareTip: Function}) => {
    return (
        <ContainerWrapper>
          <StatusBarWrapper/>
          <NavBarWrapper>
            <IconWrapper type="ionicon" size={25}
              name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'}
              color="#fff" underlayColor="transparent"
              onPress={()=>{
                globalNavigation.goBack();
              }}
            />
            <TitleWrapper numberOfLines={1}>{props.title}</TitleWrapper>
            {/* <IconWrapper type="ionicon" size={25}
              name={Platform.OS === 'ios' ? 'ios-share' : 'md-share' }
              color="#fff" underlayColor="transparent"
              onPress={props.shareTip}
            /> */}
          </NavBarWrapper>
        </ContainerWrapper>
    );
};
export default NavBar;
