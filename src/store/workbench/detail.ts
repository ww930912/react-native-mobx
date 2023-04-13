import { getAlbumById } from '@/api/album';
import {makeAutoObservable} from 'mobx';

class Detail {
  album: any = null;
  tracks: [] = [];
  constructor() {
    makeAutoObservable(this, {}, { autoBind:
      true });
  }
  get(id: number) {
    console.log('getDetail-------', id);
    getAlbumById(id).then(res=>{
      const { data } = res.data;
      let allTracks = data.tracks;
        allTracks.map(e=>{
          e.isPlay = false;
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
    })
    ;
  }
}

export const detailStore = new Detail();
