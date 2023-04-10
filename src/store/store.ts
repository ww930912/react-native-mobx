import {homeStore} from '@/store/workbench/home';
import {detailStore} from '@/store/workbench/detail';

/**
 * store 注入
 */
export default function createStore() {
  return {
    homeStore,
    detailStore,
  };
}
