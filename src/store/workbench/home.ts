import {makeAutoObservable} from 'mobx';

class Home {
  time: string = new Date().toString();
  constructor() {
    makeAutoObservable(this);
  }

  setTime(time: string) {
    this.time = time;
  }
}

export const homeStore = new Home();
