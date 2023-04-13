import {makeAutoObservable} from 'mobx';
import Carousel from 'react-native-snap-carousel';
import { getAlbumList } from '@/api/album';
import { getConfig } from '@/api/config';
import { AlbumProps } from '@/typings/workbench/home';
import { getPageNo } from '@/utils/fun';
import { RootStoreProps } from '@/store/store';

class Home {
  pageNo: number =  1;
  searchPage: number = 1;
  blurImg: string = 'https://images.vmartaw.com/2019/12/10/web.png';
  snapIndex: number = 0;
  carousel: Carousel<any> = null;
  searchText: string = '';
  bookList: AlbumProps [] = [];
  beforeBookList: AlbumProps [] = [];
  isDouYin: boolean = false;
  isRead: boolean = false;
  isSafe: boolean = false;
  rootStore: RootStoreProps;

  constructor(rootStore: RootStoreProps) {
    this.rootStore = rootStore;
    makeAutoObservable(this, {}, { autoBind:
       true });
  }

  async get(flag = false) {
    let pageNo = 1;
    if (this.searchText) {
      if (flag) {
        pageNo = 1;
      } else {
        this.searchPage += 1;
        pageNo = this.searchPage;
      }
    } else {
      pageNo = await getPageNo() as unknown as number;
    }
    console.log('get-------', pageNo, 'title', this.searchText);
    getAlbumList({pageNo, pageSize: 20, title: this.searchText}).then(res=>{
      const { success, data } = res.data;
      if (success) {
        data.map(e => {
          let cover = '';
          let tagNames = [];
          if (!e.hasOwnProperty('cover')){
            cover = 'https://image.sredy.cn/nodata.png';
          } else {
            cover = `https://imagev2.xmcdn.com/${e.cover}`;
          }
          e.cover = cover;
          e.showTagList.map(tag=>tagNames.push(tag.name));
          e.showTagList = tagNames.join(',');
        });
        if (this.searchText) {
          if (flag) {
            this.bookList = data;
            this.carousel.snapToItem(0);
          } else {
            this.bookList = [...this.bookList, ...data];
          }
        } else {
          this.bookList = [...this.bookList, ...data];
          this.beforeBookList = this.bookList;
        }
      }
    });
  }

  getConfig() {
    getConfig(1).then(res=>{
      const { success, data } = res.data;
      if (success) {
        this.isDouYin = data.isDouYin;
        this.isRead = data.isRead;
        this.isSafe = data.isSafe;
      }
    });
  }

  setBlurImg(index: number) {
    this.blurImg = this.bookList[index].cover === 'https://image.sredy.cn/nodata.png' ? 'https://images.vmartaw.com/2019/12/10/web.png' : this.bookList[index].cover;
    if (!this.searchText) {this.snapIndex = index;}
  }

  addAlbumList(index: number) {
    if (index > 0 && (index + 1) % 20 === 0  && this.bookList.length <= (index + 1)) {
      this.get(false);
    }
  }

  setSearchText(txt: string) {
    this.searchText = txt;
  }

  setBeforeBookList() {
    this.searchText = '';
    this.searchPage = 1;
    this.bookList = this.beforeBookList;
    setTimeout(()=>this.carousel && this.carousel.snapToItem(this.snapIndex),500);
  }

  setCarousel(c: any) {
    this.carousel = c;
  }
}

export default Home;
