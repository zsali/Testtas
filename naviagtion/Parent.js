import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import storage from '../storage/storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Register from '../pages/Register';

const Parent = () => {
  const [auth, setAuth] = useState(false);

  //this is for the auth user 
  useEffect(() => {
    storage
      .get('loginInfo')
      .then(data => {
        console.log(data);
        if (data) {
          setAuth(true);
        }
      })
      .catch(err => console.log(err));
  }, []);

  const Stack = createNativeStackNavigator();

  

  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    >
      
      
      <Stack.Screen name="Login" component={Login} options={{title: 'Login'}} />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{title: 'Register'}}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{title: 'Dashboard'}}
      />
    </Stack.Navigator>
  );
};

export default Parent;

const styles = StyleSheet.create({});
