import { Link } from "expo-router";
import { View,Text, TouchableOpacity, StyleSheet } from "react-native";

const MyButton=({title, onPress})=>{
    return (
        <View>
            <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles= StyleSheet.create({
button:{
    backgroundColor:"orange", paddingHorizontal:30 ,paddingVertical:15, borderRadius:10
},
text:{
    color:"#fff",fontSize:16,fontWeight:"bold", textAlign:"center"
}
});
export default MyButton