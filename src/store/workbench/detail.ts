import {makeAutoObservable} from 'mobx';
import { getAlbumById } from '@/api/album';
import TrackPlayer from 'react-native-track-player';
import { arrToPlayTracks } from '@/utils/fun';
import { RootStoreProps } from '@/store/store';

class Detail {
  album: any = null;
  tracks: any[] = [];
  rootStore: RootStoreProps;
  constructor(rootStore: RootStoreProps) {
    this.rootStore = rootStore;
    makeAutoObservable(this, {}, { autoBind:
      true });
  }
  get(id: number) {
    console.log('getDetail-------', id);
    getAlbumById(id).then(res=>{
      const { data } = res.data;
      let allTracks = data.tracks;
        allTracks.map((e, i)=>{
          e.isPlay = i === 0 ? true : false;
          e.select = false;
          e.artist = data.uid && data.uid.nickname;
        });
      if (!data.hasOwnProperty('cover')){
        data.cover = 'https://image.sredy.cn/timg.jpeg';
      } else {
        data.cover = `https://imagev2.xmcdn.com/${data.cover}!op_type=5&upload_type=album&device_type=ios&name=medium`;
      }
      this.album = data;
      this.tracks = allTracks;
      // Note
      const playTracks = arrToPlayTracks(allTracks);
      this.rootStore.palyerStore.playTracks = playTracks;
      this.rootStore.palyerStore.playTrack = playTracks[0];
      //当前页面新增初始化播放信息
      TrackPlayer.add(playTracks);
    })
    ;
  }
}

export default Detail;
