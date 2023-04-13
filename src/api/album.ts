import { post } from '@/utils/initHttp';

export const getAlbumList = (data: any) => post({ url: `/api/sredy/getAlbumList?pageNo=${data.pageNo}&title=${data.title}`, data });
export const getAlbumById = (id: number) => post({ url: `/api/sredy/getAlbumForId?id=${id}`, data: {id} });

