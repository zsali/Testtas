import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonField from '../components/ButtonField'

const CarPage = () => {

  const addCar=()=>{

  }

  const ViewCar=()=>{

  }

  return (
    <View style={styles.container}>
    <View style={{marginHorizontal: 20}}>
      <ButtonField label="Add Car" onPress={addCar} />
    </View>
    <View style={{marginHorizontal: 20}}>
      <ButtonField label="View Cars" onPress={ViewCar} />
    </View>
  </View>
  )
}

export default CarPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
})