import { ContainerWrapper, ListItemWrapper } from './Wrapper';
import { secondToNum, secondToDate } from '@/utils/fun';

const  TrackList = (props: any) => {
    return (
        <ContainerWrapper>
            {props.tracks.map((item:any,index:number
                )=><ListItemWrapper key={index} bottomDivider>
            <ListItemWrapper.Content>
                <ListItemWrapper.Title style={{ fontSize: 15,lineHeight: 18 }}>{item.title}</ListItemWrapper.Title>
                <ListItemWrapper.Subtitle style={{ fontSize: 14, color: '#ccc', paddingTop: 10 }}>播放时间：{secondToDate(item.duration)} ，播放累计：{secondToNum(item.playtimes)}次</ListItemWrapper.Subtitle>
            </ListItemWrapper.Content>
            </ListItemWrapper>)}
        </ContainerWrapper>
    );
};

export default TrackList;
