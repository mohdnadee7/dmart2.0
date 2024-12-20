// LoginPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const LoginPage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSendOtp = () => {
    if (name && phone.length === 10) {
      // Simulate sending OTP (you would call your API here)
      console.log(`Sending OTP to ${phone}`);
     // navigation.navigate('OtpPage', { phone });
    } else {
      Alert.alert("Invalid input", "Please enter a valid name and 10-digit phone number.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="numeric"
        maxLength={10}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#018786',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
