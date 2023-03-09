import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const ButtonField = ({onPress, label}) => {
  return (
    <View style={{marginHorizontal: 50, marginTop: 20}}>
      <Button onPress={onPress} title={label} color="#841584" />
    </View>
  );
};

export default ButtonField;

const styles = StyleSheet.create({});
