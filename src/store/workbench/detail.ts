import {makeAutoObservable} from 'mobx';

class Detail {
  time: string = new Date().toString();
  constructor() {
    makeAutoObservable(this);
  }

  setTime(time: string) {
    this.time = time;
  }
}

export const detailStore = new Detail();
