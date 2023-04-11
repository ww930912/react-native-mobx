import {createContext, useContext} from 'react';
import {useLocalObservable} from 'mobx-react';
import { configure } from 'mobx';
import createStore from './store';

configure({ enforceActions: 'never' });

type StoreType = ReturnType<typeof createStore>;

const storeContext = createContext<StoreType>(null);

export const StoreProvider = ({children}: any) => {
  const {Provider} = storeContext;
  const store = useLocalObservable(createStore);

  return <Provider value={store}>{children}</Provider>;
};

/**
 * 外部引用
 */
export const useStore = () => {
  const store = useContext(storeContext);
  return store;
};
