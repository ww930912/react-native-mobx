import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * 设置本地缓存
 *
 * @param key
 * @param value
 */
export const setStorage = async (key, value) => {
  if (!key) {return null;}

  await AsyncStorage.setItem(key, value && typeof value === 'object' ? JSON.stringify(value) : value || '');
};

/**
 * 获取本地缓存
 *
 * @param key
 * @param type
 */
export const getStorage = async (key, type = 'json') => {
  if (!key) {return null;}

  let result = await AsyncStorage.getItem(key);

  if (type === 'json') {
    try {
      result = JSON.parse(result);
    } catch (error) {
      console.warn(error);
    }
  }

  return result as any;
};

/**
 * 清理所有缓存
 */
export const clearStorage = async () => await AsyncStorage.clear();

/**
 * 移除缓存
 */
export const removeItem = AsyncStorage.removeItem;

/**
 * 批量移除缓存
 */
export const multiRemove = AsyncStorage.multiRemove;

/**
 * 移除全部缓存
 */
export const clearAll = AsyncStorage.clear;
