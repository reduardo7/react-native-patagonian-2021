// @ts-ignore
import CacheStore from 'react-native-cache-store';

const tryGet = async <T = any>(key: string, valueGetter: () => Promise<T>): Promise<T> => {
  const value = await CacheStore.get(key);

  if (value) {
    return JSON.parse(value);
  } else {
    const newValue = await valueGetter();
    const v = JSON.stringify(newValue);
    await CacheStore.set(key, v);
    return newValue;
  }
};

export default {
  tryGet,
};
