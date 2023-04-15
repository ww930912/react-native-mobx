import { ListItemChevron } from '@rneui/base/dist/ListItem/ListItem.Chevron';
import { ContainerWrapper, ListItemWrapper } from './Wrapper';
import { secondToNum, secondToDate, isIOS } from '@/utils/fun';

const  TrackList = (props: any) => {
    return (
        <ContainerWrapper>
            {props.tracks.map((item:any,index:number
                )=><ListItemWrapper key={index} bottomDivider onPress={()=>props.setPlayTrack(item.id)}>
                <ListItemWrapper.Content>
                        <ListItemWrapper.Title numberOfLines={1} style={{ fontSize: 15,lineHeight: 18, width: 360 }}>{item.title}</ListItemWrapper.Title>
                        <ListItemWrapper.Subtitle style={{ fontSize: 14, color: '#ccc', paddingTop: 6, width: 280 }}>时间：{secondToDate(item.duration)} ，累计：{secondToNum(item.playtimes)}次</ListItemWrapper.Subtitle>
                </ListItemWrapper.Content>
                <ListItemChevron name={`${isIOS() ? 'checkmark-circle' : 'check-circle'}`} size={22} style={{marginLeft:90}} color={item.select ? '#0EBDFC' : '#ccc'}/>
            </ListItemWrapper>)}
        </ContainerWrapper>
    );
};

export default TrackList;
