import { Fontisto, FontAwesome,MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
const TabLayout = ()=> {
  return (
    <Tabs screenOptions={{headerShown:false}} >
      <Tabs.Screen name="(home)" options={{title:"Grocery",tabBarIcon:()=> <FontAwesome size={25} name="home" color={"#018786"}/>}} />
      <Tabs.Screen name="categories" options={{title:"Categories",tabBarIcon:()=> <MaterialIcons name="category" size={25} color={"#018786"}/> }}/>
      <Tabs.Screen name="cart" options={{title:"Basket",tabBarIcon:()=> <Fontisto name="shopping-basket" size={25} color={"#018786"}/> }}/>
      <Tabs.Screen name="profile" options={{title:"Profile",tabBarIcon:()=> <FontAwesome size={25} name="user-circle-o" color={"#018786"}/>}}/>
    </Tabs>
  );
}

export default TabLayout