// OtpPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const OtpPage = () => {
  //const { phone } = 345456456457;
  const [otp, setOtp] = useState('');

  const handleVerifyOtp = () => {
    if (otp.length === 6) {
      // Verify OTP here (this would typically call your API)
      console.log(`Verifying OTP: ${otp}`);
      Alert.alert("Success", "OTP verified successfully!");
      //avigation.navigate('HomePage'); // Navigate to the home page or dashboard after verification
    } else {
      Alert.alert("Invalid OTP", "Please enter a 6-digit OTP.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify OTP</Text>
      <Text style={styles.subtitle}>Enter the OTP sent to phone</Text>

      <TextInput
        placeholder="OTP"
        value={otp}
        onChangeText={setOtp}
        keyboardType="numeric"
        maxLength={6}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpPage;

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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555',
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
