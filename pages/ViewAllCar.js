import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import ButtonField from '../components/ButtonField';
import {CarContext} from '../components/CarContext';
import {useToast} from 'react-native-toast-notifications';
import UpdateCar from './UpdateCar';

const ViewAllCar = ({setViewCarPage}) => {
  const toast = useToast();
  const {carData, setCarData} = useContext(CarContext);
  const [updateIndex, setUpdateIndex] = useState()
  const [updateCarModal, setUpdateCarModal] = useState(false)

  useEffect(() => {
    console.log(carData);
  }, [carData]);

  const deleteData=(index)=>{
    const carRemoving = [...carData];
    carRemoving.splice(index, 1);
    setCarData(carRemoving);
    toast.show('Car Deleted SuccessFully', {
      duration: 1000,
      type: 'danger',
    });
  }

  const updateData=(index)=>{
    setUpdateIndex(index)
    setUpdateCarModal(true)
  }

  return (
    <View>
      
      {
        updateCarModal ? 
        <UpdateCar updateIndex={updateIndex} setUpdateCarModal={setUpdateCarModal}/>
        :
        <View style={{marginTop: 20}}>
           <View style={{marginHorizontal: 20}}>
        <ButtonField label="Go Back" onPress={() => setViewCarPage(false)} />
      </View>
        <ScrollView>
          {carData &&
            carData.map((e, key) => (
              <View key={key} style={{marginTop:10}}>
                <View style={styles.detailCardContainer}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.displayText}>No of Cars : </Text>
                    <Text style={[styles.displayText,{color:"green"}]}>{e.carCategorires && e.carCategorires}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.displayText}>Car Model : </Text>
                    <Text style={[styles.displayText,{color:"green"}]}>{e.carModel && e.carModel}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <ButtonField label="Delete" onPress={() => deleteData(key)}/>
                    <ButtonField label="Update" onPress={() => updateData(key)}/>
                  </View>
                </View>
              </View>
            ))}
        </ScrollView>
      </View>

      }
     
      
    </View>
  );
};

export default ViewAllCar;

const styles = StyleSheet.create({
  detailCardContainer: {
    height: 120,
    backgroundColor: '#fff',
    marginHorizontal: 30,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    paddingLeft: 10,
    paddingTop: 10,
  },
  displayText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
