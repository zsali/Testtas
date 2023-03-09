import { StyleSheet, Text, View,TouchableOpacity,Modal,TouchableWithoutFeedback,ScrollView } from 'react-native'
import React,{useState,useContext, useEffect} from 'react'
import ButtonField from '../components/ButtonField'
import InputField from '../components/InputField'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { CarContext } from '../components/CarContext'
import {useToast} from 'react-native-toast-notifications';

const AddCar = ({setAddCarPage}) => {
  const toast = useToast();
  const [carCategoriresModal, setCarCategoriresModal] = useState(false)
  const {carData, setCarData } = useContext(CarContext);

  const [data, setData] = useState({
    carCategorires: '',
    carColor: '',
    carModel:'',
    carMake:'',
    carRegNo:'',
  });

  const addCarValidation = Yup.object({
    carCategorires: Yup.string()
      .required('Car Categories is required'),
      carColor: Yup.string()
      .required('Car Color is Required'),
      carModel: Yup.string()
      .required('Car Model is Required'),
      carMake: Yup.string()
      .required('Car Make is Required'),
      carRegNo: Yup.string()
      .required('Car Registration No is Required'),
  });

 
  

  const handleSubmit=(carValidData)=>{
    
    setCarData(oldArray => [...oldArray,carValidData] );
    toast.show('Car Added SuccessFully', {
      duration: 1000,
      type: 'success',
    });
    setTimeout(() => {
      
      setAddCarPage(false)
    }, 1500);
  }

  const carCategoryTpeData = [
    {id: 1, name: 'Cat1'},
    {
      id: 2,
      name: 'Cat2',
    },
    {
      id: 3,
      name: 'Cat3',
    },
  ];

  const renderCarCaegoryModal = setFieldValue => {
    return (
      <Modal animationType="slide" transparent={true} visible={carCategoriresModal}>
        <View style={styles.modalAlignment}>
          <View style={styles.modalView}>
            <View>
              <Text  style={styles.headline}>
                Select Car Categories
              </Text>
            </View>
            {carCategoryTpeData.map(e => {
              return (
                <TouchableWithoutFeedback
                  key={e.id}
                  onPress={() => {
                    setCarCategoriresModal(false);
                    setFieldValue('carCategorires', e.name);
                  }}>
                  <View style={styles.nameStyling}>
                    <Text style={styles.nameText}>{e.name}</Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View>
      <View style={{marginHorizontal: 20}}>
      <ButtonField label="Go Back" onPress={()=>setAddCarPage(false)} />
    </View>
    <Formik
      initialValues={data}
      validationSchema={addCarValidation}
      onSubmit={handleSubmit}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched,setFieldValue}) => (
        <View style={{marginTop:20}}>

          <ScrollView>

          
        
    <TouchableOpacity onPress={() => setCarCategoriresModal(true)}>
            <InputField
              name="carCategorires"
              label="Car Categories"
              value={values.carCategorires}
              errors={errors.carCategorires}
              touched={touched.carCategorires}
              editable={false}
            />
          </TouchableOpacity>
          <View>
            <InputField
              label="Car Color"
              name="carColor"
              value={values.carColor}
              onBlur={handleBlur('carColor')}
              onChangeText={handleChange('carColor')}
              errors={errors.carColor}
              touched={touched.carColor}
            />
          </View>
          <View>
            <InputField
              label="Car Model"
              name="carModel"
              value={values.carModel}
              onBlur={handleBlur('carModel')}
              onChangeText={handleChange('carModel')}
              errors={errors.carModel}
              touched={touched.carModel}
            />
          </View>
          <View>
            <InputField
              label="Car Make"
              name="carMake"
              value={values.carMake}
              onBlur={handleBlur('carMake')}
              onChangeText={handleChange('carMake')}
              errors={errors.carMake}
              touched={touched.carMake}
            />
          </View>
          <View>
            <InputField
              label="Car Registration #"
              name="carRegNo"
              value={values.carRegNo}
              onBlur={handleBlur('carRegNo')}
              onChangeText={handleChange('carRegNo')}
              errors={errors.carRegNo}
              touched={touched.carRegNo}
            />
          </View>
          <View>
            <ButtonField label="Add Car" onPress={handleSubmit} />
          </View>
          </ScrollView>
          {renderCarCaegoryModal(setFieldValue)}
          </View>
      )}
      </Formik>
    </View>
  )
}

export default AddCar

const styles = StyleSheet.create({
  modalAlignment: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    height: 250,
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingBottom: 10,

    borderColor: '#333',
    borderWidth: 2,
  },
  nameStyling: {
    marginHorizontal: 25,
    marginVertical: 10,
    borderBottomColor: "#000",
    borderBottomWidth: 0.5,
  },
  bottombtn: {
    marginTop: 20,
    marginBottom: 30,
  },
  headline: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    width: 200,
    marginBottom:20,
  },
  nameText:{
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
  }
})