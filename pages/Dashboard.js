import {StyleSheet, Text, View,BackHandler } from 'react-native';
import React,{ useEffect } from 'react';

import ButtonField from '../components/ButtonField';
import storage from '../storage/storage';

const Dashboard = ({navigation}) => {

  useEffect(() => {
    const handleBackPress = () => {
      BackHandler.exitApp();
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, []);

  const Logout=()=>{
    storage.remove('loginInfo');
    navigation.navigate("Login")
  }

  const carInfo=()=>{
    navigation.navigate("carInfo")
  }

  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: 20}}>
        <ButtonField label="Car Data" onPress={carInfo} />
      </View>
      <View style={{marginHorizontal: 20}}>
        <ButtonField label="Logout" onPress={Logout} />
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
