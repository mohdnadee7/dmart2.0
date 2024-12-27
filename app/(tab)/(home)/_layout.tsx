import { Stack } from "expo-router";
const HomeLayout = ()=> {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index" options={{title:"Grocery"}} />
    </Stack>
  );
}

export default HomeLayout