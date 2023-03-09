import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import InputField from '../components/InputField';
import ButtonField from '../components/ButtonField';
import {Formik} from 'formik';
import * as Yup from 'yup';
import RNFS from 'react-native-fs';
import {useToast} from 'react-native-toast-notifications';


const Register = ({navigation}) => {
  const userData = [];
  const toast = useToast();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const registerValidation = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Email is not Valid')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is Required')
      .min(8, 'Password Must be Atleat 8 Characters'),
  });

  const handleSubmit = async registerData => {
    try {
      const path = RNFS.DocumentDirectoryPath + '/User.json';
      // const data = await RNFS.readFile(path, 'utf8');
      // const jsonData = JSON.parse(data);
      // const newUser = {
      //   registerData
      // };
      // jsonData.users.push(newUser);
      await RNFS.writeFile(path, JSON.stringify(registerData), 'utf8');
      toast.show('User registered successfully', {
        duration: 2000,
        type: 'success',
      });
      console.log('User registered successfully');
      setTimeout(() => {
        
        navigation.navigate("Login")
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik
      initialValues={data}
      validationSchema={registerValidation}
      onSubmit={handleSubmit}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View style={styles.container}>
          <View>
            <InputField
              label="Name"
              name="name"
              value={values.name}
              onBlur={handleBlur('name')}
              onChangeText={handleChange('name')}
              errors={errors.name}
              touched={touched.name}
            />
          </View>
          <View>
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
            <ButtonField label="Register" onPress={handleSubmit} />
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 15,
                  marginTop: 30,
                }}>
                Go To Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
