import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  BackHandler
} from 'react-native';
import React, {useEffect, useState} from 'react';
import InputField from '../components/InputField';
import ButtonField from '../components/ButtonField';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useToast} from 'react-native-toast-notifications';
import storage from '../storage/storage';

const Login = ({navigation}) => {


  const toast = useToast();

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const UserData = require('./User.json');

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

  //User Formik for Validation

  const loginValidation = Yup.object({
    email: Yup.string()
      .email('Email is not Valid')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is Required')
      .min(8, 'Password Must be Atleat 8 Characters'),
  });

  const handleSubmit = loginData => {
    let show=0;
    //It Check the data form the json file 
    //Only firstfirst@gmail.com can login
    //password 123456789
      console.log(UserData)
    if (UserData.users) {
      for (let i = 0; i < UserData.users.length; i++) {
        show=0;
        if (
          UserData.users[i].email === loginData.email.toLowerCase() &&
          UserData.users[i].password === loginData.password.toLowerCase()
        ) {
          navigation.navigate('Dashboard');
        storage.set('loginInfo', JSON.stringify(true));
        
        }else{

          toast.show('Wrong Crediental.', {
              duration: 2000,
              type: 'danger',
            });
          }
      }
    } else {
      toast.show('No Info Found.', {
        duration: 2000,
        type: 'danger',
      });
    }
    
  };

  return (
    <Formik
      initialValues={data}
      validationSchema={loginValidation}
      onSubmit={handleSubmit}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View style={styles.container}>
          <View>
            {/* input File Component  */}
            <InputField
              label="Email"
              name="email"
              keyboardType="email-address"
              value={values.email}
              onBlur={handleBlur('email')}
              onChangeText={handleChange('email')}
              errors={errors.email}
              touched={touched.email}
            />
          </View>
         {/* input File Component  */}
          <View>
            <InputField
              label="Password"
              name="password"
              secureTextEntry={true}
              value={values.password}
              onBlur={handleBlur('password')}
              onChangeText={handleChange('password')}
              errors={errors.password}
              touched={touched.password}
            />
          </View>
          <View>
            <ButtonField label="Sign In" onPress={handleSubmit} />
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 15,
                  marginTop: 30,
                }}>
                Go To Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
