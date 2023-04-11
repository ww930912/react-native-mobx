import { post } from '@/utils/initHttp';

export const getConfig = (id: number) => post({ url: `/api/sredy/getConfig?id=${id}`, data: { id } });
