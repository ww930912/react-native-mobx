import {FC, useEffect} from 'react';
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

const HomeWrapper = styled.SafeAreaView`
  flex: 1;
`;

const Home: FC<Partial<HomeProps>> = () => {
  const { homeStore} = useStore();
  const { blurImg, setBlurImg, addAlbumList, bookList, get, getConfig } = homeStore;
  useEffect(()=>{
    getConfig();
    get();
  }, []);
  return (
    <HomeWrapper>
      <BlurBackground url={blurImg} />
      <SearchBar
        showLoading={false}
        value={''}
        // searchChange={searchChange}
        // searchSubmit={searchInfo}
        // searchCancel={loadCancleData}
      />
      <Read />
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
