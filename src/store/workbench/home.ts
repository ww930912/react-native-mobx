import { getAlbumList } from '@/api/album';
import { getConfig } from '@/api/config';
import { AlbumProps } from '@/typings/workbench/home';
import { getPageNo } from '@/utils/fun';
import {makeAutoObservable} from 'mobx';

class Home {
  pageNo: number =  1;
  blurImg: string = 'https://images.vmartaw.com/2019/12/10/web.png';
  bookList: AlbumProps [] = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind:
       true });
  }

  async get(page) {
    this.pageNo = await getPageNo();
    console.log('get-------', this.pageNo);
    getAlbumList({pageNo: page ? page : this.pageNo, pageSize: 20}).then(res=>{
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
        this.bookList = this.pageNo === 1 ? data : [...this.bookList, ...data];
      }
    });
  }

  getConfig() {
    getConfig(1).then(res=>{
      const { success, data } = res.data;
      if (success) {
        console.log('config---', data);
      }
    });
  }

  setBlurImg(index: number) {
    this.blurImg = this.bookList[index].cover === 'https://image.sredy.cn/nodata.png' ? 'https://images.vmartaw.com/2019/12/10/web.png' : this.bookList[index].cover;
  }

  addAlbumList(index: number) {
    if (index > 0 && (index + 1) % 20 === 0  && this.bookList.length <= (index + 1)) {
      this.pageNo += 1;
      this.get(this.pageNo);
    }
  }
}

export const homeStore = new Home();
