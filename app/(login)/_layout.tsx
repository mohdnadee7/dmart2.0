import { Stack } from "expo-router";
const LoginLayout = ()=> {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index" options={{title:"Login"}} />
      {/* <Stack.Screen name="optPage" options={{title:"OTP Varification"}} /> */}
    </Stack>
  );
}

export default LoginLayout