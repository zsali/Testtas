import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Parent from './naviagtion/Parent';
import {ToastProvider} from 'react-native-toast-notifications';

const App = () => {
  return (
    <NavigationContainer>
      <ToastProvider>
        <Parent />
      </ToastProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
