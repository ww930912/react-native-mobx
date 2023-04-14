import TrackPlayer, { State } from 'react-native-track-player';
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

  updateList(trackId:number, state: State) {
    const newTracks = [...this.playTracks];
    newTracks.map((item:any)=>{
      if (trackId === item.id) {
        item.select = state === State.Playing ? true : false;
      } else {
        item.select = false;
      }
    });
    this.playTracks = newTracks;
  }

  clearList() {
    const newTracks = [...this.playTracks];
    newTracks.map((item:any)=>{
        item.select = false;
    });
    this.playTracks = newTracks;
  }

  async setPlayTrack(id:number) {
    const playTrack = this.playTracks.find(e=> +e.id === id);
    const playTrackIndex = this.playTracks.findIndex(e=> +e.id === id);
    this.playTrack = playTrack;
    await TrackPlayer.skip(playTrackIndex);
    await TrackPlayer.play();
  }
}

export default Player;
