import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import ButtonField from '../components/ButtonField'
import AddCar from './AddCar'
import ViewAllCar from './ViewAllCar'

const CarPage = ({setAddCar}) => {

  const [addCarPage, setAddCarPage] = useState(false)
  const [viewCarPage, setViewCarPage] = useState(false)

  return (
    <>
    {addCarPage ? 
    <AddCar setAddCarPage={setAddCarPage}/>

    : viewCarPage ? 
    <ViewAllCar setViewCarPage={setViewCarPage}/>
    :
    <View style={styles.container}>
    <View style={{marginHorizontal: 20}}>
      <ButtonField label="Add Car" onPress={()=>setAddCarPage(true)} />
    </View>
    <View style={{marginHorizontal: 20}}>
      <ButtonField label="View Cars" onPress={()=>setViewCarPage(true)} />
    </View>
    <View style={{marginHorizontal: 20}}>
      <ButtonField label="Go Back" onPress={()=>setAddCar(false)} />
    </View>
  </View>
    }
    </>
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