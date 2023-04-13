import {FC, useEffect, useState} from 'react';
import styled from 'styled-components/native';
import { observer } from 'mobx-react';
import {HomeProps} from '@/typings/workbench/home';
import BlurBackground from '@/components/BlurBackground';
import SearchBar from '@/components/SearchBar';
import Read from '@/components/Read';
import FooterIntro from '@/components/FooterIntro';
import BookCase from '@/components/BookCase';
import {useStore} from '@/store';
import { getAlbumToChinese, getTrackToChinese } from '@/utils/fun';
import TrackPlayer, { Capability, Event } from 'react-native-track-player';
const HomeWrapper = styled.SafeAreaView`
  flex: 1;
`;

const Home: FC<Partial<HomeProps>> = () => {
  const { rootStore} = useStore();
  const { blurImg, setBlurImg, addAlbumList, bookList, get, getConfig, isRead, setSearchText, setBeforeBookList } = rootStore.homeStore;
  // const { setPlayState } = rootStore.palyerStore;
  const [ val, setVal ] = useState('');
  // 播放器回调
  const initPlayEvent = async() => {
    TrackPlayer.addEventListener(Event.RemoteStop, () => {
        console.log('播放终止---------home');
        TrackPlayer.reset();
    });

    TrackPlayer.addEventListener(Event.RemotePlay, async() => {
      console.log('播放---------home');
      await TrackPlayer.play();
    //   const { playTrack } = this.props;
    //   this.updateTrackListState(playTrack.id);
    });

    TrackPlayer.addEventListener(Event.RemotePause, async() => {
      console.log('暂停---------home');
      await TrackPlayer.pause();
    //   const { playTrack } = this.props;
    //   this.updateTrackListState(playTrack.id);
    });

    TrackPlayer.addEventListener(Event.RemoteNext, async() => {
        console.log('前进---------home');
        try {
            await TrackPlayer.skipToNext();
        } catch (_) {
            // const { playTracks } = this.props;
            // await TrackPlayer.skip(playTracks[0].id);
        }
    });

    TrackPlayer.addEventListener(Event.RemotePrevious, async() => {
        console.log('后退---------home');
        try {
            await TrackPlayer.skipToPrevious();
        } catch (_) {
            // const { playTracks } = this.props;
            // await TrackPlayer.skip(playTracks[playTracks.length - 1].id);
        }
    });

    TrackPlayer.addEventListener(Event.PlaybackState, ({state}) => {
        // state 的状态 播放中 3 暂停 2
        // const { setPlayState } = this.props;
        // setPlayState(state);
        console.log('播放状态---', state);
    });

    TrackPlayer.addEventListener(Event.PlaybackTrackChanged, async() => {
        const trackId = await TrackPlayer.getCurrentTrack();
        console.log('播放改变---------------------start----home---', trackId);
        // this.updateTrackListState(trackId);
        console.log('播放改变---------------------end----home');
    });

    TrackPlayer.addEventListener(Event.RemoteSeek, async (data) => {
        console.log('播放进度条移动---------home');
        await TrackPlayer.seekTo(data.position);
        // const { playBack } = this.props;
        // if (playBack === TrackPlayer. STATE_PAUSED) {
        //     await TrackPlayer.pause();
        // } else if (playBack == TrackPlayer.STATE_PLAYING) {
        //     await TrackPlayer.pause();
        //     this.time = setTimeout(async ()=>{
        //         await TrackPlayer.play();
        //         this.time && clearTimeout(this.time);
        //     },100);
        // }
    });
  };
  // 初始化播放器
  const initPlayer =  async() => {
    // 注册播放器
    await TrackPlayer.registerPlaybackService(() =>initPlayEvent);
    // 初始化播放器
    await TrackPlayer.setupPlayer();
    // 播放器默认配置
    await TrackPlayer.updateOptions({
        stoppingAppPausesPlayback: false,
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.Stop,
          Capability.SeekTo,
      ],
        compactCapabilities: [
          Capability.Pause,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.Stop,
          Capability.SeekTo,
        ],
    });
  };
  useEffect(()=>{
    getConfig();
    get(true);
    initPlayer();
  }, []);
  return (
    <HomeWrapper>
      <BlurBackground url={blurImg} />
      <SearchBar
        showLoading={false}
        value={val}
        onChangeText={value => setVal(value)}
        onSubmitEditing={()=>{
          setSearchText(val);
          get(true);
        }}
        onClear={()=>setBeforeBookList()}
      />
      { isRead && <Read /> }
      <FooterIntro albums={getAlbumToChinese()} tracks={getTrackToChinese()} />
      <BookCase
        bookList={bookList}
        snapToItem={index=>addAlbumList(index)}
        beforeSnapToItem={index=>setBlurImg(index)}
      />
      {/*
      <Shake />
      {isDouYin && <DouYin />}
      <BookCase
        onRef={bookcase => (this.bookcase = bookcase)}
        bookList={bookList}
        snapToItem={snapToItem}
        beforeSnapToItem={beforeSnapToItem}
      />
      <FooterIntro albums={getAlbumToChinese()} tracks={getTrackToChinese()} />
      <Toast onRef={toast => (this.toast = toast)} /> */}
    </HomeWrapper>
  );
};
export default observer(Home);
