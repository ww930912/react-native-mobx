import { clearAll, getStorage, setStorage, removeItem } from './storage';

const userTokenKey = 'LG-USER-Token-';
export const apiPrefix = 'LG-API-PREFIX';

// 缓存当前枚举数据
const scumKey = 'LG-USER-ENTERPRISE-SCUM-';
// 获取枚举key
const getScumKey = code => scumKey + code.toUpperCase();

/**
 * 退出清理用户缓存
 */
export const clearUser = async () => await clearAll();

/**
 * 获取用户token
 */
export const getToken = async () => await getStorage(userTokenKey, 'string');

/**
 * 设置用户token
 * @param user
 */
export const setToken = async token => await setStorage(userTokenKey, token);

/**
 * 设置api地址
 */

 export const setApiPrefix = async url => await setStorage(apiPrefix, url);

 /**
 * 获取api地址
 */

export const getApiPrefix = async () => await getStorage(apiPrefix, 'string');

/**
 * 清除用户token
 * @param code
 * @returns
 */
 export const clearToken = async () => await removeItem(userTokenKey);

/**
 * 获取枚举缓存
 *
 * @param code
 */
export const getScum = async code => {
  if (!code) {return null;}

  const result = await getStorage(getScumKey(code));

  // 10分钟
  return result && result.expires && result.data && Date.now() - result.expires < 600000 ? result.data : null;
};

/**
 * 设置枚举
 * @param code 枚举属性
 * @param data
 */
export const setScum = async (code, data) => {
  if (!code) {return null;}

  await setStorage(getScumKey(code), { expires: Date.now(), data });
};
