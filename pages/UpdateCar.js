import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import InputField from '../components/InputField';
import {CarContext} from '../components/CarContext';
import ButtonField from '../components/ButtonField';
import { useToast } from 'react-native-toast-notifications';

const UpdateCar = ({updateIndex,setUpdateCarModal}) => {
  const {carData, setCarData} = useContext(CarContext);
  const toast = useToast();
  const [updateData, setupdateData] = useState({})

  useEffect(() => {
    
    setupdateData({
        carCategorires:carData[updateIndex].carCategorires,
        carColor:carData[updateIndex].carColor,
        carMake:carData[updateIndex].carMake,
        carModel:carData[updateIndex].carModel,
        carRegNo:carData[updateIndex].carRegNo,
    })
    
  }, [carData])

  
  const handleUpdate=()=>{
    const updatedCar = [...carData];
    updatedCar[updateIndex] = { ...carData[updateIndex], ...updateData };

    // Update the state with the new array
    setCarData(updatedCar);
    toast.show('Car Updated SuccessFully', {
        duration: 1000,
        type: 'success',
      });
      setTimeout(() => {
        
          setUpdateCarModal(false)
      }, 1500);
  }
  

  return (
    <View >
         
           <View style={{marginHorizontal: 20}}>
        <ButtonField label="Go Back" onPress={() => setUpdateCarModal(false)} />
      </View>
      <View style={{marginTop:10}}>
        <InputField
        label="Car Color"
        value={updateData.carColor} 
        onChangeText={(text)=>setupdateData({...updateData,carColor:text})}
        />
      </View>
      <View>
        <InputField 
         label="Car Model"
        value={updateData.carMake}
        
         onChangeText={(text)=>setupdateData({...updateData,carMake:text})}
        />
      </View>
      <View>
        <InputField 
          label="Car Make"
        value={updateData.carModel} 
         onChangeText={(text)=>setupdateData({...updateData,carModel:text})}
        />
      </View>
      <View>
        <InputField 
         label="Car Registration #"
        value={updateData.carRegNo} 
         onChangeText={(text)=>setupdateData({...updateData,carRegNo:text})}
        />
      </View>
      <View>
            <ButtonField label="Update Car" onPress={handleUpdate} />
          </View>
    </View>
  );
};

export default UpdateCar;

const styles = StyleSheet.create({});
