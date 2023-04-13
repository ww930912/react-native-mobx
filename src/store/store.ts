import HomeStore from '@/store/workbench/home';
import DetailStore from '@/store/workbench/detail';
import PlayerStore from '@/store/workbench/player';


export interface RootStoreProps {
  homeStore: HomeStore;
  detailStore: DetailStore;
  palyerStore: PlayerStore;
}
/**
 * RootStore 模式
 */
class RootStore implements RootStoreProps{
  homeStore: HomeStore;
  detailStore: DetailStore;
  palyerStore: PlayerStore;
  constructor() {
      this.homeStore = new HomeStore(this);
      this.detailStore = new DetailStore(this);
      this.palyerStore = new PlayerStore(this);
  }
}
/**
 * store 注入
 */
export default function createStore() {
  return {
    rootStore: new RootStore(),
  };
}
export const rootStore = RootStore;
