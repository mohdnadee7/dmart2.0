import MyButton from "@/components/MyButton";
import { FontAwesome } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { View,Text, TextInput,StyleSheet } from "react-native";

const SignUp=()=>{

    const onSignUp=()=>{
      
    }
    return (
        
     <View style={{flex:1}}>
     <View style={style.userIcon}>
     <FontAwesome name="user" size={100}/>
     </View>
     <View style={{ padding:20, gap:20}}>
     <View>
         <TextInput placeholder="Enter full name" style={style.inputText}/>
     </View>
     <View>
         <TextInput placeholder="Enter phone number" style={style.inputText}/>
     </View>
     <View>
         <TextInput placeholder="Enter your email" style={style.inputText}/>
     </View>
     <View>
         <TextInput placeholder="Enter your password" style={style.inputText}/>
     </View>
         <MyButton title={"Register"} onPress={onSignUp} />
         <Text style={style.registerText}>Already have an account? </Text>
         <Link href={"/login"}  style={style.registerbtn}>Login</Link>
     </View>
    
</View>
    );
}
export default SignUp

const style = StyleSheet.create({
  userIcon:{
  paddingHorizontal:35,
  paddingVertical:20,
  borderColor:"#000",
  borderWidth:2,
  borderRadius:100,
  marginTop:100,
  marginBottom:40,
  width:150,
  marginHorizontal:"auto"
  },
  inputText:{
      borderWidth:1,
      height:50,
      paddingHorizontal:30,
      borderRadius:10
  },
  registerText:{
    textAlign:"center",
},registerbtn:{
    color:"blue",
    textAlign:"center",
}
})