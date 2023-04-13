import { ListItemChevron } from '@rneui/base/dist/ListItem/ListItem.Chevron';
import { ContainerWrapper, ListItemWrapper } from './Wrapper';
import { secondToNum, secondToDate } from '@/utils/fun';

const  TrackList = (props: any) => {
    return (
        <ContainerWrapper>
            {props.tracks.map((item:any,index:number
                )=><ListItemWrapper key={index} bottomDivider onPress={()=>props.setPlayTrack(index)}>
                <ListItemWrapper.Content>
                        <ListItemWrapper.Title numberOfLines={1} style={{ fontSize: 15,lineHeight: 18, width: 360 }}>{item.title}</ListItemWrapper.Title>
                        <ListItemWrapper.Subtitle style={{ fontSize: 14, color: '#ccc', paddingTop: 6, width: 280 }}>播放时间：{secondToDate(item.duration)} ，播放累计：{secondToNum(item.playtimes)}次</ListItemWrapper.Subtitle>
                </ListItemWrapper.Content>
                <ListItemChevron name="checkmark-circle" size={22} style={{marginLeft:90}} color={item.isPlay ? '#0EBDFC' : '#ccc'}/>
            </ListItemWrapper>)}
        </ContainerWrapper>
    );
};

export default TrackList;
