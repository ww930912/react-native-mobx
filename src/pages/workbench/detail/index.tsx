
import {FC, useEffect} from 'react';
import { ActivityIndicator } from 'react-native';
import {observer} from 'mobx-react';
import TrackPlayer from 'react-native-track-player';
import {useStore} from '@/store';
import {globalNavigation} from '@/utils/navigation';
import {DetailProps} from '@/typings/workbench/detail';
import { MusicWrapper, PlayerWrapper } from './Wrapper';
import ParallaxHeader, { IS_IPHONE_X, NAV_BAR_HEIGHT } from '@/components/ParallaxHeader';
import AlbumInfo from '@/components/AlbumInfo';
import NavBar from '@/components/NavBar';
import TrackList from '@/components/TrackList';
import Player from '@/components/Player';
import ProgressBar from '@/components/ProgressBar';


const Detail: FC<Partial<DetailProps>> = props => {
  const {rootStore} = useStore();
  const { get, album, tracks } = rootStore.detailStore;
  const { playTrack, setPlayTrack } = rootStore.palyerStore;
  useEffect(() => {
    const { params } = props.route;
    get(params.id);
  }, []);
  // console.log('album-------', album);
  // console.log('tracks-------', tracks);
  return (
    <MusicWrapper>
      <ParallaxHeader
        backgroundColor="#0EBDFC"
        headerMinHeight={NAV_BAR_HEIGHT}
        headerMaxHeight={IS_IPHONE_X ? 200 : 180}
        extraScrollHeight={20}
        navbarColor="rgb(9, 142, 206)"
        title={album ?  <AlbumInfo {...album} len={tracks.length}/> : <ActivityIndicator/>}
        titleStyle={{color: 'white',fontWeight: 'bold',fontSize: 18}}
        renderNavBar={() => <NavBar
            title={album && album.title ? album.title : ''}
            shareTip={()=>{}}
          />}
        renderContent={() => <TrackList
            tracks={tracks}
            setPlayTrack={setPlayTrack}
            // album={[1,2,3,4]}
          //   goPlay={(track)=>{
          //     console.log('播放视频');
          //     console.log(track);
          //     if (track['play']['m3u8'].length === 0) {
          //       this.updateTrack(track._id + '');
          //       return;
          //     }
          //     if (playBack === TrackPlayer.STATE_PLAYING) {
          //       TrackPlayer.pause();
          //     }
          //     NavigationUtil.goPage({'play':track}, 'PlayPage');
          //   }}
          //   playChange={(trackId)=>{
          //     console.log('播放切换');
          //     this.updateTrack(trackId+'');
          //   }}
          />}
        containerStyle={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        innerContainerStyle={{ flex: 1 }}
        alwaysShowTitle={false}
        alwaysShowNavBar={false}
        // scrollViewProps={{
        //   onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
        //   onScrollEndDrag: () => console.log('onScrollEndDrag'),
        // }}
      />
      { playTrack &&
              <PlayerWrapper>
                  <ProgressBar playTrack={playTrack} playProgress={0}/>
                  <Player
                      // playState={palyState}
                      showOverlay={()=>{}}
                      play={playTrack}
                      back={()=>{}}
                      forward={()=>{}}
                      playBack={()=>{}}
                      nickname={album.uid.nickname}
                  />
              </PlayerWrapper>
            }
    </MusicWrapper>
  );
};
export default observer(Detail);
