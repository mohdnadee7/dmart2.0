// LoginPage.js
import React, { useState ,useCallback} from 'react';
import { useRouter } from "expo-router";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { API_URL } from '@/env';
import AsyncStorage from "@react-native-async-storage/async-storage";

const IndexPage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const router = useRouter();
  
useFocusEffect(
  useCallback(() => {
    const checkLoginStatus = async () => {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        console.log("User already logged in:", JSON.parse(user));
       // router.push("/(tab)/home)");
      }
      console.log("User already logged in:");
      router.push("../../(home)/search");
      
    };

    checkLoginStatus();
  }, [])
);
  const handleUserLogin = async () => {
      try {  
        const response = await fetch(API_URL+"login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Name: name,
            Phone: phone,
          }),
        });
  
        if (!response.ok) {
          throw new Error(`Server Error: ${response.statusText}`);
        }
  
        const data = await response.json();
        console.log("API Response:", data);
  
        // Save user data to cookies
        await AsyncStorage.setItem("user", JSON.stringify(data));
        Alert.alert("Login Successful", "Your OTP has been sent.");
        router.navigate("/(tab)/(home)/");
      } catch (error) {
        console.error("Login Error:", error);
        Alert.alert("Login Failed", "An error occurred during login. Please try again.");
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

      <TouchableOpacity style={styles.button} onPress={handleUserLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IndexPage;

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
