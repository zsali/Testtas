import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../pages/Dashboard';
import CarPage from '../pages/CarPage';
import Login from '../pages/Login';
import ViewAllCar from '../pages/ViewAllCar';
import AddCar from '../pages/AddCar';


const Stack = createNativeStackNavigator();


const DashboardNavigation = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ title: 'Dashboard' }}
    />
    <Stack.Screen
        name="carInfo"
        component={CarPage}
        options={{ title: 'Car Info'}}
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
      <Stack.Screen name="Login" component={Login} options={{title: 'Login'}} />
</Stack.Navigator>
  )
}

export default DashboardNavigation

const styles = StyleSheet.create({})