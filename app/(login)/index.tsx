// LoginPage.js
import React, { useState ,useCallback} from 'react';
import { useRouter } from "expo-router";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { API_URL } from '@/env';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GlobalAccess } from '../../components/location/GlobalAccess';
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

        GlobalAccess.UserName=JSON.parse(user).Name;
        GlobalAccess.Phone=JSON.parse(user).Phone;
        GlobalAccess.UserId=JSON.parse(user)._id;

        router.push("../../(home)/");
      }     
    };

    checkLoginStatus();
  }, [])
);
  const handleUserLogin = async () => {
      try {  
        if (name!='' && phone!=''){
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

        GlobalAccess.UserName=data.Name;
        GlobalAccess.Phone=data.Phone;
        GlobalAccess.UserId=data._id;
        
        router.push("../../(home)/");
      }
      else{
        alert("Please enter valid details!");
      }
      } catch (error) {
        console.error("Login Error:", error);
        Alert.alert("Login Failed", "An error occurred during login. Please try again.");
      }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WELCOME TO DMART GROCERY 😊</Text>
       <Image
           source={require("@/assets/images/login.png")}
           style={styles.loginImage}/>
      

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
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign:'center',
    color:'#018786'
  },
  input: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#018786',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    color:'#018786'
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
  loginImage:{
    height:200,
    width:200,
  }
});
