import AsyncStorage from '@react-native-async-storage/async-storage';

const storage = {
  set: (key, value) => {
    return AsyncStorage.setItem(key, value);
  },
  get: key => {
    return AsyncStorage.getItem(key);
  },
  remove: async key => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (exception) {
      return false;
    }
  },
};

export default storage;
