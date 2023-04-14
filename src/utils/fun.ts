import { PAGENOTOTAL, TOTAL, TRACK_TOTAL } from '@/assets/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

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
                //   console.error(e);
              }
          } else {
              reject(error);
            //   console.error(error);
          }
      });
  });
};

const getPageNo = async() => {
    //随机从1~分页总数里面取
    const pageNo = Math.floor(Math.random() * PAGENOTOTAL + 1) as unknown as never;
    const pageNoList = (await getData('pageNoList') || []) as unknown as [];
    // console.log('pageNoList---', pageNoList);
    // 如果缓存的个数与分页总数一致
    if (pageNoList.length === PAGENOTOTAL){
        await removeData('pageNoList');
    }
    //包含，则重新随机; 不包含，存入缓存
    if (pageNoList.includes(pageNo)) {
        await getPageNo();
    } else {
        await saveData('pageNoList',[...pageNoList,pageNo]);
        return pageNo;
    }
};

const secondToNum = (times) => {
    let timeNum = '';
    if (times < 10000) {
      timeNum = times;
    } else if (times >= 10000 && times < 100000000) {
      timeNum = Math.floor(times / 1000) / 10 + '万';
    } else if (times >= 100000000){
      timeNum = Math.floor(times / 10000000) / 10 + '亿';
    }
    return timeNum;
};

const secondToDate = (seconds) => {
    var m = Math.floor((seconds / 60 % 60)) < 10 ? '0' + Math.floor((seconds / 60 % 60)) : Math.floor((seconds / 60 % 60));
    var s = Math.floor((seconds % 60)) < 10 ? '0' + Math.floor((seconds % 60)) : Math.floor((seconds % 60));
    return  m + ':' + s;
};

const isIOS = () => {
    return Platform.OS === 'ios';
};



// 获取当前可播放的url
const getPlayUrl = (track) => {
    let url = '';
    if (Platform.OS === 'ios') {
        if (track.play.aac164 ) {
            url = track.play.aac164 || track.play.aac224;
        } else if (track.download.accUrl) {
            url = track.download.accUrl;
        } else {
            url = 'https://images.vmartaw.com/2018/12/29/music.mp3';
        }
    } else {
        if (track.play.playUrl32 ) {
            url = track.play.playUrl32 || track.play.playUrl64;
        } else if (track.download.url) {
            url = track.download.url;
        } else {
            url = 'https://images.vmartaw.com/2018/12/29/music.mp3';
        }
    }
    if (url.indexOf('buy_key') > -1) {
        url = 'https://images.vmartaw.com/2018/12/29/music.mp3';
    }
    return url;
};


//将音频转换成播放音频信息
const arrToPlayTracks = (tracks) => {
    let arr = [];
    tracks.map(e => {
        const url = getPlayUrl(e);
        let artwork = '';
        if (!e.hasOwnProperty('cover')){
            artwork = 'https://image.sredy.cn/timg.jpeg';
        } else {
            if (e.cover.indexOf('dushu.io') > 0 || e.cover.indexOf('sredy.cn') > 0) {
                artwork = e.cover;
            } else {
                artwork = `https://imagev2.xmcdn.com/${e.cover}!op_type=5&upload_type=album&device_type=ios&name=medium`;
            }
        }
        arr.push({
          playtimes: e.playtimes,
          duration: e.duration,
          id: e._id,
          url: url,
          title: e.title,
          artist: e.artist,
          artwork: artwork,
        });
    });
    return arr;
};

const runTime = (progress) => {
    if (isNaN(progress)) {
        return '00:00';
    }
    return secondToDate(progress);
};

const endTime = (duration, progress) => {
    let seconds = duration - progress;
    if (isNaN(seconds)) {
        return '00:00';
    }
    return secondToDate(seconds);
};


export {
    getAlbumToChinese, getTrackToChinese, getPageNo, secondToNum, secondToDate, isIOS, arrToPlayTracks, runTime, endTime,
};


