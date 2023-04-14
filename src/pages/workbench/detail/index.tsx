
import {FC, useEffect} from 'react';
import { ActivityIndicator } from 'react-native';
import {observer} from 'mobx-react';
import {useStore} from '@/store';
import {DetailProps} from '@/typings/workbench/detail';
import { MusicWrapper, PlayerWrapper } from './Wrapper';
import ParallaxHeader, { IS_IPHONE_X, NAV_BAR_HEIGHT } from '@/components/ParallaxHeader';
import AlbumInfo from '@/components/AlbumInfo';
import NavBar from '@/components/NavBar';
import TrackList from '@/components/TrackList';
import Player from '@/components/Player';
import ProgressBar from '@/components/ProgressBar';
import TrackPlayer from 'react-native-track-player';


const Detail: FC<Partial<DetailProps>> = () => {
  const {rootStore} = useStore();
  const { album } = rootStore.detailStore;
  const { playTrack, setPlayTrack, playTracks } = rootStore.palyerStore;
  const destory = async () => {
    await TrackPlayer.pause();
    setTimeout(() => TrackPlayer.reset(), 1000);
  };
  useEffect(()=>{
    return () => {
      destory();
    };
  }, []);
  return (
    <MusicWrapper>
      <ParallaxHeader
        backgroundColor="#0EBDFC"
        headerMinHeight={NAV_BAR_HEIGHT}
        headerMaxHeight={IS_IPHONE_X ? 200 : 180}
        extraScrollHeight={20}
        navbarColor="rgb(9, 142, 206)"
        title={album ?  <AlbumInfo {...album} len={playTracks.length}/> : <ActivityIndicator/>}
        titleStyle={{color: 'white',fontWeight: 'bold',fontSize: 18}}
        renderNavBar={() => <NavBar
            title={album && album.title ? album.title : ''}
            shareTip={()=>{}}
          />}
        renderContent={() => <TrackList
            tracks={playTracks}
            setPlayTrack={setPlayTrack}
          />}
        containerStyle={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        innerContainerStyle={{ flex: 1 }}
        alwaysShowTitle={false}
        alwaysShowNavBar={false}
      />
      { playTrack &&
              <PlayerWrapper>
                  <ProgressBar/>
                  <Player />
              </PlayerWrapper>
            }
    </MusicWrapper>
  );
};
export default observer(Detail);
