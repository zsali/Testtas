import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const InputField = ({onChangeText, value, label, errors, touched,name}) => {
  return (
    <View style={styles.inputField}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 15,
          marginBottom: 2,
          marginLeft: 10,
        }}>
        {label}
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        name={name}
      />
      {errors && touched && (
        <View className="ml-2" style={styles.errorBox}>
          <Text style={styles.error}>{errors}</Text>
        </View>
      )}
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputField: {
    marginHorizontal: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  errorBox: {
    marginHorizontal: 15,
  },
  error: {
    color: 'red',
  },
});
