import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import CarPage from '../pages/CarPage';
import AddCar from '../pages/AddCar';
import ViewAllCar from '../pages/ViewAllCar';

const Stack = createNativeStackNavigator();
const CredientalNavigation = () => {
  return (
    <Stack.Navigator>
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
       <Stack.Screen
        name="carInfo"
        component={CarPage}
        options={{ title: 'carInfo'}}
    />
       <Stack.Screen
        name="AddCar"
        component={AddCar}
        options={{ title: 'Add Car'}}
    />
    <Stack.Screen
        name="ViewCars"
        component={ViewAllCar}
        options={{ title: 'View Car '}}
    />
    </Stack.Navigator>
  );
};

export default CredientalNavigation;

const styles = StyleSheet.create({});
