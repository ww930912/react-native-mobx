import { PAGENOTOTAL, TOTAL, TRACK_TOTAL } from '@/assets/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getAlbumToChinese = () => {
    return `${(TOTAL / 10000).toFixed(1)}万`;
};

const getTrackToChinese = () => {
    return `${(TRACK_TOTAL / 10000).toFixed(1)}万`;
};


const removeData = (key) => {
    if (!key) {return '';}
    return AsyncStorage.removeItem(key);
};

const saveData = (key, data) => {
    if (!key || !data) {return '';}
    return AsyncStorage.setItem(key, JSON.stringify(data));
};

const getData = (key) => {
  return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key, (error, result) => {
          if (!error) {
              try {
                  resolve(JSON.parse(result));
              } catch (e) {
                  reject(e);
                  console.error(e);
              }
          } else {
              reject(error);
              console.error(error);
          }
      });
  });
};

const getPageNo = async() => {
    //随机从1~分页总数里面取
    const pageNo = Math.floor(Math.random() * PAGENOTOTAL + 1) as unknown as never;
    const pageNoList = (await getData('pageNoList') || []) as unknown as [];
    console.log('pageNoList---', pageNoList);
    // 如果缓存的个数与分页总数一致
    if (pageNoList.length === PAGENOTOTAL){
        console.log('总数一致，则清空');
        await removeData('pageNoList');
    }
    //包含，则重新随机; 不包含，存入缓存
    if (pageNoList.includes(pageNo)) {
        console.log('包含，则重新随机');
        getPageNo();
    } else {
        console.log('不包含，存入缓存');
        await saveData('pageNoList',[...pageNoList,pageNo]);
        console.log(pageNo);
        return pageNo;
    }
};


export {
    getAlbumToChinese, getTrackToChinese, getPageNo,
};


