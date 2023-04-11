import { post } from '@/utils/initHttp';

export const getAlbumList = (data: any) => post({ url: `/api/sredy/getAlbumList?pageNo=${data.pageNo}`, data });

