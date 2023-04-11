export const Routes = {
  Home: 'Home',
  Detail: 'Detail',
};

const TOTAL = 42364; //需配置：收集专栏总数
const TRACK_TOTAL = 3566553; //需配置：收集音频总数
const PAGENOTOTAL = Math.ceil(TOTAL / 20); //收集专栏分页总数
export {
  TOTAL,
  PAGENOTOTAL,
  TRACK_TOTAL,
};
