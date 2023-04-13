import {makeAutoObservable} from 'mobx';
import { RootStoreProps } from '@/store/store';

class Player {
  playTrack: any = null;
  playTracks: any[] = [];
  rootStore: RootStoreProps;
  constructor(rootStore: RootStoreProps) {
    this.rootStore = rootStore;
    makeAutoObservable(this, {}, { autoBind:
       true });
  }
  setPlayTrack(index:number) {
    this.playTrack = this.playTracks[index];
    const newTracks = this.rootStore.detailStore.tracks; // note
    newTracks.map((item:any, idx: number)=>{
      if (index === idx) {
        item.isPlay = !item.isPlay;
      } else {
        item.isPlay = false;
      }
    });
    this.rootStore.detailStore.tracks = newTracks; // note
  }
}

export default Player;
