import AsyncStorage from '@react-native-async-storage/async-storage';

const STORE_KEY = 'UserData';

// function to store user data
export const storeData = async data => {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem(STORE_KEY, jsonValue);
  } catch (e) {
    console.error('Error storing data: ', e);
  }
};

// function to retrieve user data
export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error retrieving data: ', e);
  }
};
