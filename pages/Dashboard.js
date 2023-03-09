import {StyleSheet, Text, View,BackHandler } from 'react-native';
import React,{ useEffect,useMemo,useState } from 'react';

import ButtonField from '../components/ButtonField';
import storage from '../storage/storage';
import { CarContext } from '../components/CarContext';
import InputField from '../components/InputField';
import CarPage from './CarPage';

const Dashboard = ({navigation}) => {

  const [ carData, setCarData] = useState([]);
  const [addCar, setAddCar] = useState(false)


  const providerValue = useMemo(
    () => ({ carData, setCarData }),
    [carData, setCarData]
  );


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

  

  return (
    <CarContext.Provider value={providerValue}>
      {
        addCar ?
        <CarPage 
        setAddCar={setAddCar}
        />
        :
        <View style={styles.container}>
        <View style={styles.detailCardContainer}>
        <Text style={styles.displayText}>No of Cars</Text>
            <Text style={styles.displayText}>{carData && carData.length}</Text>
            </View>
          <View style={{marginHorizontal: 20}}>
            <ButtonField label="Car Data" onPress={()=>setAddCar(true)} />
          </View>
          <View style={{marginHorizontal: 20}}>
            <ButtonField label="Logout" onPress={Logout} />
          </View>
        </View>
      }
     
   
    </CarContext.Provider>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  detailCardContainer: {
    
    height:100,
    backgroundColor: "#fff",
    marginHorizontal: 30,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    justifyContent: 'center',
    alignItems:'center'
  },
  displayText:{
    fontWeight:'bold',
    fontSize:20,
  }
});
